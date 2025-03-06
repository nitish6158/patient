import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import styles from './MyPrescriptionStyle';
import {IMAGES} from '../../assets';
import LanguageSelected from '../../utils/LanguageSelected';
import AuthStore from '../../zustand/store/AuthStore';
import {MyPrescriptionInterface} from './MyPrescriptionInterface';

const prescriptionData = [
  {
    id: 1,
    name: 'Applehospital.pdf',
    date: 'Jan 12 2025, 1:30 PM',
  },
  {
    id: 2,
    name: 'Prescription012.pdf',
    date: 'Jan 12 2025, 1:30 PM',
  },
  {
    id: 3,
    name: 'Prescription0192.pdf',
    date: 'Jan 12 2025, 1:30 PM',
  },
  {
    id: 4,
    name: 'Prescription01542.pdf',
    date: 'Jan 12 2025, 1:30 PM',
  },
];

const MyPrescription: React.FC<MyPrescriptionInterface> = () => {
  const {language} = AuthStore();
  const languageKey = language as keyof typeof LanguageSelected.Medicine;
  const renderData = ({item}: {item: any}) => (
    <TouchableOpacity>
      <View style={styles.card}>
        <View>
          <Image source={IMAGES.pdfIcon} style={styles.pdfIcon} />
        </View>
        <View style={styles.rightContainer}>
          <View>
            <Text style={styles.pdfName}>{item.name}</Text>
            <View style={styles.dateContainer}>
              <Image source={IMAGES.calendarIcon} style={styles.calendarIcon} />
              <Text style={styles.pdfTime}>
                {item.date},{}
                {item.time}
              </Text>
            </View>
          </View>
          <View style={styles.downloadContainer}>
            <Image source={IMAGES.downloadIcon} style={styles.downloadIcon} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={IMAGES.bg} style={styles.bg}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>
            {LanguageSelected.myPrescription[languageKey]}
          </Text>
        </View>
        <View style={styles.subContainer}>
          <FlatList data={prescriptionData} renderItem={renderData} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default MyPrescription;
