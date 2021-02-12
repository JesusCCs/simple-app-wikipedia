import * as React from 'react';
import {StyleSheet, Text, useWindowDimensions, ScrollView} from 'react-native';
import HTML from 'react-native-render-html';
import {getPage} from '../Api';

export default function Articulo({route}) {
  const {pageid} = route.params;
  const contentWidth = useWindowDimensions().width;

  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getPage(pageid).then((page) => {
      setData(page);
      setLoading(false);
    });
  }, [pageid]);

  return isLoading ? (
    <Text>Cargando...</Text>
  ) : (
    <ScrollView>
      <HTML source={{html: data}} contentWidth={contentWidth} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
