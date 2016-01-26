var React = require('react-native');
var { View, Image, StyleSheet, Text, ScrollView } = React;

//additional libraries
var ScrollableTabView = require('react-native-scrollable-tab-view');
//dynamic component references + libraries
var CausePreview = require('./exp_base_components/cause-preview');
//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({
	render: function() {
        return <View style={styles.container}>
					<CausePreview
						key={'Justice for Tamir Rice'}
						categoryPress={this.onCategoryDetailsPress}
						protestorname={'Lebron James'}
						protestcity={'Cleveland, OH'}
						source={{uri: 'http://image.cleveland.com/home/cleve-media/width620/img/plain-dealer/photo/2015/12/31/19477763-mmmain.jpg'}}
						text={'Justice for Tamir Rice'}
						supText={'35,250 supporters of 50k'}
						sumText={'More than a year after police shot and killed my 12-year-old cousin Tamir Rice as he played in a park with a toy gun, a grand jury declined to charge the officers who opened fire on Tamir in less than 2 seconds of arriving to the scene...'}
						protestor={{uri: 'http://blogs-images.forbes.com/kurtbadenhausen/files/2014/07/0324_lebron-james_650x455.jpg'}}
						onPress={() => this.onArticleDetailsPress(entry)} />
					<CausePreview
						key={'Indict Governor Snyder for the Flint Water Crisis'}
						protestorname={'Michael Moore'}
						protestcity={'Flint, MI'}
						categoryPress={this.onCategoryDetailsPress}
						source={{uri: 'http://cdn1.pri.org/sites/default/files/story/images/flint-water.jpg'}}
						text={'Indict Governor Snyder for the Flint Water Crisis'}
						supText={'35,250 supporters of 50k'}
						sumText={'Michigans top prosecutor said Monday that its an "outrage" that residents of Flint are being forced to pay for water thats unsafe to drink — and his office may take action to stop the billing.'}
						protestor={{uri: 'http://media.mlive.com/onthetown_impact/photo/11232068-large.jpg'}}
						onPress={() => this.onArticleDetailsPress(entry)} />
        </View>
	},
});

var styles = StyleSheet.create({
	menuText: {
		color:'white',
		fontFamily: 'SFCompactText-Medium',
	},
	menu: {
		backgroundColor: "black"
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: "#333333",
		shadowColor:'black',
	    shadowOffset: {width: 4, height: 4},
	    shadowOpacity: 0.8,
	    shadowRadius: 20,
	},
	activityIndicator: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    spinner: {
    	marginBottom: 50,
  	},
});
