import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
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

  async componentDidMount() {
    try {
      const data = await AsyncStorage.getItem('@ColorListStore:Colors');
      if (data !== null) {
        const availableColors = JSON.parse(data);
        this.setState({availableColors});
      }
    } catch (err) {
      console.error('Error loading colors', err);
    }
  }
  saveColors = async colors => {
    try {
      await AsyncStorage.setItem(
        '@ColorListStore:Colors',
        JSON.stringify(colors),
      );
    } catch (e) {
      console.error('Error loading colors', e);
    }
  };

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
      this.saveColors(allColors);
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
