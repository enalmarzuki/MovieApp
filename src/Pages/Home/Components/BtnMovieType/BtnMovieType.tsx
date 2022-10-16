import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IMovieTypes} from '../../../../Data/constans/Home';
import {colors} from '../../../../Utils/colors';
import {fonts} from '../../../../Utils/fonts';

type TouchableOpacityProps = React.ComponentProps<typeof TouchableOpacity>;

interface IBtnMovieTypeProps extends TouchableOpacityProps {
  data: IMovieTypes;
  movieTypesActive: string;
}

const BtnMovieType: React.FC<IBtnMovieTypeProps> = ({
  data,
  movieTypesActive,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={styles.movieTypeBtn}
      disabled={data.params === movieTypesActive}
      {...props}>
      <Text style={styles.movieTypeTitle(data.params === movieTypesActive)}>
        {data.title}
      </Text>
    </TouchableOpacity>
  );
};

export default BtnMovieType;

const styles = StyleSheet.create<any>({
  movieTypeBtn: {
    marginRight: 24,
  },
  movieTypeTitle: (isActive: boolean) => ({
    color: isActive ? colors.textPrimary : colors.textSecondary,
    fontFamily: fonts.primary.Regular,
    fontSize: 18,
  }),
});
