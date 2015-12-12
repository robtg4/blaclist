var React = require('react-native');
var {
	View, 
	Image,
	StyleSheet,
	Text, 
	ScrollView, 
	ActivityIndicatorIOS, 
	ListView, 
	TouchableHighlight, 
} = React;

//additional libraries
var Parse = require('parse/react-native');
//var Reflux = require('reflux');

//dynamic component references
var ArticlePreview = require('./exp_base_components/article-preview');
var Api = require('../utils/api');
var FeedStore = require('../stores/feed-store');
//var Actions = require('../../actions');

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

module.exports = React.createClass({ 
	componentWillMount: function() {
		Parse.User.currentAsync()
			.then((user) => { this.setState({user: user}); })
	},  
	getInitialState: function() {

	    var getSectionData = (dataBlob, sectionID) => {
	    	//console.log("SectionID GIS, getSectionData: " + sectionID);
            return dataBlob[sectionID];
        }

        var getRowData = (dataBlob, sectionID, rowID) => {
        	//console.log("RowID GIS, getRowData: " + rowID);
            return dataBlob[sectionID + ':' + rowID];
        }

		return {
			user: null, 
			isLoaded: false, 
			dataSource : new ListView.DataSource({
                getSectionData          : getSectionData,
                getRowData              : getRowData,
                rowHasChanged           : (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged : (s1, s2) => s1 !== s2
            })
		}
	},
	componentDidMount: function() {
		this.organizeData(); 
	},
	organizeData: function() {
		var data_store = null; 
		//get the latest articles on page load
		//this will pre-fill out articles state 
		FeedStore.getArticles()
			.then((data) => {
				/* TEST
				console.log("================");
				console.log("data is at home");
				console.log(data);
				console.log("================");
				*/
				
				var entries = data, 
				length = entries.length,
	            dataBlob = {},
	            sectionIDs = [],
	            rowIDs = [],
	            entry,
	            sectionID, 
	            rowID, 
	            i; 
	            //console.log(entries.length);
		        for (i = 0; i < length; i++)
		        {
		        	entry = entries[i]; 
		        	//console.log(entry);

		        	//add section/row to section id array

		        	//mapping section id array for section data 
		        	sectionID = entry.title.replace(/\s+/g, '').toLowerCase() + i; 
		        	//console.log("SectionID = " + sectionID);
		        	sectionIDs.push(sectionID);
		        	dataBlob[sectionID] = entry.title; 

		        	//mapping row id array for row data 
		        	rowIDs[i] = []
		        	rowID = sectionID;
		        	// console.log("RowID = " + rowID); 
		        	rowIDs[i].push(rowID);
		        	dataBlob[sectionID + ':' + rowID] = entry; 
		        }

		        //console.log(dataBlob);

		        this.setState({
		            dataSource : this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
		            isLoaded   : true, 
		        });

		  	}).done();
	}, 
	render: function() {

		if (!this.state.isLoaded) {
            return this.renderLoadingView();
        }

        return this.renderListView();
	}, 
	renderLoadingView: function() {
        return (
            <View style={styles.container}>
                <ActivityIndicatorIOS
                    animating={!this.state.isLoaded}
                    style={[styles.activityIndicator, {height: 80}]}
                    size="large" />
            </View>
        );
    }, 
	renderListView: function() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource = {this.state.dataSource}
                    initialListSize = {5}
                    pageSize={5}
                    renderRow  = {this.renderRow} />
            </View>
        );
    }, 
    renderRow: function (rowData, sectionID, rowID) {
		/* TEST
		console.log("Getting my rows on");
		console.log(rowID);
		console.log(rowData);
		*/
		var that = this;
		//call to api to get articles from rss/api var Articles 
		return <ArticlePreview
				category={'Music'}
				key={sectionID}
				heartText={'2.9k'}
				categoryPress={that.onCategoryDetailsPress}
				selected={false}
				source={{uri: rowData.mediaGroups[0].contents[0].url }}
				text={rowData.title}
				onPress={that.onArticleDetailsPress} />
			
	},
	onCategoryDetailsPress: function() {
		//forward to sytled web view of categorical article feed
		console.log("onCategoryDetailsPress"); 
	}, 
	onArticleDetailsPress: function() {
		//forward to sytled web view of article details given link
		console.log("onArticleDetailsPress"); 
		//this.props.navigator.push({name: 'articledetails'});
	}, 
	/*
	onChange: function(event, articles) {
		this.setState({articles: articles}); //trigers re-render of component
	}
	*/

});


styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center',
	}, 
	activityIndicator: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});