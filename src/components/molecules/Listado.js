import * as React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import ItemListado from '../atoms/ItemListado';
import {getBusqueda} from '../../utils/Api';
import Loading from '../atoms/Loading';

export default function Listado({busqueda, navigation}) {
  const [data, setData] = React.useState();
  const [offSet, setOffSet] = React.useState(0);
  const [ID, setID] = React.useState(0);

  const [isLoading, setLoading] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [refreshIndicator, setRefreshIndicator] = React.useState(false);

  React.useEffect(() => {
    let IDEffect = 0;
    getBusqueda(busqueda).then((lista) => {
      lista.forEach((el) => (el.id = ++IDEffect));
      setData(lista);
      setLoading(false);
      setID(IDEffect);
    });
  }, [busqueda]);

  const onEndReached = async () => {
    if (refreshing) {
      return;
    }
    setOffSet(offSet + 10);
    setRefreshing(true);

    let IDEffect = ID;
    getBusqueda(busqueda, offSet).then((lista) => {
      lista.forEach((el) => (el.id = ++IDEffect));
      setData(data.concat(lista));
      setRefreshing(false);
      setID(IDEffect);
    });
  };

  const onRefresh = async () => {
    setRefreshIndicator(true);
    setOffSet(0);

    let IDEffect = ID;
    getBusqueda(busqueda).then((lista) => {
      lista.forEach((el) => (el.id = ++IDEffect));
      setData(lista);
      setRefreshIndicator(false);
      setID(IDEffect);
    });
  };

  return isLoading ? (
    <Loading />
  ) : (
    <FlatList
      data={data}
      keyExtractor={({id}) => id.toString()}
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
