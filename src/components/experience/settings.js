//settings page
var React = require('react-native');
var { View, Image, StyleSheet, TextInput} = React;
//additional libraries
var NavigationBar = require('react-native-navbar');
//dynamic component references + libraries
var BackButton = require('../common/backButton');
var ImageButton = require('../common/imageButton');
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({
  getInitialState: function() {
		return {
			username: '',
			name: '',
      website: '',
      email: '',
      phone: '',
		};
	},
	render: function() {
        return <View style={styles.container}>
          <NavigationBar
  						style={styles.navbar}
  						statusBar={{
  							style: 'light-content',
  							hidden: false,
  						}}
  						tintColor={'#222222'}
  						title={{
  							title: 'SETTINGS',
  							tintColor: '#EDEDED',
  						}}
  						leftButton={
  							<BackButton
  								onPress={this.goBack} /> } />
        	<View style={styles.container}>
            <View style={styles.userInfo}>
              <View style={styles.userPartOne}>
                <View style={styles.userInfoOne}>
                  <TextInput
                    style={styles.input}
                    value={this.state.username}
                    onChangeText={(text) => this.setState({username: text})} />
                  <TextInput
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={(text) => this.setState({name: text})} />
                  <TextInput
                    style={styles.input}
                    value={this.state.website}
                    onChangeText={(text) => this.setState({website: text})} />
                  <TextInput
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={(text) => this.setState({email: text})} />
                  <TextInput
                    style={styles.input}
                    value={this.state.phone}
                    onChangeText={(text) => this.setState({phone: text})} />
                </View>
                <View style={styles.userImage}>
                </View>
              </View>
              <View style={styles.userEndPart}>
              </View>
            </View>
            <View style={[styles.socialIcons, this.border('red')]}>
							<ImageButton
								style={[styles.igBtn, this.border('red')]}
								resizeMode={'contain'}
								onPress={this.onReadyPress}
								source={require('../img/instagram-icon.png')} />
							<ImageButton
								style={[styles.googleBtn, this.border('red')]}
								resizeMode={'contain'}
								onPress={this.onReadyPress}
								source={require('../img/google-icon.png')} />
							<ImageButton
								style={[styles.fbBtn, this.border('red')]}
								resizeMode={'contain'}
								onPress={this.onReadyPress}
								source={require('../img/facebook-icon.png')} />
							<ImageButton
								style={[styles.twBtn, this.border('red')]}
								resizeMode={'contain'}
								onPress={this.onReadyPress}
								source={require('../img/twitter-icon.png')} />
						</View>
          </View>
        </View>
	},
  goBack: function() {
    this.props.navigator.pop();
  },
  border: function(color) {
      return {
        //borderColor: color,
        //borderWidth: 1,
      }
  },
});

var styles = StyleSheet.create({
  userInfo: {
    flex: 1,
  },
  userPartOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfoOne: {
    flex: .666,
  },
  userImage: {
    flex: .333,
  },
  userEndPart: {

  },
	text: {
		fontSize: 20,
		color: 'white',
	},
  igBtn: {
		width: window.width/11,
		height: window.width/11,
		alignSelf: 'center',
	},
	fbBtn: {
		width: window.width/19,
		height: window.width/9,
		alignSelf: 'center',
	},
	googleBtn:  {
		width: window.width/17,
		height: window.width/11,
		alignSelf: 'center',
	},
	twBtn: {
		width: window.width/11,
		height: window.width/11,
		alignSelf: 'center'
	},
  socialIcons: {
		flex: 1,
		flexDirection:'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
  container: {
    flex: 0.93,
    backgroundColor: '#222222',
  },
  input: {
		height: window.height/22,
		backgroundColor: 'rgba(255,255,255, 0.4)',
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 2, //round input box
		width: window.width/1.7,
		alignSelf: 'center', //center yourself on form when you have fixed widths
	},
});
