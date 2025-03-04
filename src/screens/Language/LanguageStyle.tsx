import {
  fontScale,
  horizontalScale,
  radiusScale,
  verticalMarginScale,
  verticalScale,
} from '../../utils/DimensionConstant';
import {Colors, Fonts} from '../../utils/Constants';
import {StyleSheet} from 'react-native';
import AppButton from '../../Component/CustomButton';
const LanguageStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,

      alignItems: 'center',
      backgroundColor: '#fff',
    },

    Appbutton: {
      marginTop: verticalScale(20),
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: Colors.black,
    },
    mainView: {
      height: '100%',
      width: '100%',
    },
    container1: {
      flex: 1,
      paddingHorizontal: 20,
      marginTop: verticalMarginScale(50),
    },
    inputStyle: {
      borderRadius: radiusScale(10),
      marginVertical: verticalMarginScale(5),
      paddingVertical: verticalScale(10),
    },
    logintext: {
      color: Colors.fontColor,
      fontSize: fontScale(27),
      fontFamily: Fonts.Bold,
      marginTop: verticalMarginScale(20),
      marginBottom: verticalMarginScale(20),
    },
    regiterView: {
      flexDirection: 'row',

      alignItems: 'center',
      marginVertical: verticalMarginScale(15),
    },
    textregister1: {
      color: Colors.fontColor,
      fontSize: fontScale(16),
      fontFamily: Fonts.Medium,
    },
    textregiter: {
      color: Colors.lightblue,
      fontSize: fontScale(16),
      fontFamily: Fonts.Bold,
      marginLeft: verticalScale(5),
    },
    logintitle: {
      color: Colors.fontColor,
      fontSize: fontScale(16),
      fontFamily: Fonts.Medium,
      marginTop: verticalMarginScale(10),
    },

    skipLoginButton: {
      backgroundColor: Colors.white,
      borderColor: Colors.lightblue,
      borderWidth: 1,
      marginTop: verticalMarginScale(20),
    },
    textskipLogin: {
      color: Colors.lightblue,
      fontSize: fontScale(16),
      fontFamily: Fonts.Bold,
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: verticalMarginScale(20),
    },
    otpInput: {
      width: verticalScale(50),
      height: verticalScale(55),
      borderBottomWidth: 1,
      borderRightWidth: 0.5,
      borderLeftWidth: 0.5,
      borderTopWidth: 0.1,
      borderColor: Colors.grey,
      textAlign: 'center',
      fontSize: fontScale(20),
      borderRadius: radiusScale(10),
      fontFamily: Fonts.Medium,
      backgroundColor: Colors.white,
    },
    imageLanguage: {
      width: verticalScale(100),
      height: verticalScale(100),
      marginTop: verticalMarginScale(50),
    },
    languageField: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: verticalScale(10),
      paddingHorizontal: horizontalScale(15),
      marginVertical: verticalMarginScale(10),
      borderWidth: 1,
      borderColor: Colors.borderColor,
      borderRadius: radiusScale(15),
      width: '100%',
    },
    selectedField: {
      backgroundColor: Colors.backGround,
      borderColor: Colors.lightblue,
    },
    languageIcon: {
      width: verticalScale(50),
      height: horizontalScale(50),
      borderRadius: radiusScale(8),
    },
    languageText: {
      fontFamily: Fonts.Medium,
      color: Colors.fontColor,
      fontSize: fontScale(18),
      flex: 1,
      marginLeft: horizontalScale(10),
    },
    rightIcon: {
      width: horizontalScale(39),
      height: verticalScale(39),
    },
    rightIconVIew: {
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    flagIcon: {
      width: verticalScale(100),
      height: verticalScale(100),
      marginTop: verticalMarginScale(60),
    },
  });
};
export default LanguageStyle;
