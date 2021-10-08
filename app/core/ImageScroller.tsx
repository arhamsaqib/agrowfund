import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {MyText} from './MyText';
import Icon from 'react-native-vector-icons/Ionicons';

interface ImageCardProps {
  source?: any;
  onPress?(): void;
}

const ImageCard = (props: ImageCardProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{marginHorizontal: 10}}>
      <Image
        source={props.source}
        style={{height: 55, width: 81, borderRadius: 5}}
      />
    </TouchableOpacity>
  );
};

interface SSProps {
  back?: boolean;
  forward?: boolean;
  onPress?(): void;
}

const ScrollShortcut = (props: SSProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.scrollShort}>
      {props.back && (
        <Icon name="chevron-back-outline" size={10} color="white" />
      )}
      {props.forward && (
        <Icon name="chevron-forward-outline" size={10} color="white" />
      )}
    </TouchableOpacity>
  );
};

export const ImageScroller = () => {
  const images = [
    {
      source: require('../assets/projectThumb.jpeg'),
      name: '',
    },
    {
      source: require('../assets/projectThumb.jpeg'),
      name: '',
    },
    {
      source: require('../assets/projectThumb.jpeg'),
      name: '',
    },
    {
      source: require('../assets/projectThumb.jpeg'),
      name: '',
    },
    {
      source: require('../assets/projectThumb.jpeg'),
      name: '',
    },
    {
      source: require('../assets/projectThumb.jpeg'),
      name: '',
    },
  ];
  return (
    <View style={styles.main}>
      <ScrollShortcut back />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={images}
        renderItem={({item, index}: any) => <ImageCard source={item.source} />}
      />
      <ScrollShortcut forward />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollShort: {
    //borderWidth: 1,
    height: 56,
    justifyContent: 'center',
    width: 14,
    backgroundColor: '#666666',
    opacity: 0.1,
    alignItems: 'center',
    borderRadius: 3,
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
