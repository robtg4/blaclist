
//fetch data from api 
var Api = require('../utils/api');
var Promise = require("bluebird");
//var Reflux = require('reflux');
//var Actions = require('../../actions');
//var _ = require('lodash'); //utility library for common ops that js needs 
//we have an array of objects and some contain a key that is_album 
//- we want to fliter that out, we use reject to help do that 
//if bool true we reject, function constructs new array of data without the rejected
//objects 

//api connector to external data 
var React = require('react-native');

module.exports = {
  //listenables: [Actions], 
  getArticles: function(personalFeed) {
    console.log("Inside the getArticles function");
    console.log(personalFeed);
    var RSS_custom = Api.fetchRss(personalFeed);
    var rss_feeds = [];
    var final_array = [];
    console.log(RSS_custom);
    //go through each of the urls and make sure 
    //their fine 
    for (var i = 0; i < RSS_custom.length; i++)
    {
        //console.log("Processing through the following custom feed: " + RSS_custom[i] + ": Repo #" + i);
        //processing url 1 by 1 to maintain global scope for all repos 
        console.log(RSS_custom[i]);
        rss_feeds.push(this.fetchEntries(RSS_custom[i]));
    }

    console.log("Done processing repos. Combining promises");
    console.log(rss_feeds);
    //combining promises
    var that = this; 
    return Promise.all(rss_feeds)
      .then((res) => {
          for (var q = 0; q < res.length; q++)
          {
            for (var a =0; a < res[q].length; a++)
            {
              final_array.push(res[q][a]);
            }
          }
          //console.log('The following array of objects was constructed and is now being shuffled');
          //console.log(final_array.length);

          // delete all duplicates from the array
          for(var i = 0; i < final_array.length; i++) 
          {
            for (var n = 0; n < final_array.length; n++) 
            {
              if (final_array[i].title.text == final_array[n].title.text) 
              {
                final_array.splice(i, 1)
              }
            }
          }

          that.shuffle(final_array);
          
          console.log(final_array);
          return final_array;
      });
    
  },  
  fetchEntries: function(url) {
    console.log("inside the fetchEntries");
    var that = this; 
    return fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Processing the custom feed");
        //check if the rss feed is up 
        if (that.responseValidator(responseData)) 
        {
          console.log("The repo is up! Now processing the entries within the data");
          //if it is indeed up we need to return the objects 1 by 1 
          //store in new array that is 
          //indicative of working feeds 
          //get initial set of entries 
          var working_feeds = [];
          for (var x = 0; x < responseData.results.collection1.length; x++)
          {
            console.log("looping through feed entries and putting into array");
            console.log(responseData.results.collection1[x]);

            //check if the entry has an image associated with it
            console.log(responseData.results.collection1[x].image.src);
            if (responseData.results.collection1[x].image.src != "") 
            {
              //one by one so that we can randomize the array's contents 
              working_feeds.push(responseData.results.collection1[x]);
            }
          }
          console.log("The working feed array is the following");
          console.log(working_feeds);
          return working_feeds; 
        } 
      });
  }, 
  responseValidator: function(responseData) {
    console.log("Verifying data to see if repo is up");
    //console.log(responseData);
   
      if(responseData.thisversionstatus == 'success') 
      {
        console.log("Success!");
        //console.log(responseData);
        return true; 
      } else {
        return false; 
      }
  }, 
  shuffle: function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }, 
  
};

