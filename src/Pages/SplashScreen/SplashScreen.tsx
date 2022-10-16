import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import {fonts} from '../../Utils/fonts';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Router';
import {colors} from '../../Utils/colors';
import {ICVideoCamera} from '../../Assets/icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Gap from '../../Components/Gap';

const SplashScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor={colors.backgroundPrimary} />
      <View style={styles.wrapperContent}>
        <View style={styles.iconWrapper}>
          <Image source={ICVideoCamera} style={styles.movieIcon} />
        </View>
        <Gap height={12} />
        <Text style={styles.text}>Movie App</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  wrapperContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  iconWrapper: {
    height: hp('8%'),
    width: wp('16%'),
  },
  movieIcon: {
    flex: 1,
    height: '100%',
    width: '100%',
    tintColor: colors.White,
  },
  text: {
    fontFamily: fonts.primary.Bold,
    fontSize: 24,
    color: colors.White,
  },
});
