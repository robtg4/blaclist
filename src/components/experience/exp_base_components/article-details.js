//article details page
var React = require('react-native');
var { View, Image, StyleSheet, Text, Modal, ScrollView, TouchableHighlight, WebView, Image} = React;
//additional libraries
var Parse = require('parse/react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var Modal   = require('react-native-modalbox');
var NavigationBar = require('react-native-navbar');
var HTMLView = require('react-native-htmlview');
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
							title: 'BLACK MILLENNIALS',
							tintColor: '#EDEDED',
						}}
						leftButton={
							<BackButton
								onPress={this.goBack} /> } />
				<ScrollView>
					<Image source={{uri:this.state.entry.lead_image}} style={[styles.entryImage]} />
					<View style={[styles.thoughtRow, this.border('blue')]}>
						<Text style={[styles.viewText]}>10,231 views</Text>
						<View style={[styles.iconSpaceRow, this.border('red')]}>
							<TouchableHighlight
								onPress={this.onPressThoughts}
								underlayColor={'transparent'}>
								<Icon
									name='twitter'
									size={30}
									color='#436675'
									style={[styles.twitterIcon, {backgroundColor: 'transparent'}]}/>
							</TouchableHighlight>
							<TouchableHighlight
								onPress={this.onPressThoughts}
								underlayColor={'transparent'}>
								<Icon
									name='facebook-official'
									size={30}
									color='#436675'
									style={[styles.twitterIcon, {backgroundColor: 'transparent'}]}/>
							</TouchableHighlight>
							<TouchableHighlight
								onPress={this.onPressThoughts}
								underlayColor={'transparent'}>
								<Icon
			            name='comments'
			            size={30}
			            color='#436675'
			            style={[styles.twitterIcon, {backgroundColor: 'transparent'}]}/>
							</TouchableHighlight>
						</View>
					</View>
					<View style={styles.line} />
					<View style={[styles.articleBody, this.border('red')]}>
						<Text style={styles.titleText}>{this.state.entry.title}</Text>
						<View style={styles.sourceRow}>
							<ImageButton
								style={[styles.logoBtn]}
								resizeMode={'contain'}
								onPress={this.onPressSource}
								source={{uri:this.state.entry.logo}} />
							<View style={styles.sourceCol}>
								<Text style={styles.brandName}>Blavity</Text>
								<Text style={styles.authorName}>{"By " + this.state.entry.author_name}</Text>
								<Text style={styles.postTime}>Yesterday</Text>
							</View>
						</View>
						<View style={styles.bodyTextView}>
							<HTMLView
								stylesheet={bodyStyles}
								value={this.state.entry.content} />
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
	    //  borderColor: color,
	    //  borderWidth: 2,
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

var bodyStyles = StyleSheet.create({
	p: {
		color: 'white',
		fontFamily: 'SFCompactDisplay-Medium',
		fontSize: 15,
		textAlign:'left',
	},
	a: {
		color: 'white',
		fontFamily: 'SFCompactDisplay-Medium',
		fontSize: 15,
		textAlign:'left',
	},
	ul: {
		color: 'white',
		fontFamily: 'SFCompactDisplay-Medium',
		fontSize: 15,
		textAlign:'left',
	},
	li: {
		color: 'white',
		fontFamily: 'SFCompactDisplay-Medium',
		fontSize: 15,
		textAlign:'left',
	}, 
});

var styles = StyleSheet.create({
	iconSpaceRow: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		flex: 0.5,
		alignSelf: 'center',
		marginLeft: window.width/15,
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
		marginBottom: 5,
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
	},
	thoughtRow: {
		flex: 0.7,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		margin: window.width/20,
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
