import * as React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import ItemListado from '../atoms/ItemListado';
import {getBusqueda} from '../../utils/Api';
import Loading from '../atoms/Loading';

export default function Listado({busqueda, navigation}) {
  const [data, setData] = React.useState();
  const [offSet, setOffSet] = React.useState(10);

  const [isLoading, setLoading] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [refreshIndicator, setRefreshIndicator] = React.useState(false);

  React.useEffect(() => {
    getBusqueda(busqueda).then((lista) => {
      setData(lista);
      setLoading(false);
    });
  }, [busqueda]);

  const onEndReached = async () => {
    if (refreshing) {
      return;
    }
    setOffSet(offSet + 10);
    setRefreshing(true);

    getBusqueda(busqueda, offSet).then((lista) => {
      setData(data.concat(lista));
      setRefreshing(false);
    });
  };

  const onRefresh = async () => {
    setRefreshIndicator(true);
    setOffSet(10);

    getBusqueda(busqueda).then((lista) => {
      setData(lista);
      setRefreshIndicator(false);
    });
  };

  return isLoading ? (
    <Loading />
  ) : (
    <FlatList
      data={data}
      keyExtractor={({pageid}) => pageid.toString()}
      initialNumToRender={10}
      onEndReachedThreshold={0.5}
      onEndReached={onEndReached}
      refreshing={refreshing}
      refreshControl={
        <RefreshControl refreshing={refreshIndicator} onRefresh={onRefresh} />
      }
      renderItem={({item}) => (
        <ItemListado item={item} navigation={navigation} />
      )}
    />
  );
}
