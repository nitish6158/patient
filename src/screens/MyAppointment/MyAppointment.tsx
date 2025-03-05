import React, {useState, useRef} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  Animated,
} from 'react-native';
import {MyAppointmentInterface} from './MyAppointmentInterface';
import {IMAGES} from '../../assets';
import styles from './MyAppointmentStyle';
import LanguageSelected from '../../utils/LanguageSelected';
import AuthStore from '../../zustand/store/AuthStore';

const appointmentsData = {
  Upcoming: [
    {
      id: '1',
      doctor: 'Dr. Sara Williams',
      message: 'Message',
      time: 'Today | 16:00 PM',
      image: IMAGES.doctorImg,
    },
    {
      id: '2',
      doctor: 'Dr. John Doe',
      message: 'Message',
      time: 'Tomorrow | 10:00 AM',
      image: IMAGES.doctorImg,
    },
  ],
  Completed: [],
  Cancelled: [],
};

const MyAppointment: React.FC<MyAppointmentInterface> = props => {
  const {language} = AuthStore();
  const languageKey = language as keyof typeof LanguageSelected.Medicine;
  //   const styles = FirstScreenStyle();
  const tabs = [
    LanguageSelected.upcoming[languageKey],
    LanguageSelected.completed[languageKey],
    LanguageSelected.cancelled[languageKey],
  ];

  const [selectedTab, setSelectedTab] = useState('Upcoming');
  const translateX = useRef(new Animated.Value(0)).current;
  const tabWidths = useRef([]);
  const tabPositions = useRef([]);

  const handleTabPress = (tab, index) => {
    setSelectedTab(tab);
    Animated.spring(translateX, {
      toValue: tabPositions.current[index] || 0,
      useNativeDriver: true,
    }).start();
  };

  const handleTabLayout = (event, index) => {
    const {width, x} = event.nativeEvent.layout;
    tabWidths.current[index] = width;
    tabPositions.current[index] = x;
  };

  const renderAppointment = ({item}) => (
    <View style={styles.card}>
      <View style={styles.topView}>
        <View>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.doctor}>{item.doctor}</Text>
          <View style={styles.mid}>
            <Text style={styles.msgTxt}>{item.message}</Text>
            <View style={styles.upcoming}>
              <Text style={styles.upcomingTxt}>
                {LanguageSelected.upcoming[languageKey]}
              </Text>
            </View>
          </View>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.msgContainer}>
          <Image source={IMAGES.message} style={styles.msg} />
        </View>
      </View>
      <View style={styles.midLine}/>
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelText}>
            {LanguageSelected.cancel[languageKey]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rescheduleButton}>
          <Text style={styles.rescheduleText}>
            {LanguageSelected.reschedule[languageKey]}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ImageBackground source={IMAGES.bg} style={styles.bg}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text style={styles.headerTxt}>
              {LanguageSelected.myAppointment[languageKey]}
            </Text>
          </View>
          <View style={styles.subContainer}>
            <View style={styles.tabsContainer}>
              {tabs.map((tab, index) => (
                <TouchableOpacity
                  key={tab}
                  onPress={() => handleTabPress(tab, index)}
                  onLayout={event => handleTabLayout(event, index)}>
                  <Text
                    style={[
                      styles.tabs,
                      selectedTab === tab && styles.activeTab,
                    ]}>
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.indicatorWrapper}>
              <Animated.View
                style={[
                  styles.indicator,
                  {
                    width: tabWidths.current[tabs.indexOf(selectedTab)] || 90,
                    transform: [{translateX}],
                  },
                ]}
              />
            </View>
            <FlatList
              data={appointmentsData[selectedTab]}
              keyExtractor={item => item.id}
              renderItem={renderAppointment}
              nestedScrollEnabled={true}
            />
          </View>
        </View>
    </ImageBackground>
  );
};

export default MyAppointment;
