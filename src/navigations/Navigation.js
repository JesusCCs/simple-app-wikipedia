/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Lista from './Lista';
import Articulo from './Articulo';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Lista"
        component={Lista}
        options={({route}) => ({
          title: `Resultados para '${route.params.busqueda}'`,
        })}
      />
      <Stack.Screen
        name="Articulo"
        component={Articulo}
        options={({route}) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default App;
