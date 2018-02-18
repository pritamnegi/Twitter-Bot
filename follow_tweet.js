console.log("The app is running");

var Twit = require('twit');

var config = require('./config');
//console.log(config);

var T = new Twit(config);

//setting up a user stream
var stream = T.stream('user');

//Anytime someone follows you
stream.on('follow', followed);

function followed(event) {
	var name = event.source.name;
	var screenName = event.source.screen_name;
	tweetIt('@'+'Thank You for following me');

}

//tweetIt();
//setInterval(tweetIt, 1000*20);

function tweetIt(txt) {


	var tweet = {
		status: txt
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

