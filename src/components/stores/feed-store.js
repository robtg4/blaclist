//fetch data from api 
//var React = require('react');
var Api = require('../utils/api');
//var Reflux = require('reflux');
//var Actions = require('../../actions');
//var _ = require('lodash'); //utility library for common ops that js needs 
//we have an array of objects and some contain a key that is_album 
//- we want to fliter that out, we use reject to help do that 
//if bool true we reject, function constructs new array of data without the rejected
//objects 

module.exports = {
  //listenables: [Actions], 
  getArticles: function() {
    return Api.fetchRss()
      .then(function(res){

        if(res.responseStatus == 200) 
        {
          //console.log("Code 200 Success!");
          //console.log(res);
          //get initial set of entries 
          return res.responseData.feed.entries;
          //this.triggerChange();
          //create a more focused subset array of articles
          //based on the users chosen topics in parse db 
          /* 
          var focus = _.reject(json.data, function(entry) {
            return ((entry.content.indexOf("politcs") == -1) ||
          });
          */
        } else 
        {
          return "Data not found"
        }
      }.bind(this));

  }, 
  /*
  triggerChange: function() {
    this.trigger('change', this.topics);
  }
  */
  
};

