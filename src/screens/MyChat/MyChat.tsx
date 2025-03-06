import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import styles from './MyChatStyle';
import {IMAGES} from '../../assets';
import LanguageSelected from '../../utils/LanguageSelected';
import AuthStore from '../../zustand/store/AuthStore';
import {MyChatInterface} from './MyChatInterface';

const chatData = [
  {
    id: 1,
    name: 'Dr. Eileen Sideways',
    date: 'Jan 12 2025',
    time: '1:30 PM',
    unreadMessages: 2,
    profileImage: IMAGES.docProfile1,
  },
  {
    id: 2,
    name: 'Dr. Shyam Patidar',
    date: 'Jan 12 2025',
    time: '1:30 PM',
    unreadMessages: 0,
    profileImage: IMAGES.docProfile2,
  },
  {
    id: 3,
    name: 'Dr. Ray Sin',
    date: 'Jan 12 2025',
    time: '1:30 PM',
    unreadMessages: 2,
    profileImage: IMAGES.docProfile3,
  },
  {
    id: 4,
    name: 'Dr. Eileena',
    date: 'Jan 12 2025',
    time: '1:30 PM',
    unreadMessages: 2,
    profileImage: IMAGES.docProfile4,
  },
  {
    id: 5,
    name: 'Dr. Sagar Singh',
    date: 'Jan 12 2025',
    time: '1:30 PM',
    unreadMessages: 2,
    profileImage: IMAGES.docProfile5,
  },
];

const MyChat: React.FC<MyChatInterface> = props => {
  const {language} = AuthStore();
  const languageKey = language as keyof typeof LanguageSelected.Medicine;
  const renderChats = ({item}: {item: any}) => (
    <TouchableOpacity>
      <View style={styles.card}>
        <View>
          <Image source={item.profileImage} style={styles.docProfile} />
        </View>
        <View style={styles.rightContainer}>
          <View>
            <Text style={styles.docName}>{item.name}</Text>
            <Text style={styles.docTime}>
              {item.date},{}
              {item.time}
            </Text>
          </View>
          {item.unreadMessages > 0 && (
            <View style={styles.msgContainer}>
              <Text style={styles.msgText}>{item.unreadMessages}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={IMAGES.bg} style={styles.bg}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>
            {LanguageSelected.myChat[languageKey]}
          </Text>
        </View>
        <View style={styles.subContainer}>
          <FlatList data={chatData} renderItem={renderChats} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default MyChat;
