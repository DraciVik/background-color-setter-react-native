import React from 'react';

import {View, Text, StyleSheet, TextInput} from 'react-native';

export default class ColorForm extends React.Component {
  constructor() {
    super();
    this.state = {
      textColor: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.onNewColor(this.state.textColor.toLowerCase());
    this.setState({textColor: ''});
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter desired color"
          style={styles.textInput}
          onChangeText={textColor => this.setState({textColor})}
          value={this.state.textColor}
        />
        <Text onPress={this.onSubmit} style={styles.button}>
          Add
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'lightgrey',
    height: 70,
    paddingTop: 20,
  },
  textInput: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: 'snow',
  },
  button: {
    backgroundColor: 'darkblue',
    margin: 5,
    padding: 5,
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
  },
});
