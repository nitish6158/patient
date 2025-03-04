import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {IMAGES} from '../../assets'; // Ensure this path is correct
import {
  fontScale,
  radiusScale,
  verticalMarginScale,
  verticalScale,
} from '../../utils/DimensionConstant';
import {Colors, Fonts} from '../../utils/Constants';
import Video from 'react-native-video';

interface CongratulationScreenProps {
  text: string;
}

const CongratulationScreen: React.FC<CongratulationScreenProps> = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.whiteView}>
        <Video
          source={require('../../assets/gif/video.mp4')}
          paused={false}
          style={{
            height: '70%',
            width: '90%',
            
          }}
          muted={true}
          repeat={true}
          resizeMode="cover"
        />
        <Text style={styles.successText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 153, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure it is above other components
  },
  whiteView: {
    width: verticalScale(300),
    height: verticalScale(350),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: radiusScale(45),
    paddingVertical:verticalScale(30) ,
  },
 
  successText: {
    marginTop: verticalMarginScale(10),
    fontSize: fontScale(30),
    color: Colors.fontColor,
    fontFamily: Fonts.Medium,
    textAlign: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default CongratulationScreen;
