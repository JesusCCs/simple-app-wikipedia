import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Listado from '../components/Listado';

export default function Lista({route, navigation}) {
  const {busqueda} = route.params;

  return (
    <View style={styles.container}>
      <Listado busqueda={busqueda} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
