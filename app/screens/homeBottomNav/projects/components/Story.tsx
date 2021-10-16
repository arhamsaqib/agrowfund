import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {MyText} from '../../../../core/MyText';

interface Props {
  desc?: string;
}

export const Story = (props: Props) => {
  const image = require('../../../../assets/farm.jpg');
  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      <View style={{width: '100%', marginBottom: 10}}>
        <MyText style={styles.title}>About the project</MyText>
      </View>
      <MyText style={styles.desc}>
        {props.desc ??
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
      </MyText>
      <View style={{width: '100%', alignItems: 'center', marginVertical: 10}}>
        <Image
          borderRadius={5}
          style={{height: 185, width: '100%'}}
          source={image}
        />
      </View>
      <View style={{width: '100%', marginBottom: 10}}>
        <MyText style={styles.title}>
          Lorem Ipsum is simply dummy text here
        </MyText>
        <MyText style={styles.desc}>
          {props.desc ??
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        </MyText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
  desc: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#666666',
  },
});
