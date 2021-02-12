import * as React from 'react';
import {FlatList, Text} from 'react-native';
import ItemListado from './ItemListado';
import {getBusqueda} from '../Api';

export default function Listado({busqueda, navigation}) {
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getBusqueda(busqueda).then((lista) => {
      setData(lista);
      setLoading(false);
    });
  }, [busqueda]);

  return isLoading ? (
    <Text>Cargando...</Text>
  ) : (
    <FlatList
      data={data}
      keyExtractor={({pageid}) => pageid.toString()}
      renderItem={({item}) => (
        <ItemListado item={item} navigation={navigation} />
      )}
      initialNumToRender={8}
    />
  );
}
