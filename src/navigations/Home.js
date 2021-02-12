import * as React from 'react';
import {Button, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Listado from '../components/molecules/Listado';
import {styles} from '../styles/style';

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
        <Listado
          busqueda={'teletrabajo'}
          navigation={navigation}
          initialNumToRender={3}
        />
      </View>
    </View>
  );
}
