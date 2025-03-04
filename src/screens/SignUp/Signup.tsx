import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppButton from '../../Component/CustomButton';
import CustomTextInput from '../../Component/CustomTextinput';
import {IMAGES} from '../../assets';
import {backarrowStyle, Colors, Fonts} from '../../utils/Constants';
import SignupStyle from './SignupStyle';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SignupInterface} from './SignupInterface';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';
import CongratulationScreen from '../CongratulationScreen/Congratulation';
import LanguageSelected from '../../utils/LanguageSelected';
import AuthStore from '../../zustand/store/AuthStore';
const Signup :React.FC<SignupInterface>= props => {
  const {language} = AuthStore();
  const languageKey =
  language as keyof typeof LanguageSelected.Medicine;
  const styles = SignupStyle();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [dob, setDOB] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [show, setShow] = useState(false);

  const handleSignIn = () => {
    // Handle sign in logic here
    props.navigation.navigate('MobileVerification');
  };
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
        props.navigation.navigate('MobileVerification');
      }, 2000);
    }
  }, []);
  const handleSkipLogin = () => {
    props.navigation.navigate('SignIn');
  };
  const genderOptions = [
    {label: LanguageSelected.male[languageKey], icon: IMAGES.male},
    {label: LanguageSelected.female[languageKey], icon: IMAGES.female},
    {label: LanguageSelected.other[languageKey], icon: IMAGES.other},
  ];
  return (
    <ImageBackground source={IMAGES.backgroundLogin} style={styles.mainView}>
      <View style={styles.container1}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.logintext}>
            {LanguageSelected.signup[languageKey]}
          </Text>
          <View style={styles.regiterView}>
            <Text style={styles.textregister1}>
           
              {LanguageSelected.alreadyHaveAnAccount[languageKey]}
            </Text>
            <TouchableOpacity onPress={handleSkipLogin}>
              <Text style={styles.textregiter}>
                {LanguageSelected.login[languageKey]}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.logintitle}>
            {LanguageSelected.userName[languageKey]}
          </Text>
          <CustomTextInput
            icon={[IMAGES.focusedprofile, IMAGES.unfocusedprofile]}
            containerStyle={styles.inputStyle}
            placeholder={LanguageSelected.enterUserName[languageKey]}
          />
          <Text style={styles.logintitle}>
            {LanguageSelected.email[languageKey]}
          </Text>
          <CustomTextInput
            icon={[IMAGES.focusedEmail, IMAGES.UnfocusedEmail]}
            containerStyle={styles.inputStyle}
            placeholder={LanguageSelected.enterEmail[languageKey]}
            keyboardType="email-address"
          />
          <Text style={styles.logintitle}>
            {LanguageSelected.mobileNo[languageKey]}
          </Text>
          <CustomTextInput
            icon={[IMAGES.focusedPhone, IMAGES.UnfocusedPhone]}
            containerStyle={styles.inputStyle}
            placeholder={LanguageSelected.enterNumber[languageKey]}
            keyboardType="number-pad"
          />
          <Text style={styles.logintitle}>
            {LanguageSelected.dateOfBirth[languageKey]}
          </Text>
          <CustomTextInput
            Righticon={[IMAGES.focusedcalendar, IMAGES.unfocusedcalendar]}
            containerStyle={styles.inputStyle}
            placeholder={dob ? format(dob, 'dd/MM/yyyy') : 'dd/MM/YYYY'}
            onRightIconPress={() => setShowDate(true)}
          />
          <Text style={styles.logintitle}>
            {LanguageSelected.password[languageKey]}
          </Text>
          <CustomTextInput
            icon={[IMAGES.focusedLock, IMAGES.unfocusedlock]}
            containerStyle={styles.inputStyle}
            placeholder={LanguageSelected.enterPassword[languageKey]}
          />
          <Text style={styles.logintitle}>
            {LanguageSelected.confirmPassword[languageKey]}
          </Text>
          <CustomTextInput
            icon={[IMAGES.focusedLock, IMAGES.unfocusedlock]}
            containerStyle={styles.inputStyle}
            placeholder={LanguageSelected.enterConfirmPassword[languageKey]}
          />
          <Text style={styles.logintitle}>
            {LanguageSelected.selectGender[languageKey]}
          </Text>
          <View style={styles.genderContainer}>
            {genderOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.selectGender,
                  selectedGender === option.label && styles.selectedGender,
                ]}
                onPress={() => setSelectedGender(option.label)}>
                <Image source={option.icon} style={styles.icon} />
                <Text style={styles.genderText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <AppButton
            title={LanguageSelected.register[languageKey]}
            onPress={handleSignIn}
          />
        </KeyboardAwareScrollView>
      </View>
      <DatePicker
        modal
        mode={'date'}
        open={showDate}
        date={dob}
        onConfirm={date => {
          setShowDate(false);
          setDOB(date);
        }}
        onCancel={() => {
          setShowDate(false);
        }}
      />
    </ImageBackground>
  );
};

export default Signup;
