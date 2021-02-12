import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import HTML from 'react-native-render-html';

export default function ItemListado({item, navigation}) {
  const contentWidth = useWindowDimensions().width;
  const snippet = `...${item.snippet}...`;

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate('Articulo', {
          pageid: item.pageid,
          title: item.title,
        })
      }>
      <Text style={styles.title}>{item.title}</Text>
      <HTML
        source={{html: snippet}}
        contentWidth={contentWidth}
        {...{
          classesStyles: {
            searchmatch: {color: 'green'},
          },
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    marginTop: 20,
  },
});
