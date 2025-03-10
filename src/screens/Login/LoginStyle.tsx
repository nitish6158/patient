import {fontScale, radiusScale, verticalMarginScale, verticalScale} from '../../utils/DimensionConstant';
import {Colors, Fonts} from '../../utils/Constants';
import {StyleSheet} from 'react-native';
import AppButton from '../../Component/CustomButton';
const LoginStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,

   
    },
    Medicine: {
      fontSize: fontScale(30),
      color: Colors.lightblue,
      fontFamily: Fonts.Bold,
      alignSelf:"center"
    },
    Topimage: {
      width: verticalScale(550),
      height: '59%',
    },
    textBold: {
      alignSelf: 'center',
      color: Colors.fontColor,
      fontSize: fontScale(32),
      fontFamily: Fonts.Bold,
      lineHeight: fontScale(43.52),
      letterSpacing: fontScale(0.25),
    },
    view1: {
      marginTop: verticalScale(12),
      width: '100%',
     
    },
    Appbutton: {
      marginTop: verticalScale(20),
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: Colors.black,
    },
    buttontext: {color: Colors.fontColor},
    Appbuttonlogin: {marginTop: verticalScale(40)},
    mainView: {
      height: '100%',
      width: '100%',
    },
    container1: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: verticalScale(100),
    },
    inputStyle: {
      borderRadius: radiusScale(10),
      marginVertical: verticalMarginScale(5),
    },
    logintext: {
      color: Colors.fontColor,
      fontSize: fontScale(27),
      fontFamily: Fonts.Bold,
      marginTop: verticalMarginScale(20),
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
    forgottitle: {
      color: Colors.lightblue,
      fontSize: fontScale(16),
      fontFamily: Fonts.Bold,
      alignSelf: 'flex-end',
      marginBottom: verticalMarginScale(10),
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
  });
};
export default LoginStyle;
