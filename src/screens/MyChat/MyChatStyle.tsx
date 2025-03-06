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
  docProfile: {
    width: horizontalScale(60),
    height: verticalScale(60),
    borderRadius: radiusScale(14),
    marginRight: horizontalMarginScale(10),
  },
  docName: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(16),
    color: '#323232',
  },
  docTime: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontScale(12),
    color: '#323232',
  },
  msgContainer: {
    width: horizontalScale(26),
    height: verticalScale(26),
    backgroundColor: '#0099FF',
    borderRadius: radiusScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  msgText: {
    fontSize: fontScale(14),
    fontFamily: Fonts.SemiBold,
    lineHeight: 17.5,
    color: '#FFFFFF',
  },
});
export default styles;
