import * as React from 'react';
import {FlatList} from 'react-native';
import ItemListado from '../atoms/ItemListado';
import {getBusqueda} from '../../utils/Api';
import Loading from '../atoms/Loading';

export default function Listado({
  busqueda,
  navigation,
  initialNumToRender = 6,
}) {
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getBusqueda(busqueda).then((lista) => {
      setData(lista);
      setLoading(false);
    });
  }, [busqueda]);

  return isLoading ? (
    <Loading />
  ) : (
    <FlatList
      data={data}
      keyExtractor={({pageid}) => pageid.toString()}
      renderItem={({item}) => (
        <ItemListado item={item} navigation={navigation} />
      )}
      initialNumToRender={initialNumToRender}
    />
  );
}
