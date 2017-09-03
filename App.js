import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        index: 0
      }
  }

  render() {
    return (
      <View style={styles.container}>

        <Text>Open up App.js to start working on your app!</Text>
        <Text> Hello World</Text>
        <TouchableOpacity onPress={() => this.setState({ index: this.state.index + 1})}>
          <Text>
            Hello
          </Text>
        </TouchableOpacity>
        <Text>
          {this.state.index}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
