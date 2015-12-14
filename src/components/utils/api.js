//api connector to external data 
var React = require('react-native');

//libraries
var RSS = require('../stores/rss-feeds');

module.exports = {

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
	fetchRss: function(personalFeed) {
		//go through the rss feeds provided within the library
		console.log("In APi");
		console.log(personalFeed);
		//match the personalFeed array with the names of the rss arrays
		var RSS_custom = []; 
		//go through the user array given 
		for (var x = 0; x < personalFeed.length; x++)
		{
			console.log('Going through: ' + personalFeed[x]);
			//go through rss names to match 
			for (var i = 0; i < RSS.FEEDS.length; i++)
			{
				console.log('Matching: ' + RSS.FEEDS[i].name + " with " + personalFeed[x]);
				//start matching as substrings
				if (RSS.FEEDS[i].name.toLowerCase().indexOf(personalFeed[x].toLowerCase()) > -1)
				{	
					console.log('Its a MATCH!');
					//the names match, so we need to get all the 
					//feeds that are relevant in that array
					//go into array of rss topic arrays
					console.log(RSS.FEEDS[i]);
					for (var w = 0; w < RSS.FEEDS[i].length; w++)
					{
						RSS_custom.push(RSS.FEEDS[i][w]);
					}
				}
			}
		}
	
		//clean customized array of urls 
		for (var z = 0; z < RSS_custom.length; z++)
		{
			//clean the url, default = 5
			if (!(/^http:\/\//.test(RSS_custom[z]))) {
		     RSS_custom[z] = "http://" + RSS_custom[z];
		    }

		    //encode the feed
		    var GOOGLE_FEED_API_URL = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=-1&q=";
		    RSS_custom[z] = GOOGLE_FEED_API_URL + encodeURIComponent(RSS_custom[z]);
		}
		
		console.log(RSS_custom);
		var url = RSS_custom[2];

		//get json from all the different 
	    return RSS_custom; 
	},
	imageSearch: function(query) {
		
	} 


}