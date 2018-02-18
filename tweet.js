console.log("The app is running");

var Twit = require('twit');

var config = require('./config');
//console.log(config);

var T = new Twit(config);

tweetIt();
setInterval(tweetIt, 1000*20);


function tweetIt() {

	var r = Math.floor(Math.random()*100);

	var tweet = {
		status: 'Random Number ' +r+'. Today is Sunday'
	}

	T.post('statuses/update', tweet, tweeted);


	function tweeted(err, data, response) {
		if(err) {
	  		console.log("Something went wrong!!");
		} else {
			console.log("Tweeted Successfully");
		}
	}
}

