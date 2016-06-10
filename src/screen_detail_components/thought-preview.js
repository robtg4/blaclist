//home page that connects everything together in app index
var React = require('react-native');
var { Text, Image, View, StyleSheet, TouchableHighlight} = React;
//components
var ProfileCircle = require('./profile-circle');
//libraries
var Video = require('react-native-video');
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      rate: 1,
      volume: 1,
      duration: 0.0,
      currentTime: 0.0,
    }
  },
  render: function() {
    return <View style={[styles.card, this.border('red')]}>
      <View style={[styles.profileRow, this.border('red')]>
        <ProfileCircle
          key={this.props.key}
          onPress={this.props.onProfile}
          source={this.props.profileImage} />
        <Text style={styles.profileName}>this.props.name</Text>
        <Text style={styles.postTime}>this.props.postedTime</Text>
      </View>
      <View style={[styles.descRow, this.border('red')]>
        {this.mediaShow(this.props.media)}
      </View>
      <View style={[styles.socialRow, this.border('red')]>
        {this.mediaSocial(this.props.media)}
      </View>
    </View>
  },
  mediaSocial: function(media) {
    if (media.indexOf('jpg') > -1 || media.indexOf('png') > -1 || media.indexOf('gif') > -1)
    {
      return
    } else if (media.indexOf('mp4') > -1 || media.indexOf('mov') > -1) {
      return
    } else {
      return 
    }
  },
  mediaShow: function(media) {
    if (media.indexOf('jpg') > -1 || media.indexOf('png') > -1 || media.indexOf('gif') > -1)
    {
      return <Image source={{uri: media}}  style={style.media} />
    } else if (media.indexOf('mp4') > -1 || media.indexOf('mov') > -1) {
      return <Video source={{uri: media}} // Can be a URL or a local file.
       rate={1.0}                   // 0 is paused, 1 is normal.
       volume={1.0}                 // 0 is muted, 1 is normal.
       muted={false}                // Mutes the audio entirely.
       paused={true}               // Pauses playback entirely.
       resizeMode="contain"           // Fill the whole screen at aspect ratio.
       repeat={false}                // Repeat forever.
       onLoadStart={this.loadStart} // Callback when video starts to load
       onLoad={this.setDuration}    // Callback when video loads
       onProgress={this.setTime}    // Callback every ~250ms with currentTime
       onEnd={this.onEnd}           // Callback when playback finishes
       onError={this.videoError}    // Callback when video cannot be loaded
       style={styles.videoContent} />
    } else {
      return null;
    }
  },
  loadStart: function() {

  },
  setTime: function() {

  },
  setDuration: function() {

  },
  onEnd: function() {

  },
  videoError: function() {

  },
  goBack: function() {
    this.props.navigator.pop();
  },
  border: function(color) {
	    return {
	      borderColor: color,
	      borderWidth: 2,
	    }
	 },
});

var styles = StyleSheet.create({
  media: {
    width: window.width*0.98,
    height: window.width*0.98,
  },
  videoContent: {
    width: window.width*0.98,
    height: window.width*0.98,
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },
  profileName: {
    fontFamily: 'SFCompactText-Bold',
    fontSize: 20,
  },
  postTime: {
    fontFamily: 'SFCompactText-Regular',
    fontSize: 20,
  },
  descRow: {
    flexDirection: 'row',
  },
  socialRow: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    width: window.width*0.98,
    alignSelf:'center'
  },
});
