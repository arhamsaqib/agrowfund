import React, {FunctionComponent} from 'react';
import {
  Modal,
  Pressable,
  StyleProp,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface ModalView {
  modalVisibility: boolean;
  onCancelPress?(): void;
  mainContainerStyles?: StyleProp<ViewStyle>;
}

export const SideModal: FunctionComponent<ModalView> = ({
  children,
  modalVisibility,
  mainContainerStyles,
  onCancelPress,
}) => {
  return (
    <Modal visible={modalVisibility} transparent={true}>
      <Pressable
        onPress={onCancelPress}
        style={[styles.modalView1, mainContainerStyles]}>
        <View style={styles.modalView2}>{children}</View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView1: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    //marginBottom: 20,
  },

  modalView2: {
    backgroundColor: 'white',
    width: '80%',
    // height: 300,
    borderRadius: 10,
    marginLeft: '5%',
    height: '85%',
    //shadowColor: '#000',
    //shadowOffset: {width: 0, height: 3},
    //shadowOpacity: 0.5,
    //shadowRadius: 5,
    //elevation: 5,
    //padding: 10,
  },
});
