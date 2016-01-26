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
					<Image source={{uri:'http://blavity.blavity.netdna-cdn.com/wp-content/uploads/2016/01/obama_gun_town_hall1-696x364.jpg?0fd4d3' }} style={[styles.entryImage]} />
					<View style={[styles.articleBody, this.border('red')]}>
						<Text style={styles.titleText}>ICYMI: President Obama’s Town Hall #GunsInAmerica</Text>
						<View style={styles.sourceRow}>
							<ImageButton
								style={[styles.logoBtn]}
								resizeMode={'contain'}
								onPress={this.onPressSource}
								source={{uri:'http://blavity.com/wp-content/uploads/2015/12/Blavity.png'}} />
							<View style={styles.sourceCol}>
								<Text style={styles.brandName}>Blavity</Text>
								<Text style={styles.authorName}>By DAVID E. SANGER, ERIC SCHMITT, and HELENE COOPER</Text>
								<Text style={styles.postTime}>Yesterday</Text>
							</View>
						</View>
						<View style={styles.bodyTextView}>
							<Text style={styles.bodyText}>
								President Obama expounded on his intentions to expand gun safety in America during a town hall moderated by CNN’s Anderson Cooper just days after announcing his Executive Actions on the matter.  As he enters the final phase of his Presidency, Mr. Obama’s move to fully focus his energy and attention on gun reform during the first full week of the new year isn’t a mere coincidence. Historians, anchors and amateurs alike are paying close attention to the final moves that will bookend the narrative of his legacy long beyond his departure from public office.
							</Text>
							<Image style={{width: 200, height: 150, marginTop: 10, alignSelf: 'center', marginBottom: 10,}} source={{uri: 'http://blavity.blavity.netdna-cdn.com/wp-content/uploads/2016/01/secret.gif?dfe5c5'}} />
							<Text style={styles.bodyText}>
							He has referenced the Newtown shooting of first graders as the “worst day” of his presidency time and again—both during this town hall meeting and in the emotional unveiling of his executive actions on January 5.  It is no surprise, then, that he has chosen gun violence as the banner issue that will precede all other political ambitions this year.
							</Text>
						</View>
					</View>
				</ScrollView>
				<View style={styles.footer}>
				</View>
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
	 onPressThoughts: function() {
		 this.props.navigator.push({name: 'thoughts'});
	 },
	 onPressSource: function() {

	 },
	 goBack: function() {
     this.props.navigator.pop();
   },
});

var styles = StyleSheet.create({
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
	brandName: {
		textAlign:'left',
		fontFamily: 'SFCompactDisplay-Medium',
		fontSize: 15,
		color: 'white'
	},
	postTime: {
		textAlign:'left',
		color: 'white'
	},
	sourceRow: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
	},
	logoBtn: {
    height: window.width/8,
    width: window.width/8,
    alignSelf:'center',
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
		flex: 0.93,
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
	thoughtRow: {
		flex: 0.7,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginRight: window.width/30,
	},
	footer: {
		flex: 0.07,
		backgroundColor: '#DB202A',
	},
	entryImage: {
		height: window.height/2.8,
		width: window.width,
	},
	titleText: {
		fontFamily: 'Bebas Neue',
		fontSize: 20,
		color: 'white',
		letterSpacing: 1,
		textAlign: 'left'
	},
});
