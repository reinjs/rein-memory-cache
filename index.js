const Cache = require('node-cache');

module.exports = function MemoryCache(...args) {
  const cache = new Cache(...args);
  new Proxy(cache, {
    get,
    set
  });
};

function get() {

}

function set() {

}