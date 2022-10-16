// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import DetailMovie from '../Pages/DetailMovie/DetailMovie';
import DetailPerson from '../Pages/DetailPerson/DetailPerson';
import Home from '../Pages/Home/Home';
import SplashScreen from '../Pages/SplashScreen/SplashScreen';

export type RootStackParamList = {
  SplashScreen: undefined;
  Home: undefined;
  DetailMovie: {
    movieId: number;
  };
  DetailPerson: {
    personId: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailMovie"
        component={DetailMovie}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPerson"
        component={DetailPerson}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
