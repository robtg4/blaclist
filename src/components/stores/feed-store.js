
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
          video_array = that.orderVideos(video_array);
          //console.log(video_array);
          return video_array;
      });

  },
  getArticles: function(personalFeed) {
    var RSS_custom = Api.fetchRSS(personalFeed);
    var rss_feeds = [];
    var final_array = [];
    //go through each of the urls and make sure
    //their fine, get data from each rss feed
    for (var i = 0; i < RSS_custom.length; i++) {
        rss_feeds.push(this.fetchEntries(RSS_custom[i]));
    }

    var that = this;
    return Promise.all(rss_feeds)
      .then((res) => {
          for (var q = 0; q < res.length; q++)
          {
            //console.log(res);
            for (var a =0; a < res[q].length; a++)
            {
              final_array.push(res[q][a]);
            }
          }
          //console.log('The following array of objects was constructed and is now being shuffled');
          //console.log(final_array.length);

          // delete all duplicates from the array***

          final_array = that.orderArticles(final_array);

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
          if (typeof responseData.results.collection2[0].title.text != 'undefined')
          {
            for (var x = 0; x < responseData.results.collection2.length; x++)
            {
                vids_feeds.push(responseData.results.collection2[x]);
            }
          } else
          {
            for (var x = 0; x < responseData.results.collection1.length; x++)
            {
                vids_feeds.push(responseData.results.collection1[x]);
            }
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
      .then((res) => res.json())
      .then((responseData) => {
        if (that.responseValidator(responseData)) {
          var working_feeds = [];
          //going through the array of entries
          for (var  i = 0; i < responseData.entries.length; i++) {

          }
          return working_feeds;
        }
      });
  },
  responseValidator: function(responseData) {
      if(responseData.responseStatus == 200) {
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
  orderVideos: function(array) {
    //go through array and rearrange by post time
    //order of arrays
    var hourarray = [];
    var minutearray = [];
    var dayarray = [];
    var weekarray = [];
    var montharray = [];
    var yeararray = [];

    for (var x = 0; x < array.length; x++) {
      console.log(array[x].postTime);
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

      } else if ((array[x].postTime.search('days') > -1) || (array[x].postTime.search('day') > -1)) {
        //posted in the today without hours or minutes
        dayarray.push(array[x]);
        dayarray.sort(function(a, b) {
          a = parseInt(a.postTime.substring(0,2));
          b = parseInt(b.postTime.substring(0,2));
          return a - b;
        });

      } else if ((array[x].postTime.search('weeks') > -1) || (array[x].postTime.search('week') > -1)) {
        //posted in past
        weekarray.push(array[x]);
        weekarray.sort(function(a, b) {
          a = parseInt(a.postTime.substring(0,2));
          b = parseInt(b.postTime.substring(0,2));
          return a - b;
        });

      } else if ((array[x].postTime.search('months') > -1) || (array[x].postTime.search('month') > -1)) {
        //posted in past
        montharray.push(array[x]);
        montharray.sort(function(a, b) {
          a = parseInt(a.postTime.substring(0,2));
          b = parseInt(b.postTime.substring(0,2));
          return a - b;
        });

      } else {
        yeararray.push(array[x]);
        yeararray.sort(function(a, b) {
          a = parseInt(a.postTime.substring(0,2));
          b = parseInt(b.postTime.substring(0,2));
          return a - b;
        });
      }
    }

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
    for (z = 0; z < weekarray.length; z++) {
      newarray.push(weekarray[z]);
    }
    for (z = 0; z < montharray.length; z++) {
      newarray.push(montharray[z]);
    }
    for (z = 0; z < yeararray.length; z++) {
      newarray.push(yeararray[z]);
    }

    console.log(newarray);
    console.log(montharray);

    return newarray;
  },
  orderArticles: function(array) {
    //go through array and rearrange by post time
    console.log("Ordering!");
    var currentday = String(new Date().getDate());
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

      } else if (array[x].postTime.search(currentmonth) > -1 && array[x].postTime.search(currentyear) > -1 && parseInt(datearray[2]) < currentday) {
        //posted in past
        pastarray.push(array[x]);
        pastarray.sort(function(a, b) {
            a = parseInt(a.postTime.split(" ")[1]);
            b = parseInt(b.postTime.split(" ")[1]);
            return a - b;
        });
      } else {
        pastarray.push(array[x]);
      }
    }

    //shuffle day array
    dayarray = this.shuffle(dayarray);

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

   // console.log(newarray);

    return newarray;
  },

};
