import React from 'react';
import {StyleSheet} from 'react-native';
import {Divider as DividerRNP} from 'react-native-paper';
import {colors} from '../../Utils/colors';

const Divider = () => {
  return <DividerRNP style={styles.dividerStyle} />;
};

export default Divider;

const styles = StyleSheet.create({
  dividerStyle: {
    borderColor: colors.outlineColor,
    borderWidth: 0.2,
  },
});
