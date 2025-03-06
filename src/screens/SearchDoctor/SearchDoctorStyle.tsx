import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../utils/Constants';
import {
  fontScale,
  horizontalMarginScale,
  horizontalScale,
  radiusScale,
  verticalMarginScale,
  verticalScale,
} from '../../utils/DimensionConstant';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,

    marginTop: verticalScale(20),
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topView: {paddingHorizontal: horizontalScale(20)},
  backArrow: {
    width: verticalScale(20),
    height: verticalScale(20),
  },
  search: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(22),
    color: Colors.white,
  },
  searchtext: {
    fontSize: fontScale(20),
    fontFamily: Fonts.Bold,
    color: '#fff',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: radiusScale(10),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(5),
    marginTop: verticalMarginScale(20),
  },
  searchIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    marginRight: horizontalScale(10),
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filterIcon: {
    width: horizontalScale(30),
    height: verticalScale(30),
    marginLeft: horizontalScale(10),
  },
  mainView: {
    backgroundColor: Colors.white,
    flex: 1,
    marginTop: verticalScale(40),
    borderTopRightRadius: radiusScale(40),
    borderTopLeftRadius: radiusScale(40),
    paddingHorizontal: horizontalScale(20),
  },
  categoryList: {},
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: horizontalScale(15),
    borderRadius: radiusScale(20),
    backgroundColor: '#f0f0f0',
    marginHorizontal: horizontalScale(5),
    height: verticalScale(50),
    marginTop: verticalScale(30),
  },
  selectedCategoryItem: {
    backgroundColor: Colors.extralightblue,
  },
  categoryText: {
    fontSize: fontScale(14),
    fontFamily: Fonts.Bold,
    color: Colors.fontColor,
  },
  listContainer: {
    // backgroundColor: 'red',
    height: '85%',
  },
  categoryIcon: {
    width: horizontalScale(24),
    height: verticalScale(24),
    marginRight: horizontalScale(10),
  },

  doctorCard: {
    // backgroundColor: '#fff',
    borderRadius: radiusScale(20),
    padding: horizontalScale(10),
    marginBottom: verticalScale(10),
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  doctorInfo: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  doctorImage: {
    width: horizontalScale(80),
    height: verticalScale(80),
    borderRadius: radiusScale(14),
    marginRight: horizontalScale(10),
  },
  doctorDetails: {
    // flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  doctorSpecialization: {
    fontSize: 14,
    color: '#666',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: verticalScale(10),
  },
  doctorFeesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  feesContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.borderColor,
    width: horizontalScale(93),
    height: verticalScale(36),
    borderRadius: radiusScale(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  doctorfeesText: {
    fontSize: fontScale(12),
    fontFamily: Fonts.Medium,
    color: Colors.grey,
    marginRight: horizontalMarginScale(5),
  },
  doctorFees: {
    fontSize: fontScale(16),
    fontFamily: Fonts.Bold,
    color: Colors.greenlight,
  },
  bookNowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
    borderRadius: radiusScale(9),
    width: horizontalScale(200),
    height: verticalScale(37),
    justifyContent: 'center',
  },
  bookNowButtonText: {
    color: Colors.white,
    fontFamily: Fonts.Medium,
    fontSize: fontScale(14),
  },
  bookIcon: {
    width: horizontalScale(29),
    height: verticalScale(15),
    marginLeft: horizontalMarginScale(10),
  },
  statusContainer: {
    marginTop: verticalScale(5),
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(5),
    borderRadius: radiusScale(10),
    backgroundColor: Colors.extralightblue,
    justifyContent: 'center',
    alignItems: 'center',
    width: horizontalScale(60),
  },
  statusText: {
    fontSize: 12,
    color: '#000',
  },
  specializationContainer: {
    marginRight: horizontalScale(10),
    paddingVertical: verticalScale(2),
    paddingHorizontal: horizontalScale(5),
    marginTop: verticalMarginScale(5),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(5),
  },
  starIcon: {
    width: horizontalScale(15),
    height: verticalScale(15),
    marginRight: horizontalScale(5),
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
  },
});
export default styles;
