import React, {FunctionComponent} from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

// export const AuthCard = () => {
//   return (
//     <View style={styles.main}>
//       <Text>Hi</Text>
//     </View>
//   );
// };

interface AuthCardProps {
  style?: StyleProp<ViewStyle>;
}

export const AuthCard: FunctionComponent<AuthCardProps> = ({
  children,
  style,
  // onPress,
}) => {
  return <View style={[styles.main, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
});
