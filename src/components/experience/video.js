var React = require('react-native');
var { View, Image, StyleSheet, Text, ListView } = React;

//additional libraries
var ScrollableTabView = require('react-native-scrollable-tab-view');
//dynamic component references + libraries 
var VideoPreview = require('./exp_base_components/video-preview');
var Parse = require('parse/react-native');
var Spinner = require('react-native-spinkit');
var Api = require('../utils/api');
var FeedStore = require('../stores/feed-store');
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({ 
  componentWillMount: function() {
    Parse.User.currentAsync()
      .then((user) => { this.setState({user: user}); })
  },  
  //on first login (and all new logins)
  //need to pull onboarding keywords that indicate user interests
  //so that we can pull the appropiate feeds 
  componentDidMount: function() {
    //console.log(this.state.user);
    var personalFeed = null; 
    var Onboarding = Parse.Object.extend("Onboarding");
    var query = new Parse.Query(Onboarding);
    query.equalTo("userObjectId", Parse.User.current());
    var that = this;
    query.find({
      success: function(result) {
        console.log("Successfully retrieved " + result.length + " users!");
        var object = result[0];
        console.log(object.id);
        // Do something with the returned Parse.Object values
        console.log(object.get('interests'));
        that.fetchData(object.get('interests'));
      },
      error: function(error) {
        console.log("Error: " + error.code + " " + error.message);
      }
    });

  },
  //states of this components 
  getInitialState: function() {
    return {
      user: null, 
      videos: null, 
      isLoaded: false, 
      dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2,
      }), 
    }
  },
    //gettign data for rss feed based on user interests 
  fetchData: function(personalFeed) {
    var that = this; 
      FeedStore.getVideos(personalFeed)
      .then((data) => {
        var videos = data; 
            that.setState({
              dataSource : that.state.dataSource.cloneWithRows(videos),
                isLoaded   : true, 
            });
        }).done();
  }, 
  //rendering component 
  render: function() {

    if (!this.state.isLoaded) {
            return this.renderLoadingView();
        }
        return <View style={styles.container}>
        {this.renderListView()}
      </View> 
  },
  //loading render
  renderLoadingView: function() {
        return (
            <View style={[styles.container, {height: window.height, width: window.width}]}>
              <Spinner style={styles.spinner} isVisible={!this.state.isLoaded} size={50} type={'Arc'} color={'#FF0000'}/>
            </View>
        );
  }, 
    //rendering list view
  renderListView: function() {
        return (
                <ListView
                    dataSource = {this.state.dataSource}
                    initialListSize = {5}
                    pageSize={5}
                    renderRow  = {this.renderEntry} />
        );
  }, 
  //rendering rows within list view
    renderEntry: function(video) {
      var logo = this.getLogo(video.newsSource);
      var title = null;
        if (typeof video.title.text == 'undefined')
      {
        title = video.title; 
      } else
      {
        title = video.title.text;
      }
      var html = video.html; 
      
        return (
          <VideoPreview
            category={video.category}
            entryBrand={video.newsSource}
            key={title}
            categoryPress={this.dummy}
            selected={false}
            src={{uri:logo }}
            source={video.html}
            text={title}
            onPress={() => this.dummy} />
        );
  },
  //need to find which site the data is from to get logo
    getLogo: function(src) {
      if (src.toLowerCase() == "ebony") {
        return 'http://www.logotypes101.com/free_vector_logo_png/23293/DA01DB2F01F5D8B02F14B70E9687D4AD/Ebony';
      } else if (src.toLowerCase() == 'google') {
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png';
      } else if (src.toLowerCase() == 'bossip') {
        return 'http://www.devidev.com/wp-content/uploads_2/2013/08/bossip-small.png';
      } else if (src.toLowerCase() == 'blackfilm') {
        return '../../img/logos/blackfilm-logo.png';
      } else if (src.toLowerCase() == 'theybf') {
        return 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Theybf-logo.png';
      } else if (src.toLowerCase() == 'nyt') {
        return 'http://static01.nyt.com/images/icons/t_logo_291_black.png';
      } else if (src.toLowerCase() =='gq') {
        return 'http://static1.squarespace.com/static/544d4d0fe4b0dbc1bb9dcac9/5469408ee4b0ddf2508d1fe6/5469411de4b067500a0ef991/1431200703106/GQlogo.jpg';
      } else if (src.toLowerCase() =='buzzfeed') {
        return 'http://barnraisersllc.com/wp-content/uploads/2015/12/buzzfeed-logo.png';
      } else if (src.toLowerCase() =='complex') {
        return 'http://images.complex.com/complex/image/upload/v1426696463/Complex_180x180_obsb5h.png';
      } else if (src.toLowerCase() =='fox') {
        return 'https://pbs.twimg.com/profile_images/572924972104839168/QfSnx_Mu.png';
      } else if (src.toLowerCase() =='huffington post') {
        return 'http://static.wixstatic.com/media/5ba28b_ba693d2a1acf4b6f883a6a72ac2e62f6.png/v1/fit/w_600,h_512/5ba28b_ba693d2a1acf4b6f883a6a72ac2e62f6.png';
      } else if (src.toLowerCase() =='blavity') {
        return 'http://blavity.com/wp-content/uploads/2015/12/Blavity.png';
      } else if (src.toLowerCase() =='al jazeera') {
        return 'http://static.dnaindia.com/sites/default/files/styles/square/public/2015/03/26/321952-al-jazeera-logo.png?itok=sfH-fRQd';
      } else if (src.toLowerCase() =='us uncut') {
        return 'http://33.media.tumblr.com/avatar_2af44bd6a553_128.png';
      } else if (src.toLowerCase() =='washington post') {
        return 'http://purebarre.com/wp-content/uploads/2015/12/Washington-post-logo-thumb.jpg';
      } else if (src.toLowerCase() =='the grio') {
        return 'https://loveessence.files.wordpress.com/2012/06/the-grio-com-logo.jpg';
      } else if (src.toLowerCase() =='the atlantic') {
        return 'http://journalism.nyu.edu/wp-content/uploads/logo-publication-the-atlantic.png';
      } else if (src.toLowerCase() =='the root') {
        return 'https://pbs.twimg.com/profile_images/517418757702963200/MfhBCTzG.jpeg';
      } else if (src.toLowerCase() =='rising africa') {
        return 'http://static1.squarespace.com/static/555e25d2e4b0375a0ff32f73/t/560a9212e4b0dc1dc38fa2ae/1443533330827/';
      } else if (src.toLowerCase() =='black enterprise') {
        return 'https://pbs.twimg.com/profile_images/660082410382602240/MQCpH3x5.png';
      } else if (src.toLowerCase() =='lgbt feed') {
        return 'http://cdn.lgbtfeed.com/Files/2379/09a96854-8082-4bc5-9b71-b7151879f42d.png';
      }
      
    }, 
    dummy: function() {

    }, 
});

var styles = StyleSheet.create({  
  text: {
    fontSize: 20, 
    color: 'white', 
  }, 
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: "#333333", 
    shadowColor:'black', 
    shadowOffset: {width: 4, height: 4}, 
    shadowOpacity: 0.8, 
    shadowRadius: 20,
  }, 
});