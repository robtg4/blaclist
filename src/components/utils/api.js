//api connector to external data 

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

	//make request using fetch api, returns a promise
	//then call function on response which isn't immed. usable
	//before we make use we need to do .json()
	//which return a promise, which we need to do another then on
	//we will return an object with data we need
}