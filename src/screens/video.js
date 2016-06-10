var React = require('react-native');
var { View, Image, StyleSheet, Text, ListView } = React;

//additional libraries
var ScrollableTabView = require('react-native-scrollable-tab-view');
//dynamic component references + libraries
var VideoPreview = require('../screen_detail_components/video-preview');
var Parse = require('parse/react-native');
var Spinner = require('react-native-spinkit');
var Api = require('../utils/api');
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
        //console.log("Successfully retrieved " + result.length + " users!");
        var object = result[0];
        //console.log(object.id);
        // Do something with the returned Parse.Object values
        //console.log(object.get('interests'));
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
      isLoaded: false,
      dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    }
  },
    //gettign data for rss feed based on user interests
  fetchData: function(personalFeed) {
    var that = this;
    Api.getVideos(token)
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

    /*if (!this.state.isLoaded) {
      return this.renderLoadingView();
    } else if (this.state.isLoaded) {
      return <View style={styles.container}>
        {this.renderListView()}
      </View>
    } */
    return <View>
      <VideoPreview
        category={'Black Millennials'}
        entryBrand={'Blavity'}
        key={"Black America's 2015 in Review"}
        categoryPress={this.dummy}
        selected={false}
        src={{uri:'http://blavity.com/wp-content/uploads/2015/12/Blavity.png' }}
        source={'LEHxHdwFmpw'}
        views={'313 views'}
        text={"Black America's 2015 in Review"}
        onPress={() => this.dummy} />
      <VideoPreview
        category={'Hip-Hop'}
        entryBrand={'Complex'}
        key={"The Best DJ Khaled Snapchat Moments"}
        categoryPress={this.dummy}
        selected={false}
        src={{uri:'http://images.complex.com/complex/image/upload/v1426696463/Complex_180x180_obsb5h.png' }}
        source={'f8V4chZGNkE'}
        views={'186,147 views'}
        text={"The Best DJ Khaled Snapchat Moments"}
        onPress={() => this.dummy} />
      <VideoPreview
        category={'Black Buzzfeed'}
        entryBrand={'Buzzfeed'}
        key={'24 Questions Black People Have For White People'}
        categoryPress={this.dummy}
        selected={false}
        src={{uri:'http://barnraisersllc.com/wp-content/uploads/2015/12/buzzfeed-logo.png' }}
        source={'GuVMJmC0V98'}
        views={'2,895,202 views'}
        text={'24 Questions Black People Have For White People'}
        onPress={() => this.dummy} />
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
            views={video.views}
            text={title}
            onPress={() => this.dummy} />
        );
  },
  //need to find which site the data is from to get logo
    getLogo: function(src) {
      if (src.toLowerCase() =='buzzfeed') {
        return 'http://barnraisersllc.com/wp-content/uploads/2015/12/buzzfeed-logo.png';
      } else if (src.toLowerCase() =='blavity') {
        return 'http://blavity.com/wp-content/uploads/2015/12/Blavity.png';
      } else if (src.toLowerCase() =='chescaleigh') {
        return 'https://yt3.ggpht.com/-LnUFDGmEKEo/AAAAAAAAAAI/AAAAAAAAAAA/pEaknB0YvZ4/s100-c-k-no/photo.jpg';
      } else if (src.toLowerCase() =='breakfast club') {
        return 'http://www.premierenetworks.com/ShowLogos/The%20Breakfast%20Club.png';
      } else if (src.toLowerCase() =='complex') {
        return 'http://images.complex.com/complex/image/upload/v1426696463/Complex_180x180_obsb5h.png';
      } else if (src.toLowerCase() =='vlad tv') {
        return 'http://yoloentertainment.tv/wp-content/uploads/2015/04/vlad_tv1.png';
      } else if (src.toLowerCase() =='hot 97') {
        return 'https://pbs.twimg.com/media/CXpVKDFUoAAdHHR.jpg';
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
