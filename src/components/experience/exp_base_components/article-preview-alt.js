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
          style={styles.touchCard}
          underlayColor={'transparent'}
          onPress={this.props.onPress} >
            <View style={styles.card}>
              <View style={[styles.container, this.border('organge')]}>
                  <View style={[styles.header, this.border('blue')]}>
                      <Text style={[styles.previewText]}>{this.props.text}</Text>
                      <Text style={[styles.descText]}>{this.props.description}</Text>
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
                          <Text style={[styles.rowText]}>{this.props.postTime}</Text>
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
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  }, 
  card: {
    flex: 1, 
    width: window.width*0.95, 
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
    backgroundColor: 'black', 
  }, 
  articlePreview: {
    flex: 2, 
    height: window.width*0.95, 
    width:window.width*0.95, 
    flexDirection: 'column'
  }, 
  descText: {
    fontFamily: 'SFCompactText-Medium', 
    fontSize: 15,
    color: 'white', 
    textAlign: 'left', 
    marginTop: 2, 
    marginLeft: 5, 
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
