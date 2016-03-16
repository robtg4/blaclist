//settings page
var React = require('react-native');
var { View, Image, StyleSheet, TextInput} = React;
//additional libraries
var NavigationBar = require('react-native-navbar');
var Icon = require('react-native-vector-icons/FontAwesome');
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
      description: '',
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
                  <View style={styles.inputRow}>
                    <Icon size={15} name="at" color="#436675" style={styles.icon}/>
                    <TextInput
                      style={[styles.input,]}
                      value={this.state.username}
                      onChangeText={(text) => this.setState({username: text})} />
                  </View>
                  <View style={styles.inputRow}>
                    <Icon size={15} name="user" color="#436675" style={styles.icon}/>
                    <TextInput
                      style={[styles.input,]}
                      value={this.state.name}
                      onChangeText={(text) => this.setState({name: text})} />
                  </View>
                  <View style={styles.inputRow}>
                    <Icon size={15} name="globe" color="#436675" style={styles.icon}/>
                    <TextInput
                      style={[styles.input,]}
                      value={this.state.website}
                      onChangeText={(text) => this.setState({website: text})} />
                  </View>
                  <View style={styles.inputRow}>
                    <Icon size={15} name="envelope" color="#436675" style={styles.icon}/>
                    <TextInput
                      style={[styles.input,]}
                      value={this.state.email}
                      onChangeText={(text) => this.setState({email: text})} />
                  </View>
                  <View style={styles.inputRow}>
                    <Icon size={15} name="mobile" color="#436675" style={styles.icon}/>
                    <TextInput
                      style={[styles.input,]}
                      value={this.state.phone}
                      onChangeText={(text) => this.setState({phone: text})} />
                  </View>
                </View>
                <View style={styles.userImage}>
                  <Image
                    style={styles.profileImage}
                    source={require('../img/test-profile.png')} />
                </View>
              </View>
              <View style={styles.userEndPart}>
                <Icon size={15} name="info" color="#436675" style={styles.icon}/>
                <TextInput
                  style={[styles.inputBig,]}
                  value={this.state.description}
                  onChangeText={(text) => this.setState({description: text})} />
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
  icon: {
    width: 17,
    height: 17,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfo: {
    flex: 1,
    marginTop: 20,
  },
  profileImage: {
		borderRadius: window.width/5/2,
		width: window.width/5,
		height: window.width/5,
		marginBottom: 2,
		backgroundColor: 'transparent',
    alignItems: 'center',
    marginLeft: 10,
	},
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
    backgroundColor: '#303030',
  },
  input: {
		height: window.height/25,
    marginBottom: 4,
    backgroundColor: '#2A2A2A',
    color: 'white',
		width: window.width/2,
    fontSize: 10,
  },
  inputBig: {
		height: window.height/10,
    marginBottom: 4,
    backgroundColor: '#2A2A2A',
    color: 'white',
		width: window.width/1.5,
    fontSize: 10,
  },
});
