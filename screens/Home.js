import * as React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Listado from '../components/Listado';

export default function Home({navigation}) {
  const [busqueda, setBusqueda] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <TextInput
          accessibilityLabel={'input'}
          placeholder={'¿Sobre qué quieres buscar?'}
          onChangeText={(texto) => setBusqueda(texto)}
        />
        <Button
          onPress={() => navigation.navigate('Lista', {busqueda: busqueda})}
          accessibilityLabel={'submit'}
          title={'Buscar'}
        />
      </View>
      <View style={{flex: 1}}>
        <Listado busqueda={'teletrabajo'} navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
