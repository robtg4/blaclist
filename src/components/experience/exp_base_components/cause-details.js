//article details page
var React = require('react-native');
var { View, Image, StyleSheet, Text, Modal, ScrollView, TouchableHighlight, WebView, Image} = React;
//additional libraries
var Parse = require('parse/react-native');
var { Icon } = require('react-native-icons');
var Modal   = require('react-native-modalbox');
var NavigationBar = require('react-native-navbar');
//dynamic component references
var Api = require('../../utils/api');
var ImageButton = require('../../common/imageButton');
var ProfileCircle = require('./profile-circle');
var BackButton = require('../../common/backButton');
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');


module.exports = React.createClass({
	componentDidMount: function() {
	},
	componentWillMount: function() {
		this.setState({ entry: this.props.entry });
		console.log(this.state.entry);
	},
	getInitialState: function() {
		return {
			entry: null,
			isOpen: false,
      isDisabled: false,
		}
	},
	render: function() {
		var article = this.state.entry;
		return (
			<View style={styles.container}>
				<NavigationBar
						style={styles.navbar}
						statusBar={{
							style: 'light-content',
							hidden: false,
						}}
						tintColor={'#222222'}
						title={{
							title: 'CAUSES',
							tintColor: '#EDEDED',
						}}
						leftButton={
							<BackButton
								onPress={this.goBack} /> } />
				<ScrollView>
					<Image source={{uri:'http://image.cleveland.com/home/cleve-media/width620/img/plain-dealer/photo/2015/12/31/19477763-mmmain.jpg' }} style={[styles.entryImage]} />
					<View style={[styles.articleBody, this.border('red')]}>
						<Text style={styles.titleText}>Justice for Tamir Rice</Text>
            <Text style={[styles.supText, this.border('blue')]}>35,250 supporters of 50k</Text>
            <View style={[styles.protestorRow, this.border('white')]}>
              <View style={styles.sourceRow}>
                <View style={styles.thoughtsRow}>
                  <ProfileCircle
                    style={styles.protestor}
                    key={1}
                    source={{uri: 'http://blogs-images.forbes.com/kurtbadenhausen/files/2014/07/0324_lebron-james_650x455.jpg'}} />
                  <Text style={styles.protestorName}>Lebron James</Text>
                  <Text style={styles.protestorCity}>Cleveland, OH</Text>
                </View>
              </View>
            </View>
						<View style={styles.bodyTextView}>
							<Text style={styles.bodyText}>
								More than a year after police shot and killed my 12-year-old cousin Tamir Rice as he played in a park with a toy gun, a grand jury declined to charge the officers who opened fire on Tamir in less than 2 seconds of arriving to the scene.
              </Text>
							<Text style={styles.bodyText}>
							  My family is saddened and disappointed– but we are not surprised.
							</Text>
              <Text style={[styles.bodyText, {marginTop: 10}]}>
							  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</Text>
              <Text style={[styles.bodyText, {marginTop: 10}]}>
							  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							</Text>
              <Text style={[styles.bodyText, {marginTop: 10}]}>
							  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Text>
              <Text style={[styles.bodyText, {marginTop: 10}]}>
							  Please sign my petition asking the Department of Justice to launch a federal investigation into prosecutor McGintys handling of the grand jury process; and for the killing of 12 year old Tamir Rice.
							</Text>
              <Text style={[styles.bodyText, {marginTop: 20}]}>
                LaTonya Goldsby
              </Text>
						</View>
            <View style={styles.footer}>
              <ImageButton
                style={[styles.sign_btn]}
                resizeMode={'contain'}
                onPress={() => {}}
                source={require('../../img/petition-btn.png')} />
              <Text style={styles.footerText}>view this petition at change.org</Text>
            </View>
					</View>
				</ScrollView>
				<Modal style={[styles.modal]} ref={"modal"} swipeToClose={this.state.swipeToClose}>
          <Text style={styles.text}>Basic modal</Text>
        </Modal>
			</View>
		);
	},
	openModal: function(id) {
    this.refs.modal.open();
  },
	border: function(color) {
	    return {
	      //borderColor: color,
	      //borderWidth: 2,
	    }
	 },
	 goBack: function() {
     this.props.navigator.pop();
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
  protestorRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: window.height/80,
  },
  footerText: {
    margin: 10,
    fontSize: 15,
    fontFamily: 'SFCompactText-Regular',
    color: '#436675',
  },
  sign_btn: {
    marginTop: 20,
    width: window.width/1.1,
		height: (177/1418)*window.width/1.1,
		justifyContent: 'center',
    alignSelf: 'center',
		marginRight: 5,
  },
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
    backgroundColor: 'transparent',
  },
  thoughtsRow: {
    flexDirection: 'row',
  },
  sourceRow: {
    flexDirection: 'row',
  },
	modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
	bodyTextView: {
		marginTop: 20,
	},
	authorName: {
		textAlign:'left',
		color: 'white',
		fontSize: 15,
		fontFamily: 'SFCompactDisplay-Medium',
	},
	sourceCol: {
		flexDirection: 'column',
		width: window.width/1.4,
		marginLeft: 10,
		alignSelf: 'center',
		justifyContent: 'center',
		marginTop: -2,
	},
	bodyText: {
		fontFamily: 'SFCompactDisplay-Medium',
		fontSize: 15,
		color: 'white',
		textAlign:'left',
	},
	articleBody: {
		marginTop: window.width/50,
		alignItems: 'center',
		flex: 1,
		alignItems: 'flex-start',
		marginLeft: window.width/23.5,
		width: window.width/1.1,
	},
	line: {
		borderWidth: 0.5,
		borderColor: '#333333',
		width: window.width/1.1,
		alignSelf: 'center',
		justifyContent: 'center',
		shadowColor:'black',
	    shadowOffset: {width: 0.2, height: 0.2},
	    shadowOpacity: 0.4,
	    shadowRadius: 0.25,
	},
	container: {
		flex: 0.85,
		backgroundColor: '#222222',
	},
	twitterIcon: {
    width: 30,
    height: 30,
		alignSelf: 'center',
		justifyContent: 'center',
  },
	viewText: {
		flex: 0.3,
		fontFamily: 'Bebas Neue',
		fontSize: 20,
		color: 'white',
		alignSelf: 'center',
		justifyContent: 'center',
		margin: window.width/20,
	},
	topRow: {
		flexDirection: 'row',
		marginTop: 5,
	},
	footer: {
		flex: 0.15,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
	},
	entryImage: {
		height: window.height/2.8,
		width: window.width,
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
