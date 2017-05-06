var bot = require('./bot.js');

var SearchApi = {
	search: (query, cb) => bot.get('search/tweets', query, cb)
};

module.exports = SearchApi;