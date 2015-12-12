//api connector to external data 
//var Fetch = require('whatwg-fetch');

//rss feeds library 
var RSS = require('../stores/rss-feeds');

module.exports = {
	//make request using fetch api, returns a promise
	//then call function on response which isn't immed. usable
	//before we make use we need to do .json()
	//which return a promise, which we need to do another then on
	//we will return an object with data we need
	
	fbDataFetch: function(id, token) {
		var rootUrlFB = 'https://graph.facebook.com/v2.3/'+id+'?fields=name,email&access_token='+token;

		//return promise as well
		return fetch(rootUrlFB)
			.then(function(response) {	
				return response.json()
			})
			.then(function(json) {
				return {
					username: json.name, 
					email: json.email,
				}
		    });
	}, 
	fetchRss: function() {
		//go through the rss feeds provided within the library 
		for (var i = 0; i < RSS.Feeds.length; i++)
		{
			//clean the url
			var url = RSS.Feeds[i];
			if (!(/^http:\/\//.test(url))) {
		      url = "http://" + url;
		    }

		    //encode the feed
		    var GOOGLE_FEED_API_URL = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=-1&q="
		    var url = GOOGLE_FEED_API_URL + encodeURIComponent(url);
		    console.log(url);
		}
		//return as json 
	    return fetch(url).then((res) => res.json());
	}

}