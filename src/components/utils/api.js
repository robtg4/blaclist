//api connector to external data 
var React = require('react-native');

//libraries
var RSS = require('../stores/rss-feeds');
var VIDEO = require('../stores/video-feeds');

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
		//console.log("In APi");
		//console.log(personalFeed);
		//match the personalFeed array with the names of the rss arrays
		var RSS_custom = []; 
		//go through the user array given 
		for (var x = 0; x < personalFeed.length; x++)
		{
			//console.log('Going through: ' + personalFeed[x]);
			//go through rss names to match 
			for (var i = 0; i < RSS.FEEDS.length; i++)
			{
				//console.log('Matching: ' + RSS.FEEDS[i].name + " with " + personalFeed[x]);
				//start matching as substrings
				if (RSS.FEEDS[i].name.toLowerCase().indexOf(personalFeed[x].toLowerCase()) > -1)
				{	
					//console.log('Its a MATCH!');
					//the names match, so we need to get all the 
					//feeds that are relevant in that array
					//go into array of rss topic arrays
					//console.log(RSS.FEEDS[i]);
					for (var w = 0; w < RSS.FEEDS[i].length; w++)
					{
						RSS_custom.push(RSS.FEEDS[i][w]);
					}
				}
			}
		}

		//always add default array
		for (i = 0; i < RSS.FEEDS[RSS.FEEDS.length-1]; i++)
		{
			for (x = 0; x < RSS.FEEDS[i].length; x++)
			{
				RSS_custom.push(RSS.FEEDS[i][x]);
			}
		}
		
		//console.log(RSS_custom);
		var url = RSS_custom[2];

		//get json from all the different 
	    return RSS_custom; 
	},
	fetchVideo: function(personalFeed) {
		//match the personalFeed array with the names of the rss arrays
		console.log("Fetching Videos");
		console.log(personalFeed);
		var Video_custom = []; 
		//go through the user array given 
		for (var x = 0; x < personalFeed.length; x++)
		{
			console.log('Going through: ' + personalFeed[x]);
			//go through rss names to match 
			for (var i = 0; i < VIDEO.FEEDS.length; i++)
			{
				console.log('Matching Videos: ' + VIDEO.FEEDS[i].name + " with " + personalFeed[x]);
				//start matching as substrings
				if (VIDEO.FEEDS[i].name.toLowerCase().indexOf(personalFeed[x].toLowerCase()) > -1)
				{	
					console.log('Its a MATCH!');
					//the names match, so we need to get all the 
					//feeds that are relevant in that array
					//go into array of rss topic arrays
					console.log(VIDEO.FEEDS[i]);
					for (var w = 0; w < VIDEO.FEEDS[i].length; w++)
					{
						Video_custom.push(VIDEO.FEEDS[i][w]);
					}
				}
			}
		}

		//always add default array
		for (x = 0; x < VIDEO.FEEDS[VIDEO.FEEDS.length-1].length; x++)
		{
			console.log(VIDEO.FEEDS[VIDEO.FEEDS.length-1][x]);
			Video_custom.push(VIDEO.FEEDS[VIDEO.FEEDS.length-1][x]);
		}
		
		console.log(Video_custom);

		//get json from all the different 
	    return Video_custom; 
	}, 


}