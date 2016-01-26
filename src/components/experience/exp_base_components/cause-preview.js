//component for cause preview touchable image
var React = require('react-native');
var { View, StyleSheet, Text, Image, TouchableHighlight } = React;
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
//components
var ImageButton = require('../../common/imageButton');
var ProfileCircle = require('./profile-circle');

module.exports = React.createClass({
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
                      <Text style={[styles.titleText, this.border('red')]}>{this.props.text}</Text>
                      <Text style={[styles.supText, this.border('blue')]}>{this.props.supText}</Text>
                      <Text style={[styles.sumText, this.border('white')]}>{this.props.sumText}</Text>
                  </View>
                  <View style={[styles.footer, this.border('white')]}>
                    <View style={styles.sourceRow}>
                      <View style={styles.thoughtsRow}>
                        <ProfileCircle
                          style={styles.protestor}
                          key={1}
                          source={this.props.protestor} />
                        <Text style={styles.protestorName}>{this.props.protestorname}</Text>
                        <Text style={styles.protestorCity}>{this.props.protestcity}</Text>
                      </View>
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
      //  borderColor: color,
      //  borderWidth: 2,
      }
   },
});

var styles = StyleSheet.create({
  protestorName: {
    fontFamily: 'SFCompactText-Bold',
    fontSize: 13,
    textAlign: 'left',
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    marginLeft: window.width/40, 
  },
  protestorCity: {
    fontFamily: 'SFCompactText-Regular',
    fontSize: 13,
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    marginLeft: window.width/30,
  },
  protestor: {
    width: window.width/25,
    height: window.width/25,
    justifyContent:'flex-start',
    alignSelf: 'flex-start',
  },
  thoughtsRow: {
    flexDirection: 'row',
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
    width: window.width,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    alignSelf:'center',
  },
  card: {
    flex: 1,
    width: window.width*0.98,
    alignSelf:'center'
  },
  heartText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'SFCompactText-Medium'
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    height: window.width*0.95,
    width:window.width*0.98,
  },
  heartBtn: {
    height: (92/97)*(window.width/13),
    width: window.width/13,
    alignSelf:'center',
  },
  category: {
    fontFamily: 'Bebas Neue',
    fontSize: 10,
    fontWeight: 'bold',
  },
  header: {
    flex: 1,
    justifyContent: 'space-around',
    marginTop: window.height/60,
    padding: 10,
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
  articlePreview: {
    flex: 2,
    height: window.width*0.95,
    width:window.width*0.98,
    flexDirection: 'column',
    alignSelf:'center',
  },
  titleText: {
    fontFamily: 'BebasNeueBook',
    fontSize: 23,
    color: 'white',
    textAlign: 'left',
    textAlign: 'left',
    marginTop: 2,
    width:window.width*0.90,
  },
  supText: {
    color: 'white',
    marginTop: 2,
    fontSize: 15,
    textAlign: 'left',
    fontFamily: 'SFCompactText-Regular',
    width:window.width*0.90,
  },
  sumText: {
    color: 'white',
    marginTop: 2,
    textAlign: 'left',
    fontSize: 12,
    fontFamily: 'SFCompactText-Regular',
    width:window.width*0.90,
  },
});
