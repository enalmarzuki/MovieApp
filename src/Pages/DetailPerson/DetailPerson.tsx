import {RouteProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {TabBar, TabView} from 'react-native-tab-view';
import {ButtonBackWithIcon, Loading} from '../../Components';
import {BASE_POSTER_URL} from '../../Config/axios';
import {useAppSelector} from '../../Config/redux-hooks';
import {IReducersPersonDetail} from '../../Config/redux/reducers/detailPerson';
import {TAB_KEY} from '../../Data/constans/DetailPerson';
import {RootStackParamList} from '../../Router';
import {colors} from '../../Utils/colors';
import {About, Movies} from './Components';
import {useDetailPerson} from './Hooks/useDetailPerson';

interface IDetailPersonProps {
  route: RouteProp<RootStackParamList, 'DetailPerson'>;
}

const DetailPerson: React.FC<IDetailPersonProps> = ({route}) => {
  const layout = useWindowDimensions();
  const {personId} = route.params;
  const useDetailPersonHooks = useDetailPerson(personId);
  const {data, isLoading, movies, error}: IReducersPersonDetail =
    useAppSelector(state => state.detailPerson);

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: TAB_KEY.About, title: 'About'},
    {key: TAB_KEY.Movies, title: 'Movies'},
  ]);

  const renderScene = ({route: tab}: any) => {
    switch (tab.key) {
      case TAB_KEY.About:
        return <About data={data} />;
      case TAB_KEY.Movies:
        return <Movies data={movies} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={colors.backgroundPrimary} />

      <View style={styles.contentWrapper}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {!data ? null : (
              <View style={{flex: 1}}>
                <ButtonBackWithIcon />
                <View style={styles.imgPersonWrapper}>
                  <Image
                    source={{
                      uri: `${BASE_POSTER_URL}${data?.profile_path}`,
                    }}
                    style={styles.imgPerson}
                  />
                </View>

                <View style={{flex: 1}}>
                  <TabView
                    navigationState={{index, routes}}
                    onIndexChange={setIndex}
                    renderScene={renderScene}
                    initialLayout={{
                      width: layout.width,
                    }}
                    renderTabBar={props => (
                      <TabBar
                        {...props}
                        indicatorStyle={{backgroundColor: colors.White}}
                        style={{backgroundColor: colors.backgroundPrimary}}
                      />
                    )}
                  />
                </View>
              </View>
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default DetailPerson;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  contentWrapper: {
    flex: 1,
  },
  imgPersonWrapper: {
    width: wp('100%'),
    height: hp('40%'),
  },
  imgPerson: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
