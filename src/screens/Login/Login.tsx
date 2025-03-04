import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {IMAGES} from '../../assets';
import LoginStyle from './LoginStyle';
import AppButton from '../../Component/CustomButton';

import AuthStore from '../../zustand/store/AuthStore';
import LanguageSelected from '../../utils/LanguageSelected';
import {
  fontScale,
  horizontalMarginScale,
  horizontalScale,
  verticalMarginScale,
} from '../../utils/DimensionConstant';
import {Colors, Fonts} from '../../utils/Constants';
const Login = (props: {navigation: {navigate: (arg0: string) => void}}) => {
  const styles = LoginStyle();
  const {language} = AuthStore();
  const languageKey =
  language as keyof typeof LanguageSelected.Medicine;

  const handleClick = () => {
    props.navigation.navigate('SignIn');
  };
  return (
    <ImageBackground source={IMAGES.loginScreenImg} style={styles.mainView}>
      <View style={styles.container1}>
        <View
          style={{
            transform: [{rotate: '3.5deg'}],
            marginTop: verticalMarginScale(50),
            marginLeft: horizontalMarginScale(60),

            padding: 10,
            width: horizontalScale(250),
          }}>
          <Text
            style={{
              fontSize: fontScale(30),
              color: Colors.fontColor,
              fontFamily: Fonts.Bold,
            }}>
            {LanguageSelected.doctorConsultation[languageKey]}
          </Text>
        </View>

        <Text style={[styles.Medicine, {marginTop: verticalMarginScale(230)}]}>
          {LanguageSelected.Medicine[languageKey]}
        </Text>
        <View style={styles.view1}>
          <Text style={styles.textBold}>
            {LanguageSelected.startCare[languageKey]}
          </Text>

          <AppButton
            title={LanguageSelected.loginToYourAccount[languageKey]}
            onPress={() => {
              handleClick();
            }}
            style={styles.Appbuttonlogin}
          />
          <AppButton
            title={LanguageSelected.skipLogin[languageKey]}
            onPress={() => {}}
            style={styles.Appbutton}
            textStyle={styles.buttontext}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
