import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FirstScreenInterface} from './FirstScreenInterface';
import FirstScreenStyle from './FirstScreenStyle';
import {IMAGES} from '../../assets';

const FirstScreen: React.FC<FirstScreenInterface> = (props) => {
  const styles = FirstScreenStyle();
  return (
    <ImageBackground source={IMAGES.firstScreen} style={styles.mainView}>
      <View style={styles.container}>
        <View style={styles.swapindigator}>
          <View style={styles.indigator1}></View>
          <View style={styles.indigator2}></View>
        </View>
        <View style={styles.view1}>
          <Text style={styles.textBold}>Stay healthy, stay on</Text>
          <Text style={styles.textBold}>track.</Text>
        </View>
        <View style={[styles.view1, styles.view1topMargin]}>
          <Text style={styles.textlight}>
            Trust Medicine to be your reliable healthcare
          </Text>
          <Text style={styles.textlight}>partner around the clock.</Text>
        </View>
        <TouchableOpacity onPress={()=>props.navigation.navigate("SecondScreen")} style={styles.swapView}>
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

export default FirstScreen;
