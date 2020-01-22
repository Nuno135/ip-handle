const bigInt = require('big-integer');
let utils = require('./constants.js')

class ipHandle {
    constructor() {
        this.valid = false;
    }

    ip4ToDec(ip) {
        if (utils.ip4Check(ip) === false)
            throw new Error('Invalid IP Address.');

        return ip.split('.').map((octet, index, array) => {
            return parseInt(octet) * Math.pow(256, (array.length - index - 1));
          }).reduce((prev, curr) => {
            return prev + curr;
          });
    }

    decToIp4(dec) {
        if (typeof(dec) === 'string') 
            throw new Error('Invalid Decimal');

        var part1 = dec & 255;
        var part2 = ((dec >> 8) & 255);
        var part3 = ((dec >> 16) & 255);
        var part4 = ((dec >> 24) & 255);
        return part4 + "." + part3 + "." + part2 + "." + part1;
    }

    ip6ToDec(ip) {
        
        let start = ip.indexOf('::');
        let x;
        if (start !== -1) {
            let s = ip.substring(0, start);
            let str = ip.substring(start+2, ip.length);
            let first = bigInt(decimal6(s));
            x = ip.match(new RegExp(":", "g")).length-2;
            first = first.shiftLeft(16*(7-x)).add(decimal6(str));
            return first.value.toString().substring(0, first.value.toString().length);
        }
        let arr = ip.split(':');
        let val = bigInt("0");
        let i;
        for (i=0; i<arr.length; i++) {
            let bi = bigInt(arr[i], 16);
            val = val.shiftLeft(16).add(bi);
        }
        return val.value.toString().substring(0, val.value.toString().length);
    }

    decToIp6(dec) {
        if (typeof(dec) === 'string') 
            throw new Error('Invalid Decimal');

        dec = bigInt(dec.toString());
        let an = bigInt("FFFF", 16);
        let str = '';
        let i;
        for (i=0; i<8; i++) {
            str = dec.and(an).toString(16)+ ":" + str;
            dec = dec.shiftRight(16);
        }
        return str.substring(0, str.length-1).toUpperCase();
    }
}

module.exports = new ipHandle();