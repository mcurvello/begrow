import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
  SplashScreen.hide();
});

const App = () => (
  <View>
    <Text>Be Grow</Text>
  </View>
);

export default App;
