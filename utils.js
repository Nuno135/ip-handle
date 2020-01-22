class Utils {
    constructor() {
        this.valid = false;
        this.checkv4 = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;
        //this.checkv6 = /([0-9a-f]{5,}|:{3,}|[^:]:$|^:[^:]|\/$)/ig;
    }

    ip4Check(ip) {
        if (ip.match(this.checkv4)) {
            this.valid = true;
        } else {
            this.valid = false;
        }
        return this.valid;
    }
}

module.exports = new Utils();