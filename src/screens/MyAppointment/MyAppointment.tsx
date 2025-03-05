import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {MyAppointmentInterface} from './MyAppointmentInterface';
import {IMAGES} from '../../assets';
import {ScrollView} from 'react-native-gesture-handler';
import {
  verticalScale,
  horizontalScale,
  verticalMarginScale,
  horizontalMarginScale,
  fontScale,
} from '../../utils/DimensionConstant';
import { Fonts } from '../../utils/Constants';

const MyAppointment: React.FC<MyAppointmentInterface> = props => {
  //   const styles = FirstScreenStyle();
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>My Appointments</Text>
        </View>
        <View style={styles.subContainer}>
            <View style={styles.tabsContainer}>
                <TouchableOpacity>
                    <Text style={styles.tab}>Upcoming</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.tab}>Completed</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.tab}>Cancelled</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#0099FF',
  },
  header: {
    height: verticalScale(170),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt:{
    color:'#FFFFFF',
    fontSize:fontScale(22),
    fontFamily:Fonts.Bold,
    lineHeight:22
  },
  subContainer: {
    backgroundColor:'#FFFFFF',
    // width:horizontalScale(430),
    height: verticalScale(944),
    borderTopRightRadius:40,
    borderTopLeftRadius:40,
    padding:20
  },
  tabs:{
    flexDirection:'row',
    justifyContent:'space-between',
    color:'#9E9E9F',
    fontSize:fontScale(16),
    fontFamily:Fonts.Bold,
    lineHeight:22
  }
});

export default MyAppointment;
