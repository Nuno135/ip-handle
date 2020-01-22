# ip-handle
> Simple IP Converter

## Installation
```bash
npm install ip-handle
```

## Usage
Convert IPv4 to decimal:
```js
var ipHandler = require('ip-handle');

ipHandler.ip4ToDec('27.116.56.0');
// 460601344
```

Convert Decimal to IPv4
```js
var ipHandler = require('ip-handle');

ipHandler.decToIp4(460601344);
// 27.116.56.0
```

Convert IPv6 to decimal:
```js
var ipHandler = require('ip-handle');

ipHandler.ip6ToDec('0:0:0:0:0:FFFF:100:100');
// 281470698520832
```

```js
var ipHandler = require('ip-handle');

ipHandler.decToIp6(281470698520832);
// 0:0:0:0:0:FFFF:100:100
```
