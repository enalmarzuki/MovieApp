import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IDataMovie} from 'Data/constans/Home';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from 'Router';
import {colors} from '../../../../Utils';
import {CardMovieHome} from '../../../Home/Components';

interface IMoviesProps {
  data: IDataMovie[];
}

const Movies: React.FC<IMoviesProps> = ({data}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onClickMovie = (movieId: number) => {
    navigation.navigate('DetailMovie', {
      movieId: movieId,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <FlatList
          columnWrapperStyle={
            (styles.listMovieWrapper,
            {marginTop: 20, justifyContent: 'space-between'})
          }
          showsVerticalScrollIndicator={false}
          data={data}
          numColumns={2}
          renderItem={({item}) => (
            <View style={styles.listMovieWrapper}>
              <TouchableOpacity onPress={() => onClickMovie(item.id)}>
                <CardMovieHome data={item} />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={movie => movie.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Movies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listMovieWrapper: {
    justifyContent: 'space-between',
  },
});
