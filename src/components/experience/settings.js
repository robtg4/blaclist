//settings page
var React = require('react-native');
var { View, Image, StyleSheet, TextInput, Text} = React;
//additional libraries
var NavigationBar = require('react-native-navbar');
var Icon = require('react-native-vector-icons/FontAwesome');
var MK = require('react-native-material-kit');
var {
  MKIconToggle,
  MKSwitch,
  MKColor,
} = MK;
//dynamic component references + libraries
var BackButton = require('../common/backButton');
var ForwardButton = require('../common/forwardButton');
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
        	<View style={[styles.container, this.border('green')]}>
            <View style={[styles.userInfo, this.border('green')]}>
              <View style={[styles.userPartOne, this.border('blue')]}>
                <View style={[styles.userInfoOne, this.border('red')]}>
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
            </View>

            <View>
              <View style={[styles.inputRow, this.border('blue')]}>
                <Icon size={15} name="info" color="#436675" style={[styles.iconx, this.border('purple')]}/>
                <TextInput
                  style={[styles.inputBig, this.border('red')]}
                  value={this.state.description}
                  onChangeText={(text) => this.setState({description: text})} />
              </View>
            </View>

            <View style={[styles.socialIcons, this.border('red')]}>
							<Icon
								style={[styles.socialBtn, this.border('red')]}
								name="instagram" size={40} color="#67AAC1" />
              <Icon
								style={[styles.socialBtn, this.border('red')]}
								name="google" size={40} color="grey" />
              <Icon
								style={[styles.socialBtn, this.border('red')]}
								name="facebook" size={40} color="#67AAC1" />
              <Icon
								style={[styles.socialBtn, this.border('red')]}
								name="twitter" size={40} color="#67AAC1" />
              <Icon
								style={[styles.socialBtn, this.border('red')]}
								name="linkedin-square" size={40} color="#67AAC1" />
						</View>

            <View style={{flex: 1}}>
              <View style={[styles.extraSettings, this.border('red')]}>
                <Text style={styles.extraText}>Edit Interests</Text>
                <ForwardButton
  								onPress={this.goToInterests} />
              </View>
              <View style={[styles.extraSettings, this.border('red')]}>
                <Text style={styles.extraText}>Find Facebook Friends</Text>
                <ForwardButton
  								onPress={this.goToFriends} />
              </View>
              <View style={[styles.extraSettings, this.border('red')]}>
                <Text style={styles.extraText}>Find Contracts</Text>
                <ForwardButton
  								onPress={this.goToContracts} />
              </View>
              <View style={[styles.extraSettings2, this.border('red')]}>
                <Text style={[styles.extraText, {padding: 10, flex: 0.7}]}>Push Notifications</Text>
                <MKSwitch
                    style={[styles.switch, this.border('blue')]}
                    trackSize={5}
                    trackLength={30}
                    thumbRadius={8}
                    onColor="rgba(103,170,193,.3)"
                    thumbOnColor={MKColor.Blue}
                    rippleColor="rgba(211,45,42,.2)"
                    onPress={() => console.log('orange switch pressed')}
                    onCheckedChange={(e) => console.log('orange switch checked', e)} />
              </View>
            </View>

          </View>
        </View>
	},
  goBack: function() {
    this.props.navigator.pop();
  },
  goToNotifications: function() {

  },
  goToContracts: function() {

  },
  goToFriends: function() {

  },
  goToInterests: function() {

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
  switch: {
    flex: 0.3,
    height:30,
    justifyContent: 'center',
    height: 45,
    width: 55,
  },
  iconx: {
    width: 17,
    height: 17,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  extraText: {
    color: 'white',
  },
  extraSettings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingRight:30, 
  },
  extraSettings2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfo: {
    marginTop: 5,
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
  socialBtn: {
		width: window.width/8,
		height: window.width/8,
		alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
	},
  socialIcons: {
		flexDirection:'row',
		justifyContent: 'space-around',
		alignItems: 'center',
    margin: 10,
    flex: 0.5,
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
		height: window.height/8,
    marginBottom: 4,
    backgroundColor: '#2A2A2A',
    color: 'white',
		width: window.width/1.3,
    fontSize: 10,
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
  },
});
