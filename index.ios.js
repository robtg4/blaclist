//main react require and main js for iOS
var React = require('react-native');
var {
  AppRegistry
} = React;
var Main = require('./src/main');

AppRegistry.registerComponent('blaclist', () => Main);