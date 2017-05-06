var timelineAPI = require('./api/timeline.js');
var searchAPI = require('./api/search.js');
var peopleAPI = require('./api/people.js');
var dmAPI = require('./api/dm.js');
var result = require('./api/results.js');
var bot = require('./api/bot.js');

//peopleAPI.getFollowers('aljumaro_bot', result);

var stream = bot.stream('statuses/filter', {follow: '528195109'});
stream.on('tweet', (t) => console.log(t.text + '\n'));