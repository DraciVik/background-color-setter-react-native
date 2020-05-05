import React, {Component} from 'react';
import {StyleSheet, FlatList, Text} from 'react-native';
import ColorButton from './components/ColorButton';
import ColorForm from './components/ColorForm';
import primaryColors from './components/availableColors';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: 'blue',
      availableColors: primaryColors,
    };
    this.changeColor = this.changeColor.bind(this);
    this.onNewColor = this.onNewColor.bind(this);
  }

  changeColor(backgroundColor) {
    this.setState({backgroundColor});
  }

  onNewColor(color) {
    if (color) {
      let allColors = [
        ...this.state.availableColors,
        {name: color, id: `${new Date()}`},
      ];
      this.setState({
        availableColors: allColors,
      });
    }
  }
  render() {
    const {backgroundColor, availableColors} = this.state;
    return (
      <FlatList
        data={availableColors}
        renderItem={({item}) => (
          <ColorButton
            key={item.id}
            backgroundColor={item.name}
            changeColor={this.changeColor}
          />
        )}
        ListHeaderComponent={() => <ColorForm onNewColor={this.onNewColor} />}
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
