import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import RNFS from 'react-native-fs';
import styles from './MyPrescriptionStyle';
import {IMAGES} from '../../assets';
import LanguageSelected from '../../utils/LanguageSelected';
import AuthStore from '../../zustand/store/AuthStore';
import {MyPrescriptionInterface} from './MyPrescriptionInterface';

const prescriptionData = [
  {
    id: 1,
    name: 'Assignment1.pdf',
    date: 'Jan 12 2025, 1:30 PM',
    // path: '../assets/pdfs/Assignment1.pdf',
  },
  {
    id: 2,
    name: 'Assignment2.pdf',
    date: 'Jan 12 2025, 1:30 PM',
    // path: '../assets/pdfs/Assignment2.pdf',
  },
  {
    id: 3,
    name: 'Assignment3.pdf',
    date: 'Jan 12 2025, 1:30 PM',
    // path: '../assets/pdfs/Assignment3.pdf',
  },
  {
    id: 4,
    name: 'Assignment4.pdf',
    date: 'Jan 12 2025, 1:30 PM',
    // path: '../assets/pdfs/Assignment4.pdf',
  },
];

const MyPrescription: React.FC<MyPrescriptionInterface> = () => {
  const {language} = AuthStore();
  const languageKey = language as keyof typeof LanguageSelected.Medicine;

  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      if (Platform.Version < 30) {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Storage Permission Required',
              message: 'App needs access to storage to save files.',
              buttonPositive: 'OK',
            },
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
          console.warn(err);
          return false;
        }
      } else {
        // No permission needed for Android 11+ (Scoped Storage)
        return true;
      }
    } else {
      return true; // iOS does not need permission
    }
  };

  // Function to copy the local PDF file to the device's storage
  const saveFileToStorage = async (fileName: string) => {
    const hasPermission = await requestStoragePermission();
    if (!hasPermission) {
      Alert.alert(
        'Permission Denied',
        'Storage permission is required to save files.',
      );
      return;
    }

    const assetPath = `pdfs/${fileName}`; // Path inside `android/app/src/main/assets/`
    const destinationPath = `${RNFS.DownloadDirectoryPath}/${fileName}`;

    try {
      await RNFS.copyFileAssets(assetPath, destinationPath);
      Alert.alert('Download Complete', `File saved to: ${destinationPath}`);
    } catch (error) {
      console.error(error);
      Alert.alert('Download Failed', 'Could not save the file.');
    }
  };

  const renderData = ({item}: {item: any}) => (
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
        <TouchableOpacity onPress={() => saveFileToStorage(item.name)}>
          <View style={styles.downloadContainer}>
            <Image source={IMAGES.downloadIcon} style={styles.downloadIcon} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
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
