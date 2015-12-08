'use strict';

var React = require('react-native');
var {
  Component,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
} = React;

var sW = Dimensions.get('window').width;


class ActionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active || false,
      type: 'float', 
      bgColor: props.bgColor || 'transparent',
      buttonColor: props.buttonColor || 'rgba(0,0,0,1)',
      buttonTextColor: props.buttonTextColor || 'rgba(255,255,255,1)',
      spacing: props.spacing || 20,
      btnOutRange: props.btnOutRange || props.buttonColor || 'rgba(0,0,0,1)',
      btnOutRangeTxt: props.btnOutRangeTxt || props.buttonTextColor || 'rgba(255,255,255,1)',
      outRangeScale: props.outRangeScale || 1,
    }

    this.state.anim = this.props.active ? new Animated.Value(1) : new Animated.Value(0);

    this.setPositionAndSizeByType();
  }

  propTypes: {
    active: React.PropTypes.bool,

    type: React.PropTypes.string,
    position: React.PropTypes.string,
    
    bgColor: React.PropTypes.string,
    buttonColor: React.PropTypes.string,
    buttonTextColor: React.PropTypes.string,

    offsetX : React.PropTypes.number,
    offsetY: React.PropTypes.number,
    spacing: React.PropTypes.number,
    size: React.PropTypes.number,
  }

  setPositionAndSizeByType() {
    let position, offsetX, offsetY, size;

      position = 'right',
      offsetX  = 20,
      offsetY  = 20,
      size     = 50;

    this.state.position = this.props.position || position;
    this.state.offsetX  = this.props.offsetX  || offsetX ;
    this.state.offsetY  = this.props.offsetY  || offsetY;
    this.state.size     = this.props.size     || size;
  }


  //////////////////////
  // STYLESHEET GETTERS
  //////////////////////

  getContainerStyles() {
    if (this.state.active) return styles.overlay
    return [ styles.actionBarPos, this.getButtonSize(), this.getOffsetXY() ]
  }

  getActionButtonStyles() {
    if (this.state.active) return [styles.actionBarItem, styles.actionBarPos, this.getButtonSize(), this.getOffsetXY()]
    return [styles.actionBarItem, this.getButtonSize()]
  }

  getButtonSize() {
    return {
      width: this.state.size,
      height: this.state.size,
    }
  }

  getOffsetXY() {
    if (this.state.position == 'center') return { left: sW/2 - this.state.size/2, bottom: this.state.offsetY }
    if (this.state.position == 'left')   return { left: this.state.offsetX, bottom: this.state.offsetY }
    return { right: this.state.offsetX, bottom: this.state.offsetY }
  }

  getActionsStyle() {
    let alignItems = 'center';
    if (this.state.position == 'left')  alignItems = 'flex-start';
    if (this.state.position == 'right') alignItems = 'flex-end';

    return [
      styles.actionsVertical, 
      {
        paddingHorizontal: this.state.offsetX, 
        paddingBottom: this.state.size + this.state.offsetY, 
        backgroundColor: this.state.bgColor,
        alignItems: alignItems,
      }
    ]
  }


  //////////////////////
  // RENDER METHODS
  //////////////////////

  render() {
    return (
      <View style={this.getContainerStyles()}>
        {this._renderActions()}
        {this._renderButton()}
      </View>
    );
  }

  _renderButton() {
    let btnSize = this.state.size;
    return (
      <View style={this.getActionButtonStyles(), styles.touchOp}>
        <TouchableOpacity 
          style={styles.touchOp}
          activeOpacity={0.2} 
          onPress={this.props.onPress}>
          <Animated.View 
            style={[styles.btn, {
              width: btnSize,
              height: btnSize,
              borderRadius: btnSize/2,
              backgroundColor: this.state.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [this.state.buttonColor, this.state.btnOutRange]
              }),
            }]}>
            <Animated.Text style={[styles.btnText]}>
              Next
            </Animated.Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }

  _renderActions() {
    if (!this.state.active) return;

    return (
      <Animated.View style={[styles.overlay, { opacity: this.state.anim }]}>
        <TouchableOpacity activeOpacity={1} onPress={this.reset.bind(this)} 
          style={this.getActionsStyle()}>
        </TouchableOpacity>
      </Animated.View>
    );
  }


  //////////////////////
  // Animation Methods
  //////////////////////

  animateButton() {
    if(!this.state.active) {
      Animated.spring(
        this.state.anim,
        {
          toValue: 1,
          duration: 350,
        }
      ).start();

      this.setState({ active: true });
    } else {
      this.reset();
    }
  }

  reset() {
    Animated.spring(
      this.state.anim,
      {
        toValue: 0,
        duration: 450,
      }
    ).start();

    setTimeout(() => {
      this.setState({ active: false });
    }, 450)
  }
}


var styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'transparent',
  },
  actionBarPos: {
    backgroundColor: 'transparent',
    position: 'absolute',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0, height: 1,
    },
    shadowColor: '#444',
    shadowRadius: 1,
    borderColor: 'red', 
    borderWidth: 1,
    opacity: 0.7,
  },
  btnText: {
    marginTop: 2,
    fontSize: 20,
    backgroundColor: 'transparent',
    color: 'white', 
    fontFamily: 'Bebas Neue', 
    fontWeight: 'bold',
  },
  actionsVertical: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  touchOp: {
    alignItems: 'center', 
    justifyContent: 'center'
  }
});

module.exports = ActionButton;