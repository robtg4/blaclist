//component for article preview touchable image
/* will require the following
- rss feed and api
- user's keyword interests from parse In home.js
- parse db needs to be augmented to include what they heart
- parse db needs to be augmented to include what they press on (like google news)
*/
var React = require('react-native');
var {
  View, 
  StyleSheet, 
  Text, 
  Image, 
  TouchableHighlight, 
} = React;

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
var ImageButton = require('../../common/imageButton');
var KeywordBox = require('../../authentication/onboarding/keyword-box');

//additional libraries

module.exports = React.createClass({
  //onPress function that triggers when button pressed
  //this.props.text is property that can be dynamically filled within button 
  render: function() {
    return (
      <TouchableHighlight 
        underlayColor={'transparent'}
        onPress={this.props.onPress} >
          <Image source={this.props.source} resizeMode={this.props.resize} style={[styles.articlePreview, this.border('red')]}>
                  <View style={[styles.container, this.border('organge')]}>
                      <View style={[styles.header, this.border('blue')]}>
                          <Text style={[styles.previewText]}>{this.props.text}</Text>
                      </View>
                      <View style={[styles.footer, this.border('white')]}>
                        <View style={[styles.heartRow, this.border('black')]}>
                          <ImageButton
                              style={[styles.heartBtn, , this.border('red')]}
                              resizeMode={'contain'}
                              onPress={this.onHeartPress}
                              source={require('../../img/heart_btn.png')} />
                          <Text style={[styles.heartText]}>{this.props.heartText} favorites</Text>
                        </View>
                          <KeywordBox 
                              style={[styles.category, this.border('blue')]}
                              key={this.props.key} 
                              text={this.props.category} 
                              onPress={this.props.categoryPress}
                              selected={this.props.selected} />
                      </View>
                  </View>
          </Image>
      </TouchableHighlight>
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
  heartText: {
    color: 'white', 
    fontSize: 12, 
    fontWeight: 'bold',
    alignSelf: 'center', 
    marginLeft: 5, 
  }, 
  heartRow: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignSelf: 'center', 
    justifyContent: 'center', 
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
    flex: 3, 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    marginTop: window.height/30,
  }, 
  footer: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    margin: window.height/50,
  }, 
  container: {
    flex: 1, 
    backgroundColor: 'black', 
    opacity: 0.6, 
  }, 
  articlePreview: {
    flex: 1, 
    height: window.height/3.2, 
    width: window.width, 
    flexDirection: 'column'
  }, 
  previewText: {
    fontFamily: 'Bebas Neue', 
    fontSize: 23,
    color: 'white', 
    alignSelf: 'center', 
    textAlign: 'center', 
    margin: 5, 
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, 

});
