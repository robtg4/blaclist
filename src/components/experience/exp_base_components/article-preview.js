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
  /* following props:
    - source={this.props.source}
    - onPress={this.props.onPress}
    - {this.props.text}
    - {this.props.heartText}
    - key={this.props.key} 
    - text={this.props.category} 
    - this.props.selected
  */
  render: function() {
      return (
        <TouchableHighlight 
          style={styles.touchCard}
          underlayColor={'transparent'}
          onPress={this.props.onPress} >
            <View style={styles.card}>
              <Image 
                source={this.props.source} 
                style={[styles.articlePreview, this.border('red')]} />
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
                            source={require('../../img/logos/complex-logo.png')} />
                      </View>
                      <View style={[this.border('white')]}>
                          <Text style={[styles.rowText, {fontWeight: 'bold'}]}>Reuters</Text>
                          <Text style={[styles.rowText]}>27 minutes ago</Text>
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
    marginTop: 5, 
  }, 
  footer: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginLeft: 2, 
    marginTop: 5, 
    marginBottom: 5, 
    marginRight: 5, 
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
  previewText: {
    fontFamily: 'Bebas Neue', 
    fontSize: 23,
    color: 'white', 
    textAlign: 'left', 
    marginTop: 2, 
    marginLeft: 5, 
  }, 

});
