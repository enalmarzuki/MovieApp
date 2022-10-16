import {StyleSheet, Text, View, ImageSourcePropType, Image} from 'react-native';
import React from 'react';
import {fonts} from '../../Utils/fonts';
import {colors} from '../../Utils/colors';

interface IIconWithTextProps {
  icon: ImageSourcePropType;
  text: string;
}

const IconWithText: React.FC<IIconWithTextProps> = ({icon, text}) => {
  return (
    <View style={styles.iconWithTextWrapper}>
      <Image source={icon} testID="data-icon" />
      <Text style={styles.iconText} testID="data-text">
        {text}
      </Text>
    </View>
  );
};

export default IconWithText;

const styles = StyleSheet.create({
  iconWithTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    fontFamily: fonts.primary.Regular,
    fontSize: 14,
    color: colors.placeholder,
  },
});
