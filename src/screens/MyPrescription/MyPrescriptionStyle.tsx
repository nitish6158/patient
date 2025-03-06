import {StyleSheet} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  verticalMarginScale,
  fontScale,
  radiusScale,
  horizontalMarginScale,
} from '../../utils/DimensionConstant';
import {Fonts} from '../../utils/Constants';
const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  header: {
    height: verticalScale(170),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt: {
    color: '#FFFFFF',
    fontSize: fontScale(22),
    fontFamily: Fonts.Bold,
    lineHeight: 22,
  },
  subContainer: {
    backgroundColor: '#FFFFFF',
    // width:horizontalScale(430),
    height: verticalScale(944),
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 15,
  },
  card: {
    // width: horizontalScale(393),
    height: verticalScale(85),
    borderColor: '#C8E9FF',
    borderRadius: radiusScale(20),
    borderWidth: 1,
    marginVertical: verticalMarginScale(5),
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(21),
    paddingHorizontal: horizontalScale(16),
  },
  rightContainer: {
    width: horizontalScale(250),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:'red',
  },
  pdfIcon: {
    width: horizontalScale(60),
    height: verticalScale(60),
    marginRight: horizontalMarginScale(10),
  },
  pdfName: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(16),
    color: '#323232',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pdfTime: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontScale(12),
    color: '#323232',
  },
  calendarIcon: {
    width: horizontalScale(12),
    height: verticalScale(12),
    marginRight:horizontalMarginScale(5),
  },
  downloadContainer: {
    width: horizontalScale(40),
    height: verticalScale(40),
    borderRadius: radiusScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  downloadIcon: {
    width: horizontalScale(50),
    height: verticalScale(50),
    borderRadius: radiusScale(10),
  },
});
export default styles;
