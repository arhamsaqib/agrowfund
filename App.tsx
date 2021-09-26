import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Text>Hi</Text>
      <Text style={{fontFamily: 'Poppins-Black'}}>Hi</Text>
    </SafeAreaView>
  );
};

export default App;
