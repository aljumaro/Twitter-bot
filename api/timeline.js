var bot = require('./bot.js');

var TimelineApi = {
	tweet: (status, cb) => bot.post('statuses/update', {status: status}, cb),
	reply: (status, tweet_id, cb) => bot.post('statuses/update', {status: status, in_reply_to_status_id: tweet_id}, cb),
	delete: (tweet_id, cb) => bot.post('statuses/destroy/:id', {id: tweet_id}, cb),
	get: (count = 1, cb) => bot.get('statuses/home_timeline', {count: count}, cb),
	retweet: (tweet_id, cb) => bot.post('statuses/retweet/:id', {id: tweet_id}, cb),
	unretweet: (tweet_id, cb) => bot.post('statuses/unretweet/:id', {id: tweet_id}, cb),
	fav: (tweet_id, cb) => bot.post('favorites/create', {id: tweet_id}, cb),
	unfav: (tweet_id, cb) => bot.post('favorites/destroy', {id: tweet_id}, cb)
};

module.exports = TimelineApi;