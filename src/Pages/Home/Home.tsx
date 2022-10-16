import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  RefreshControl,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Gap, Input, Loading} from '../../Components';
import {useAppDispatch, useAppSelector} from '../../Config/redux-hooks';
import {IReducersHome} from '../../Config/redux/reducers/home';
import {MovieTypes} from '../../Data/constans/Home';
import {colors, fonts} from '../../Utils';
import {BtnMovieType, CardMovieHome} from './Components';
import {useHome} from './Hooks/useHome';

const Home = () => {
  const useHomeHooks = useHome();
  const storeHome: IReducersHome = useAppSelector(state => state.home);
  const dispatch = useAppDispatch();

  console.log('useHomeHooks.refreshing', useHomeHooks.refreshing);

  const fetchMoreData = () => {
    const moviePage = useHomeHooks.page + 1;
    useHomeHooks.setPage(moviePage);
    if (useHomeHooks.page !== storeHome.total_pages && !useHomeHooks.keyword) {
      useHomeHooks.getMovies(useHomeHooks.movieTypesActive, moviePage);
    } else {
      dispatch(useHomeHooks.onSearchMovies(useHomeHooks.keyword, moviePage));
    }
  };

  const renderFooter = () => (
    <View style={styles.footerListWrapper}>
      {storeHome.isMoreLoading && <ActivityIndicator color={colors.White} />}
      {useHomeHooks.page === storeHome.total_pages && (
        <Text style={styles.footerListText}>No more movies at the moment</Text>
      )}
    </View>
  );

  const renderEmpty = () => (
    <View style={styles.emptyText}>
      <Text>No Data at the moment</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={colors.backgroundPrimary} />

      <Gap height={20} />
      <View style={styles.pageWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.pageTitle} testID="title-home-page">
            Find Movies, Tv series, and more..
          </Text>
        </View>

        <Gap height={20} />

        <Input
          isRounded
          mode="outlined"
          placeholder="Search..."
          value={useHomeHooks.keyword}
          onChangeText={value => useHomeHooks.onChangeKeyword(value)}
          left={<TextInput.Icon icon="magnify" color={colors.White} />}
          style={styles.searchInput}
        />

        <Gap height={20} />

        {!useHomeHooks.keyword && (
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {MovieTypes.map(item => (
                <BtnMovieType
                  key={item.id}
                  data={item}
                  onPress={() => useHomeHooks.onClickBtnMovieType(item.params)}
                  movieTypesActive={useHomeHooks.movieTypesActive}
                />
              ))}
            </ScrollView>
          </View>
        )}

        <Gap height={20} />

        {storeHome?.isLoading ? (
          <Loading />
        ) : (
          <FlatList
            columnWrapperStyle={styles.listMovieWrapper}
            showsVerticalScrollIndicator={false}
            data={storeHome.data}
            numColumns={2}
            renderItem={({item}) => (
              <View style={styles.listMovieWrapper}>
                <TouchableOpacity
                  onPress={() => useHomeHooks.onClickMovie(item.id)}>
                  <CardMovieHome data={item} />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={data => data.id.toString()}
            ListFooterComponent={renderFooter}
            ListEmptyComponent={renderEmpty}
            onEndReachedThreshold={0.2}
            onEndReached={fetchMoreData}
            refreshControl={
              <RefreshControl
                refreshing={useHomeHooks.refreshing}
                onRefresh={useHomeHooks.onRefresh}
              />
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  pageWrapper: {
    paddingHorizontal: 20,
    flex: 1,
  },
  titleWrapper: {
    maxWidth: 253,
  },
  pageTitle: {
    color: colors.White,
    lineHeight: 36,
    fontSize: 24,
    fontFamily: fonts.primary.Bold,
    letterSpacing: 1,
  },
  searchInput: {
    backgroundColor: colors.backgroundSecondary,
  },
  listMovieWrapper: {
    justifyContent: 'space-between',
  },
  footerListWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  footerListText: {
    color: colors.textSecondary,
  },
  emptyText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
