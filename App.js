import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import axios from 'axios'




export const URL = `http://light-it-04.tk/api/`;

class App extends Component {
  componentDidMount() {
    // axios({
    //   method: 'POST',
    //   url: "http://light-it-04.tk/api/registration/",

    //    data: {
    //     username: 'tom23',
    //     email: 'tom23@gmail.com',
    //     password1: 'q1234567',
    //     password2: 'q1234567',
    //    },
    // })
    // .then(res => console.log(res))
    axios.get(`${URL}posters/`)
    // .then(res => console.warn(res.data))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }
});

export default App;
