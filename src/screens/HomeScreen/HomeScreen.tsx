import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
// import {useLanguage} from '../../context/LanguageContext';
import LanguageSelected from '../../utils/LanguageSelected';
import {HomeScreenInterface} from './HomeScreenInterface';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {IMAGES} from '../../assets';
import {Fonts} from '../../utils/Constants';
import {
  horizontalScale,
  verticalScale,
  horizontalMarginScale,
  verticalMarginScale,
  fontScale,
  radiusScale,
} from '../../utils/DimensionConstant';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width * 0.75; // 75% of screen width for card
const SPACING = 15;
const HomeScreen: React.FC<HomeScreenInterface> = props => {
  // const {selectedLanguage} = useLanguage();
  // const languageKey =
  //   selectedLanguage as keyof typeof LanguageSelected.Medicine;

  const upcomingAppointments = [
    {
      id: 1,
      date: '7 October 2021',
      time: '08:00 AM - 10:00 AM',
      doctor: 'Dr. Matias',
      specialization: 'Psychiatrist',
      // profileImage: "https://example.com/dr-matias.jpg",
    },
    {
      id: 2,
      date: '10 October 2021',
      time: '10:30 AM - 12:00 PM',
      doctor: 'Dr. Smith',
      specialization: 'Cardiologist',
      // profileImage: "https://example.com/dr-smith.jpg",
    },
    {
      id: 3,
      date: '15 October 2021',
      time: '02:00 PM - 03:30 PM',
      doctor: 'Dr. Williams',
      specialization: 'Neurologist',
      // profileImage: "https://example.com/dr-williams.jpg",
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.leftView}>
            <Image
              source={IMAGES.profile}
              style={styles.leftImg}
              resizeMode="contain"
            />
          </View>
          <View style={styles.rightView}>
            <Image source={IMAGES.wallet} style={styles.rightImg} />
            <Image source={IMAGES.bell} style={styles.rightImg} />
            <View style={styles.dropdown}>
              <Image source={IMAGES.flag} style={styles.dropdownImg} />
              {/* <Image source={IMAGES.dropdown} style={styles.rightImg} /> */}
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.heading}>How is your health today?</Text>
        </View>
        <View style={styles.calendar}>
          <Image source={IMAGES.calendar} style={styles.calImg} />
          <Text style={styles.calText}>Friday, July 15</Text>
        </View>
        <View style={styles.subHeading}>
          <Text style={styles.eventHead}>Upcoming Appointment</Text>
          <TouchableOpacity>
            <Text style={styles.eventText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH + SPACING}
            snapToAlignment="start"
            decelerationRate="fast"
            contentContainerStyle={{paddingHorizontal: SPACING}}
            data={upcomingAppointments}
            // keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.eventContainer}>
                <ImageBackground
                  source={IMAGES.vector}
                  resizeMode="cover">
                  <View style={styles.top}>
                    <Text style={styles.topText}>Appointment</Text>
                    <Image source={IMAGES.arrowRight} style={styles.topArrow} />
                  </View>
                  <View style={styles.mid}>
                    <View style={styles.midLeft}>
                      <View style={styles.midSub}>
                        <Image
                          source={IMAGES.calendarTick}
                          style={styles.midImg}
                        />
                        <Text style={styles.midText}>{item.date}</Text>
                      </View>
                      <View style={styles.midSub}>
                        <Image source={IMAGES.clock} style={styles.midImg} />
                        <Text style={styles.midText}>{item.time}</Text>
                      </View>
                    </View>
                    <View style={styles.midRight}>
                      <Image
                        source={IMAGES.send}
                        style={styles.midRightImg}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                  <View style={styles.bottom}>
                    <Image
                      source={IMAGES.DoctorProfile}
                      style={styles.docImg}
                    />
                    <View style={styles.docInfo}>
                      <Text style={styles.docName}>{item.doctor}</Text>
                      <Text style={styles.docSpec}>{item.specialization}</Text>
                    </View>
                    <Image source={IMAGES.message} style={styles.docMsg} />
                  </View>
                </ImageBackground>
              </View>
            )}
          />
        </View>
        <View style={styles.subHeading}>
          <Text style={styles.eventHead}>Specialization</Text>
          <TouchableOpacity>
            <Text style={styles.eventText}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.speContainer}>
            <View style={styles.subContainer}>
              <View style={styles.container}>
                <Image
                  source={IMAGES.heart}
                  style={styles.heartImg}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.container}>
              <ImageBackground
                  source={IMAGES.brain}
                  style={styles.specImg}
                  resizeMode="contain">
                  <View style={styles.specText}>
                    <Text style={{fontFamily: Fonts.SemiBold}}>Brain</Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
            <View style={styles.subContainer}>
              <View style={styles.container}>
                <ImageBackground
                  source={IMAGES.lungs}
                  style={styles.specImg}
                  resizeMode="contain">
                  <View style={styles.specText}>
                    <Text style={{fontFamily: Fonts.SemiBold}}>Lungs</Text>
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.container}>
                <ImageBackground
                  source={IMAGES.lungs}
                  style={styles.specImg}
                  resizeMode="contain">
                  <View style={styles.specText}>
                    <Text style={{fontFamily: Fonts.SemiBold}}>Dentist</Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
            <View style={styles.subContainer}>
              <View style={styles.largeImgContainer}>
                <ImageBackground
                  source={IMAGES.tablet}
                  style={styles.largeImg}
                  resizeMode="contain">
                  <View style={styles.largeImgText}>
                    <Text style={{fontFamily: Fonts.SemiBold}}>General</Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
            <View style={styles.subContainer}>
              <View style={styles.container}>
                <ImageBackground
                  source={IMAGES.kidney}
                  style={styles.specImg}
                  resizeMode="contain">
                  <View style={styles.specText}>
                    <Text style={{fontFamily: Fonts.SemiBold}}>Kidney</Text>
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.container}>
                <ImageBackground
                  source={IMAGES.ear}
                  style={styles.specImg}
                  resizeMode="contain">
                  <View style={styles.specText}>
                    <Text style={{fontFamily: Fonts.SemiBold}}>Ear</Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    // padding: 15,
    paddingHorizontal: horizontalScale(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: verticalMarginScale(15),
    // height: verticalScale(130),
    // borderWidth: 2,
    // borderColor: 'black',
  },
  leftView: {
    width: horizontalScale(75),
    height: verticalScale(75),
  },
  leftImg: {
    margin: 'auto',
    height: verticalScale(70),
    width: horizontalScale(70),
    borderRadius: radiusScale(50),
    // borderColor: 'green',
    // borderWidth: 1,
  },
  rightView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: horizontalScale(145),
    marginTop: verticalMarginScale(25),
    // backgroundColor:'red',
  },
  rightImg: {
    height: verticalScale(25),
    width: horizontalScale(25),
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',

    // marginTop: verticalMarginScale(10),
  },
  dropdownImg: {
    height: verticalScale(40),
    width: horizontalScale(40),
  },
  heading: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(34),
  },
  calendar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: verticalMarginScale(10),
  },
  calImg: {
    height: verticalScale(25),
    width: horizontalScale(25),
    marginRight: horizontalMarginScale(10),
  },
  calText: {
    fontFamily: Fonts.Light,
    fontSize: fontScale(16),
  },
  subHeading: {
    marginTop: verticalMarginScale(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eventHead: {
    color: '#323232',
    fontFamily: Fonts.Bold,
    fontSize: fontScale(18),
  },
  eventText: {
    color: '#09F',
    fontFamily: Fonts.Bold,
    fontSize: fontScale(14),
  },
  eventContainer: {
    height: verticalScale(212),
    // width: CARD_WIDTH,
    // width: horizontalScale(315),
    backgroundColor: '#09F',
    borderRadius: 20,
    marginTop: verticalMarginScale(20),
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    // margin: horizontalMarginScale(10),
    marginRight: SPACING,
    // marginLeft
    justifyContent: 'space-between',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalMarginScale(10),
    marginRight: 15,
  },
  topText: {
    color: '#FFF',
    fontSize: fontScale(14),
    fontFamily: Fonts.SemiBold,
  },
  topArrow: {
    height: verticalScale(16),
    width: horizontalScale(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  mid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalMarginScale(25),
    marginRight: 15,
  },
  midLeft: {
    width: horizontalScale(150),
  },
  midSub: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    marginBottom: verticalMarginScale(5),
    // backgroundColor: 'red',
  },
  midImg: {
    height: verticalScale(18),
    width: horizontalScale(18),
    marginRight: horizontalMarginScale(5),
  },
  midText: {
    color: '#FFF',
    fontSize: fontScale(14),
    fontFamily: Fonts.Medium,
  },
  midRight: {
    backgroundColor: '#FFF',
    borderRadius: 100,
    width: horizontalScale(50),
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  midRightImg: {
    // display:'flex',
    width: horizontalScale(24),
    height: verticalScale(24),
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  bottom: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginRight: 15,
    // marginBottom:verticalMarginScale(0),
  },
  docInfo: {
    height: verticalScale(40),
    width: horizontalScale(166),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  docImg: {
    height: verticalScale(40),
    width: horizontalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:horizontalMarginScale(5),
  },
  docName: {
    color: '#070C18',
    fontFamily: Fonts.Bold,
    fontSize: fontScale(14),
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  docSpec: {
    color: '#727A83',
    fontFamily: Fonts.Regular,
    fontSize: fontScale(12),
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  docMsg: {
    height: verticalScale(20),
    width: horizontalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  speContainer: {
    marginTop: verticalMarginScale(20),
    // padding: 10,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: verticalMarginScale(20),
    // backgroundColor: 'black',
    // paddingLeft: 10,
    // paddingRight:10,
  },
  container: {
    height: verticalScale(177),
    width: horizontalScale(150),
    borderRadius: radiusScale(24),
    borderColor: '#E4DDFF',
    borderWidth: 1,
    backgroundColor: '#FFFFFF4F',
    // borderColor: 'green',
    // borderWidth: 1,
  },
  heartImg: {
    height: verticalScale(175),
    width: horizontalScale(148),
    borderRadius: radiusScale(24),
    backgroundColor: '#E1F3FF',
  },
  brainImg: {
    height: verticalScale(160),
    width: horizontalScale(148),
    borderRadius: radiusScale(24),
  },
  largeImgContainer: {
    height: verticalScale(175),
    width: horizontalScale(330),
    borderRadius: radiusScale(24),
    borderColor: '#E4DDFF',

    borderWidth: 1,
    backgroundColor: '#FFFFFF4F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeImg: {
    // borderWidth: 2,
    // borderColor: 'black',
    height: verticalScale(175),
    width: horizontalScale(340),
    borderRadius: radiusScale(24),
  },
  largeImgText: {
    height: verticalScale(40),
    width: horizontalScale(300),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#FFFFFF99',
    borderRadius: radiusScale(10),
    margin: 'auto',
    marginTop: verticalMarginScale(105),
  },
  specImg: {
    height: verticalScale(175),
    width: horizontalScale(148),
    borderRadius: radiusScale(24),
    borderColor: '#E4DDFF',
  },
  specText: {
    height: verticalScale(40),
    width: horizontalScale(148),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#FFFFFF99',
    borderRadius: radiusScale(10),
    marginTop: verticalMarginScale(105),
  },
});
export default HomeScreen;
