import {StyleSheet} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  verticalMarginScale,
  fontScale,
  radiusScale,
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
    padding: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabs: {
    color: '#9E9E9F',
    fontSize: fontScale(16),
    fontFamily: Fonts.Bold,
    lineHeight: 22,
  },
  activeTab: {
    color: '#007BFF',
  },
  indicatorWrapper: {
    height: 3,
    backgroundColor: '#E0E0E0',
    marginTop: 5,
  },
  indicator: {
    height: 3,
    width: 95,
    backgroundColor: '#007BFF',
    position: 'absolute',
    bottom: 0,
  },
  card: {
    height: verticalScale(215),
    // width: horizontalScale(340),
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: radiusScale(20),
    marginVertical: verticalMarginScale(10),
    borderWidth: 1,
    borderColor: '#C8E9FF',
  },
  topView: {
    flexDirection: 'row',
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  midLine: {
    width: horizontalScale(310),
    height: verticalScale(1),
    backgroundColor: '#E5ECFF',
    marginVertical: verticalMarginScale(15),
  },
  image: {
    width: horizontalScale(109),
    height: verticalScale(109),
    borderRadius: radiusScale(14),
    marginRight: horizontalScale(15),
  },
  infoContainer: {
    width: horizontalScale(125),
    height: verticalScale(109),
    marginRight: horizontalScale(8),
  },
  doctor: {
    fontSize: fontScale(16),
    fontFamily: Fonts.Bold,
    lineHeight: 17.6,
  },
  mid: {
    flexDirection: 'row',
    marginTop: verticalMarginScale(15),
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:'grey',
  },
  msgTxt: {
    fontSize: fontScale(12),
    fontFamily: Fonts.Regular,
    lineHeight: 13.2,
  },
  upcoming: {
    width: horizontalScale(68),
    height: verticalScale(24),
    borderRadius: radiusScale(8),
    borderWidth: 0.5,
    borderColor: '#0099FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upcomingTxt: {
    fontSize: fontScale(10),
    fontFamily: Fonts.SemiBold,
    lineHeight: 17,
    color: '#0099FF',
  },
  time: {
    width: horizontalScale(106),
    height: verticalScale(13),
    fontSize: fontScale(12),
    fontFamily: Fonts.Regular,
    lineHeight: 13.2,
    color: '#555B6C',
    marginVertical: verticalMarginScale(10),
  },
  msgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  msg: {
    width: horizontalScale(56),
    height: verticalScale(60),
  },
  cancelButton: {
    width: horizontalScale(145),
    height: verticalScale(33),
    borderRadius: radiusScale(9),
    backgroundColor: '#FFE2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    fontSize: fontScale(14),
    fontFamily: Fonts.SemiBold,
    lineHeight: 17.5,
    color: '#535353',
  },
  rescheduleButton: {
    width: horizontalScale(145),
    height: verticalScale(33),
    borderRadius: radiusScale(9),
    backgroundColor: '#0099FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rescheduleText: {
    fontSize: fontScale(14),
    fontFamily: Fonts.SemiBold,
    lineHeight: 17.5,
    color: '#FFFFFF',
  },
});
export default styles;
