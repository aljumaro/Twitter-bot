var bot = require('./bot.js');

var PeopleAPI = {
	getFollowers: (screen_name, cb) => bot.get('followers/list', {screen_name: screen_name}, cb),
	getFriends: (screen_name, cb) => bot.get('friends/list', {screen_name: screen_name}, cb),
	follow: (screen_name, cb) => bot.post('friendships/create', {screen_name: screen_name}, cb)
};

module.exports = PeopleAPI;