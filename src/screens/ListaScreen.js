import * as React from 'react';
import {View} from 'react-native';
import Listado from '../components/molecules/Listado';
import {styles} from '../styles/style';

export default function ListaScreen({route, navigation}) {
  const {busqueda} = route.params;

  return (
    <View style={styles.container}>
      <Listado busqueda={busqueda} navigation={navigation} />
    </View>
  );
}
