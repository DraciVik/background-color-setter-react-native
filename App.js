import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ColorButton from './components/ColorButton';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: 'blue',
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(backgroundColor) {
    this.setState({backgroundColor});
  }

  render() {
    const {backgroundColor} = this.state;
    return (
      <View style={[styles.container, {backgroundColor}]}>
        <ColorButton backgroundColor="red" onSelect={this.changeColor} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
