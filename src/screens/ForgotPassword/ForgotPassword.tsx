import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  Image,
} from 'react-native';

import AppButton from '../../Component/CustomButton';
import {IMAGES} from '../../assets';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CongratulationScreen from '../CongratulationScreen/Congratulation';
import ForgotPasswordStyle from './ForgotPasswordStyle';
import {ForgotPasswordInterface} from './ForgotPasswordInterface';
import {backarrowStyle} from '../../utils/Constants';
import CustomTextInput from '../../Component/CustomTextinput';
import {
  verticalMarginScale,
  verticalScale,
} from '../../utils/DimensionConstant';
const ForgotPassword: React.FC<ForgotPasswordInterface> = props => {
  const styles = ForgotPasswordStyle();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef<(TextInput | null)[]>([]);
  const handleSignIn = () => {
    // Handle sign in logic here
    setShow(true);
  };
  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input if text is entered
    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };
  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };
  const handleSkipLogin = () => {
    // Handle skip login logic here
    console.log('Skip Login clicked');
  };
  return (
    <ImageBackground source={IMAGES.backgroundLogin} style={styles.mainView}>
      <View style={styles.container1}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Image
            resizeMode="contain"
            source={IMAGES.backArrow}
            style={[backarrowStyle]}
          />
          <Text style={styles.logintext}>Forgot Password</Text>
          <View style={styles.regiterView}>
            <Text style={styles.textregister1}>
              We Will Send Reset password Link to Your Registered Email Address
              Open That Link And You Will Redirect to Reset Password Screen
            </Text>
          </View>
          <Text style={styles.textregister1}>Email *</Text>

          <CustomTextInput
            icon={[IMAGES.focusedprofile, IMAGES.unfocusedprofile]}
            placeholder="Enter Email"
            containerStyle={{
              marginVertical: verticalMarginScale(15),
              marginBottom: verticalMarginScale(95),
            }}
          />
          <AppButton title="Get Link" onPress={handleSignIn} />
        </KeyboardAwareScrollView>
      </View>
      {show && <CongratulationScreen text={'SignUp Successful'} />}
    </ImageBackground>
  );
};

export default ForgotPassword;
