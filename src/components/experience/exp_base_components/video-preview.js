//component for video preview content
var React = require('react-native');
var { View, StyleSheet, Text, Image, TouchableHighlight, WebView } = React;
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//components
var ImageButton = require('../../common/imageButton');
var KeywordBox = require('../../authentication/onboarding/keyword-box');
//additional libraries
var YouTube = require('react-native-youtube');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: true
    }
  },
  render: function() {
      return (
        <TouchableHighlight
          style={styles.touchCard}
          underlayColor={'transparent'}
          onPress={this.props.onPress} >
           <View style={styles.card}>
             <YouTube
               ref="youtubePlayer"
               videoId={this.props.source} // The YouTube video ID
               play={false}           // control playback of video with true/false
               hidden={false}        // control visiblity of the entire view
               playsInline={true}    // control whether the video should play inline
               showinfo={false}
               onReady={(e)=>{this.setState({isReady: true})}}
               onChangeState={(e)=>{this.setState({status: e.state})}}
               onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
               onError={(e)=>{this.setState({error: e.error})}}
               onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}
               style={styles.videoPreview}
              />
              <View style={[styles.container, this.border('organge')]}>
                  <View style={[styles.header, this.border('blue')]}>
                      <Text style={[styles.previewText]}>{this.props.text}</Text>
                  </View>
                  <View style={[styles.footer, this.border('white')]}>
                    <View style={styles.sourceRow}>
                      <View style={[this.border('white')]}>
                        <ImageButton
                            style={[styles.logoBtn, , this.border('red'), styles.row]}
                            resizeMode={'contain'}
                            onPress={this.onHeartPress}
                            source={this.props.src} />
                      </View>
                      <View style={[this.border('white')]}>
                          <Text style={[styles.rowText, {fontWeight: 'bold'}]}>{this.props.entryBrand}</Text>
                          <Text style={[styles.rowText]}>{this.props.views}</Text>
                      </View>
                    </View>
                    <View style={[styles.heartRow, this.border('black')]}>
                      <KeywordBox
                          style={[styles.category, this.border('blue')]}
                          key={this.props.key}
                          text={this.props.category}
                          onPress={this.props.categoryPress}
                          selected={this.props.selected} />
                    </View>
                  </View>
              </View>
            </View>
        </TouchableHighlight>
      );

  },
  renderLoading: function () {
    console.log('## webView: loading()');
    return (
        <View style={[styles.container, styles.centerText]}>
            <Text style={styles.noResultsText}>Loading video...</Text>
        </View>
    );
  },
  renderError: function () {
    return (
        <View style={[styles.container, styles.centerText]}>
            <Text style={styles.noResultsText}>Video not found - 404</Text>
        </View>
    );
  },
  onHeartPress: function() {
    //will move this function to a general module
  },
  border: function(color) {
      return {
        //borderColor: color,
        //borderWidth: 4,
      }
   },
});

var styles = StyleSheet.create({
  centerText: {
    marginBottom:5,
    textAlign: 'center',
  },
  noResultsText: {
    marginTop: 70,
    marginBottom:0,
    color: '#000000',
  },
  sourceRow: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  rowText: {
    textAlign: 'left',
    color: 'white',
    fontSize: 12,
    marginLeft: 5,
    fontFamily: 'SFCompactText-Medium'
  },
  detailText: {
    fontFamily: 'SFCompactText-Light',
    fontSize: 18,
    color: 'white',
    textAlign: 'left',
    marginTop: 2,
    marginLeft: 5,
  },
  touchCard: {
    margin: 3,
    width: window.width*0.95,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    alignSelf:'center',
  },
  card: {
    flex: 1,
    width: window.width*0.98,
    alignSelf:'center',
  },
  heartText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'SFCompactText-Medium'
  },
  heartRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  logoBtn: {
    height: window.width/10,
    width: window.width/10,
    alignSelf:'center',
  },
  heartBtn: {
    height: (92/97)*(window.width/13),
    width: window.width/13,
    alignSelf:'center',
  },
  category: {
    fontFamily: 'Bebas Neue',
    fontSize: 10,
    fontWeight: 'bold'
  },
  header: {
    flex: 1,
    justifyContent: 'space-around',
    marginTop: window.height/60,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: window.height/80,
  },
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  videoPreview: {
    height: window.width*0.55,
    width:window.width*0.98,
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  previewText: {
    fontFamily: 'Bebas Neue',
    fontSize: 23,
    color: 'white',
    textAlign: 'left',
    marginTop: 2,
    marginLeft: 5,
  },

});
