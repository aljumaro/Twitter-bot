var bot = require('./bot.js');

var DirectMessageApi = {
	create: (screen_name = '', text = '', cb) => {
		bot.post('direct_messages/new', {screen_name: screen_name, text: text}, cb);
	}
};

module.exports = DirectMessageApi;