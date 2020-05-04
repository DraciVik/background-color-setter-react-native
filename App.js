import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
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
      <ScrollView style={[styles.container, {backgroundColor}]}>
        <ColorButton backgroundColor="red" changeColor={this.changeColor} />
        <ColorButton backgroundColor="blue" changeColor={this.changeColor} />
        <ColorButton backgroundColor="green" changeColor={this.changeColor} />
        <ColorButton backgroundColor="white" changeColor={this.changeColor} />
        <ColorButton backgroundColor="salmon" changeColor={this.changeColor} />
        <ColorButton backgroundColor="#00ff00" changeColor={this.changeColor} />
        <ColorButton
          backgroundColor="rgb(255,0,255)"
          changeColor={this.changeColor}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
