import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {IMGNotPhoto} from '../../../../Assets/Images';
import {getW185ImageUrl} from '../../../../Config/axios';
import {ICastType} from '../../../../Data/constans/DetailMovie';
import {colors} from '../../../../Utils/colors';
import {fonts} from '../../../../Utils/fonts';

interface IAvatarRnd {
  data: ICastType;
}

const onCheckProfilePath = (imagePath: string) => {
  return imagePath ? {uri: getW185ImageUrl(imagePath)} : IMGNotPhoto;
};

const AvatarRnd: React.FC<IAvatarRnd> = ({data}) => {
  return (
    <View style={styles.castWrapper}>
      <View style={styles.castImageWrapper}>
        <Image
          source={onCheckProfilePath(data.profile_path)}
          style={styles.castImage}
        />
      </View>
      <Text style={styles.castName}>{data.name}</Text>
    </View>
  );
};

export default AvatarRnd;

const styles = StyleSheet.create({
  castWrapper: {
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('25%'),
  },
  castImageWrapper: {
    width: wp('20%'),
    height: hp('10%'),
    borderRadius: wp('10%'),
    overflow: 'hidden',
    marginBottom: 6,
  },
  castImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  castName: {
    fontFamily: fonts.primary.Regular,
    fontSize: 16,
    color: colors.placeholder,
    lineHeight: 24,
    textAlign: 'center',
  },
});
