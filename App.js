import React, {Component} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import ColorButton from './components/ColorButton';
import COLORS from './components/availableColors';

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
      <FlatList
        data={COLORS}
        renderItem={({item}) => (
          <ColorButton
            key={item.id}
            backgroundColor={item.name}
            changeColor={this.changeColor}
          />
        )}
        style={[styles.container, {backgroundColor}]}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
