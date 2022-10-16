import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../../Utils';
import {IDetailPerson} from 'Data/constans/DetailPerson';
import {Divider, Gap} from '../../../../Components';
import moment from 'moment';

interface IAboutProps {
  data: IDetailPerson;
}

const About: React.FC<IAboutProps> = ({data}) => {
  const biodataPerson = [
    {
      label: 'Name',
      value: data.name || '-',
    },
    {
      label: 'Born On',
      value: data.birthday
        ? moment(data.birthday).format('MMMM DD, YYYY')
        : '-',
    },
    {
      label: 'From',
      value: data.place_of_birth || '-',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={20} />
          <View>
            {biodataPerson?.map((item, index) => (
              <View key={index} style={styles.biodataWrapper}>
                <Text style={styles.textTitle}>{item.label}</Text>
                <Gap height={6} />
                <Text style={styles.textContent}>{item.value}</Text>
              </View>
            ))}

            <Divider />
            <Gap height={16} />

            <View>
              <Text style={styles.biographyTitle}>Biography</Text>
              <Gap height={12} />
              <Text style={styles.biographyValue}>{data.biography || '-'}</Text>
            </View>
          </View>
          <Gap height={30} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  biodataWrapper: {
    marginBottom: 16,
  },
  textTitle: {
    fontFamily: fonts.primary.Regular,
    fontSize: 14,
    color: colors.placeholder,
  },
  textContent: {
    fontFamily: fonts.primary.Bold,
    fontSize: 20,
    color: colors.White,
  },
  biographyTitle: {
    fontFamily: fonts.primary.Bold,
    fontSize: 18,
    color: colors.White,
  },
  biographyValue: {
    fontFamily: fonts.primary.Regular,
    fontSize: 16,
    color: colors.placeholder,
    lineHeight: 22,
  },
});
