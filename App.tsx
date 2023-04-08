import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Home from './components/Home';


const App= () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Home/>
    </SafeAreaView>
  );
};
export default App;
