const Cache = require('node-cache');
// see more: https://www.npmjs.com/package/node-cache
module.exports = async (app, plugin) => {
  app.memory = new Cache(plugin.config);
};