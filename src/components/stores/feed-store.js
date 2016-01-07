
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
  getVideos: function(personalFeed) {
    var Video_custom = Api.fetchVideo(personalFeed);
    var video_feeds = [];
    var video_array = [];
    console.log(Video_custom);
    //go through each of the urls and make sure 
    //their fine 
    for (var i = 0; i < Video_custom.length; i++)
    {
        video_feeds.push(this.fetchVideos(Video_custom[i]));
    }

    var that = this; 
    return Promise.all(video_feeds)
      .then((res) => {
          for (var q = 0; q < res.length; q++)
          {
            for (var a =0; a < res[q].length; a++)
            {
              video_array.push(res[q][a]);
            }
          }
          console.log('The following array of objects was constructed and is now being shuffled');
          console.log(video_array.length);

          console.log(video_array);
          return video_array;
      });
    
  }, 
  getArticles: function(personalFeed) {
    //console.log("Inside the getArticles function");
    //console.log(personalFeed);
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
        //console.log(RSS_custom[i]);
        rss_feeds.push(this.fetchEntries(RSS_custom[i]));
    }

    //console.log("Done processing repos. Combining promises");
    //console.log(rss_feeds);
    //combining promises
    var that = this; 
    return Promise.all(rss_feeds)
      .then((res) => {
          for (var q = 0; q < res.length; q++)
          {
            console.log(res);
            for (var a =0; a < res[q].length; a++)
            {
              final_array.push(res[q][a]);
            }
          }
          //console.log('The following array of objects was constructed and is now being shuffled');
          //console.log(final_array.length);

          // delete all duplicates from the array***

          final_array = that.order(final_array);
          
          //console.log(final_array);
          return final_array;
      });
    
  },  
  fetchVideos: function(url) {
    //console.log("inside the fetchEntries");
    var that = this; 
    return fetch(url)
      .then((response) => response.json())
      .then((responseData) => {

        if (that.responseValidator(responseData)) 
        {
          var vids_feeds = [];
          for (var x = 0; x < responseData.results.collection2.length; x++)
          {
              vids_feeds.push(responseData.results.collection2[x]);
          }
          //console.log("The working feed array is the following");
          //console.log(working_feeds);
          return vids_feeds; 
        } 
      });
  }, 
  fetchEntries: function(url) {
    //console.log("inside the fetchEntries");
    var that = this; 
    return fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        //console.log("Processing the custom feed");
        //check if the rss feed is up 
        if (that.responseValidator(responseData)) 
        {
          //console.log("The repo is up! Now processing the entries within the data");
          //if it is indeed up we need to return the objects 1 by 1 
          //store in new array that is 
          //indicative of working feeds 
          //get initial set of entries 
          var working_feeds = [];
          for (var x = 0; x < responseData.results.collection1.length; x++)
          {
            //console.log("looping through feed entries and putting into array");
            //console.log(responseData.results.collection1[x]);

            //check if the entry has an image associated with it
            //console.log(responseData.results.collection1[x].image.src);
            if (responseData.results.collection1[x].image.src != "") 
            {
              //one by one so that we can randomize the array's contents 
              working_feeds.push(responseData.results.collection1[x]);
            }
          }
          //console.log("The working feed array is the following");
          //console.log(working_feeds);
          return working_feeds; 
        } 
      });
  }, 
  responseValidator: function(responseData) {
    //console.log("Verifying data to see if repo is up");
    //console.log(responseData);
   
      if(responseData.thisversionstatus == 'success') 
      {
        //console.log("Success!");
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
  order: function(array) {
    //go through array and rearrange by post time
    var currentday = String(new Date().getDay());
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    var currentmonth = monthNames[new Date().getMonth()];
    var currentyear = String(new Date().getFullYear());

    //order of arrays
    var hourarray = [];
    var minutearray = [];
    var dayarray = []; 
    var pastarray = [];

    //postTime
    

    for (var x = 0; x < array.length; x++) {
      var datearray = array[x].postTime.split(" ");
      //console.log(array[x].postTime);
      if (array[x].postTime.search('hours') > -1 || array[x].postTime.search('hour') > -1) {
        //posted today with hours ago
        hourarray.push(array[x]); 
        hourarray.sort(function(a, b) {
            a = parseInt(a.postTime.substring(0,2));
            b = parseInt(b.postTime.substring(0,2));
            //console.log("Hours Array Battle: " + a + " vs " + b);
            return a - b;
        });

      } else if ((array[x].postTime.search('minutes') > -1) || (array[x].postTime.search('minute') > -1)) {
       //posted today with minutes ago
       //console.log(array[x].postTime);
        minutearray.push(array[x]); 
        minutearray.sort(function(a, b) {
            a = parseInt(a.postTime.substring(0,2));
            b = parseInt(b.postTime.substring(0,2));
            return a - b;
        });

      } else if (array[x].postTime.search(currentmonth) > -1 && array[x].postTime.search(currentyear) > -1 && parseInt(datearray[2]) == currentday) {
        //posted in the today without hours or minutes 
        dayarray.push(array[x]); 

      } else {
        //posted in past 
        pastarray.push(array[x]); 
      } 
    }

    //shuffle day array 
    dayarray = this.shuffle(dayarray);
    pastarray = this.shuffle(pastarray);

    //order arrays further
    var newarray = [];
    for (var z = 0; z < minutearray.length; z++) {
      newarray.push(minutearray[z]);
    }
    for (z = 0; z < hourarray.length; z++) {
      newarray.push(hourarray[z]);
    }
    for (z = 0; z < dayarray.length; z++) {
      newarray.push(dayarray[z]);
    }
    for (z = 0; z < pastarray.length; z++) {
      newarray.push(pastarray[z]);
    }

    for (z = 0; z < newarray; z++) {
      console.log(newarray[z]);
    }
    

    return newarray;
  }, 
  
};

