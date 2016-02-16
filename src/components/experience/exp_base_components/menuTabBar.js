'use strict';

var React = require('react-native');
var { StyleSheet, Text, View, TouchableOpacity, Animated } = React;

//dimensions
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');

var Icon = require('react-native-vector-icons/Ionicons');

var styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  tabs: {
    height: window.height/14,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    backgroundColor:'#1a1a1a',
  },
  icon: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 0,
    left: 20,
  },
});

module.exports = React.createClass({
  selectedTabIcons: [],
  unselectedTabIcons: [],

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  },

  renderTabOption: function(name, page) {
    var isTabActive = this.props.activeTab === page;

    return (
      <TouchableOpacity key={name} onPress={() => this.props.goToPage(page)} style={[styles.tab]}>
        <Icon name={name} size={25} color='#DD2A2A' style={styles.icon}
              ref={(icon) => { this.selectedTabIcons[page] = icon }}/>
        <Icon name={name} size={25} color='#436675' style={styles.icon}
              ref={(icon) => { this.unselectedTabIcons[page] = icon }}/>
      </TouchableOpacity>
    );
  },

  componentDidMount: function() {
    this.setAnimationValue({value: this.props.activeTab});
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
  },

  setAnimationValue: function({value}) {
    var currentPage = this.props.activeTab;

    this.unselectedTabIcons.forEach((icon, i) => {
      var iconRef = icon;

      if (!icon.setNativeProps && icon !== null) {
        iconRef = icon.refs.icon_image
      }

      if (value - i >= 0 && value - i <= 1) {
        iconRef.setNativeProps({
          style: {
            opacity: value - i, 
          }
        });
      }
      if (i - value >= 0 &&  i - value <= 1) {
        iconRef.setNativeProps({
          style: {
            opacity: i - value,
          }
        });
      }
    });
  },

  render: function() {
    var containerWidth = this.props.containerWidth;
    var numberOfTabs = this.props.tabs.length;
    var tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 2,
      backgroundColor: '#DD2A2A',
      bottom: 0,
    };

    var left = this.props.scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [0, containerWidth / numberOfTabs]
    });

    return (
      <View>
        <View style={styles.tabs}>
          {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        </View>
        <Animated.View style={[tabUnderlineStyle, {left}]} />
      </View>
    );
  },
  border: function(color) {
      return {
        borderColor: color,
        borderWidth: 1,
      }
  },
});
