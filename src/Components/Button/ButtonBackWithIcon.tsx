import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {ICArrowLeft} from '../../Assets/icons';
import {RootStackParamList} from '../../Router';

const ButtonBackWithIcon = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.btnBack}
      onPress={() => navigation.goBack()}>
      <Image source={ICArrowLeft} testID="btn-back-icon" />
    </TouchableOpacity>
  );
};

export default ButtonBackWithIcon;

const styles = StyleSheet.create({
  btnBack: {
    backgroundColor: 'rgba(0,0,0,0.25)',
    padding: 2,
    borderRadius: 4,
    position: 'absolute',
    left: widthPercentageToDP('3%'),
    top: heightPercentageToDP('2%'),
    zIndex: 99,
  },
});
