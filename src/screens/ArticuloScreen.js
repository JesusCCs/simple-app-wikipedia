import * as React from 'react';
import {useWindowDimensions, ScrollView, View} from 'react-native';
import HTML from 'react-native-render-html';
import {getPage} from '../utils/Api';
import Loading from '../components/atoms/Loading';

export default function ArticuloScreen({route}) {
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
    <Loading />
  ) : (
    <ScrollView>
      <HTML source={{html: data}} contentWidth={contentWidth} />
    </ScrollView>
  );
}
