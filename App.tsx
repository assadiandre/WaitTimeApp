import React from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';

export default function App() {

  getData(function callback(error, response) {
    console.log(response);
  });
  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const getData = async (callback) => {
  fetch('https://jsonplaceholder.typicode.com/todos/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      callback(null, responseJson);
    })
    .catch((error) => {
      callback(error, null);
    });
}


//https://jsonplaceholder.typicode.com/todos/1


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
