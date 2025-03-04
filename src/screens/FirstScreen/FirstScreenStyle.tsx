import {Colors} from '../../utils/Constants';
import {
  Wp,
  Hp,
  radiusScale,
  verticalScale,
  horizontalScale,
  fontScale,
  verticalMarginScale,
} from '../../utils/DimensionConstant';
import {StyleSheet} from 'react-native';
import {Fonts} from '../../utils/Constants';

const FirstScreenStyle = () => {
  return StyleSheet.create({
    mainView: {
      width: '100%',
      height: '100%',
    },
    container: {
      width: verticalScale(425),
      height: verticalScale(412),
      top: verticalScale(519),
      backgroundColor: 'white',
      borderTopRightRadius: radiusScale(32),
      borderTopLeftRadius: radiusScale(32),
    },
    view1: {width: verticalScale(377), alignSelf: 'center'},
    view1topMargin: {
      marginTop: verticalScale(12),
      marginBottom: verticalScale(30),
    },
    textBold: {
      alignSelf: 'center',
      color: Colors.fontColor,
      fontSize: fontScale(32),
      fontFamily: Fonts.Bold,
      lineHeight: fontScale(43.52),
      letterSpacing: fontScale(0.25),
    },
    textlight: {
      alignSelf: 'center',
      color: Colors.fontColor,
      fontSize: fontScale(16),
      fontFamily: Fonts.Light,
      lineHeight: fontScale(24),
      letterSpacing: fontScale(0.44),
    },
    swipeContainer: {
      backgroundColor: 'blue',
      width: '100%',
      height: verticalScale(50),
      justifyContent: 'center',
    },
    swipeIcon: {
      width: verticalScale(50),
      height: verticalScale(50),
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: verticalScale(25),
    },
    iconText: {
      fontSize: fontScale(24),
      color: 'blue',
    },
    swapView: {
      width: verticalScale(406),
      height: verticalScale(92),
      backgroundColor: Colors.lightblue,
      alignSelf: 'center',
      borderRadius: radiusScale(50),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: horizontalScale(6),
      justifyContent: 'space-between',
    },
    righticon: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    swaptext: {
      fontSize: fontScale(22),
      color: Colors.white,
    },
    arrow: {width: verticalScale(70), height: verticalScale(70)},
    swapindigator: {
      marginVertical: verticalMarginScale(30),
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      width: verticalScale(25),
      alignSelf: 'center',
    },
    indigator1: {
      height: verticalScale(7),
      width: verticalScale(17),
      backgroundColor: Colors.lightblue,
      borderRadius: radiusScale(5),
    },
    indigator2: {
      height: verticalScale(7),
      width: verticalScale(5),
      backgroundColor: Colors.grey,
      borderRadius: radiusScale(5),
    },
    righticonimage: {width: verticalScale(83), height: verticalScale(82)},
  });
};
export default FirstScreenStyle;
