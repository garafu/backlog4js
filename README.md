# Backlog4js

Backlog API version 2 client.

## Installation

```
npm install backlog4js
```

## Getting started

```
const HOST = "xxxx.backlog.com";
const API_KEY = "===YOUR-API-KEY===";
const Backlog = require("backlog4js");

var backlog = new Backlog(HOST, API_KEY);

(async function () {
  var data;
  try {
    data = await backlog.getProjectList();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();
```

## References

* [API Documents](https://github.com/garafu/backlog4js/blob/master/docs/api.md)

(*) See also [official api references](https://developer.nulab.com/docs/backlog/)

## License

MIT License
