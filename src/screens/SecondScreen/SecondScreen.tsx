import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SecondScreenInterface} from './SecondScreenInterface';
import FirstScreenStyle from '../FirstScreen/FirstScreenStyle';
import {IMAGES} from '../../assets';

const SecondScreen: React.FC<SecondScreenInterface> = (props) => {
  const styles = FirstScreenStyle();
  return (
    <ImageBackground source={IMAGES.secondScreen} style={styles.mainView}>
      <View style={styles.container}>
        <View style={styles.swapindigator}>
          <View style={styles.indigator2}></View>
          <View style={styles.indigator1}></View>
        </View>
        <View style={styles.view1}>
          <Text style={styles.textBold}>Book Appointment for</Text>
          <Text style={styles.textBold}>Family Member</Text>
        </View>
        <View style={[styles.view1, styles.view1topMargin]}>
          <Text style={styles.textlight}>
            A comprehensive healthcare solution to cater
          </Text>
          <Text style={styles.textlight}> to the medical needs.</Text>
        </View>
        <TouchableOpacity onPress={()=>props.navigation.navigate("Language")} style={styles.swapView}>
          <View style={styles.righticon}>
            <Image
              source={IMAGES.blueRight}
              resizeMode="contain"
              style={styles.righticonimage}
            />
          </View>
          <View>
            <Text style={[styles.textlight, styles.swaptext]}>Get Started</Text>
          </View>
          <View style={styles.righticon}>
            <Image
              source={IMAGES.arrow}
              style={styles.arrow}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SecondScreen;
