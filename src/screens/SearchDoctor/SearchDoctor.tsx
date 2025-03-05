import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageSourcePropType,
  ScrollView,
} from 'react-native';
import {IMAGES} from '../../assets';
import {backarrowStyle, Colors, Fonts} from '../../utils/Constants';
import {
  fontScale,
  horizontalMarginScale,
  horizontalScale,
  radiusScale,
  verticalMarginScale,
  verticalScale,
} from '../../utils/DimensionConstant';

const SearchDoctor = () => {
  const [selectedCategory, setSelectedCategory] = useState('Doctor');

  const categories = [
    {key: 'Doctor', label: 'Doctor', icon: IMAGES.doctorIcon},
    {key: 'Clinic', label: 'Clinic', icon: IMAGES.clinicIcon},
    {
      key: 'Specialization',
      label: 'Specialization',
      icon: IMAGES.specializationIcon,
    },
  ];
  const doctors = [
    {
      id: '1',
      image: require('../../assets/images/doctorimage1.png'),
      name: 'Dr. John Doe',
      specializations: ['Dermatologist', 'Cosmetologist'],
      fees: '$100',
      status: 'Online',
      rating: 2.0,
    },
    {
      id: '2',
      image: require('../../assets/images/doctorimage2.png'),
      name: 'Dr. Jane Smith',
      specializations: ['Cardiologist', 'General Physician', 'Cosmetologist'],
      fees: '$120',
      status: 'Online',
      rating: 4.0,
    },
    {
      id: '3',
      image: require('../../assets/images/doctorimage1.png'),
      name: 'Dr. Janeson',
      specializations: ['Dermatologist', 'Cosmetologist', 'General Physician'],
      fees: '$120',
      status: 'Offline',
      rating: 5.0,
    },
    {
      id: '4',
      image: require('../../assets/images/doctorimage1.png'),
      name: 'Dr. Janeson',
      specializations: ['Dermatologist', 'Cosmetologist', 'General Physician'],
      fees: '$120',
      status: 'Offline',
      rating: 3.0,
    },
    // Add more doctor objects as needed
  ];
  const renderCategoryItem = ({
    item,
  }: {
    item: {
      icon: ImageSourcePropType | undefined;
      key: string;
      label: string;
    };
  }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        selectedCategory === item.key && styles.selectedCategoryItem,
      ]}
      onPress={() => setSelectedCategory(item.key)}>
      <Image
        resizeMode="contain"
        source={item.icon}
        style={styles.categoryIcon}
      />

      <Text style={styles.categoryText}>{item.label}</Text>
    </TouchableOpacity>
  );
  const renderDoctorItem = ({
    item,
  }: {
    item: {
      rating: number;
      status: string;
      id: string;
      image: ImageSourcePropType;
      name: string;
      specializations: string[];
      fees: string;
    };
  }) => (
    <View style={styles.doctorCard}>
      <View style={styles.doctorInfo}>
        <Image source={item.image} style={styles.doctorImage} />
        <View style={styles.doctorDetails}>
          <Text style={styles.doctorName}>{item.name}</Text>
          <View style={styles.ratingContainer}>
            <Image
              resizeMode="contain"
              source={IMAGES.StarIcon}
              style={styles.starIcon}
            />
            <Text style={styles.ratingText}>{item.rating}</Text>
            <Text style={styles.ratingText}> (400 reviwer)</Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {item.specializations.map((specialization, index) => (
          <View key={index} style={styles.specializationContainer}>
            <Text style={styles.doctorSpecialization}>{specialization}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.separator} />
      {selectedCategory == 'Doctor' && (
        <View style={styles.doctorFeesContainer}>
          <View style={styles.feesContainer}>
            <Text style={styles.doctorfeesText}>Fees</Text>
            <Text style={styles.doctorFees}>{item.fees}</Text>
          </View>
          <TouchableOpacity
            style={styles.bookNowButton}
            onPress={() => console.log('Book Now pressed')}>
            <Text style={styles.bookNowButtonText}>Book Now</Text>
            <Image
              resizeMode="contain"
              source={IMAGES.blueArrow}
              style={styles.bookIcon}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  const renderList = () => {
    switch (selectedCategory) {
      case 'Doctor':
        return (
          <FlatList
            data={doctors}
            renderItem={renderDoctorItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        ); // Replace with your Doctor list component
      case 'Clinic':
        return  (
            <FlatList
              data={doctors}
              renderItem={renderDoctorItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          );; // Replace with your Clinic list component
      case 'Specialization':
        return (
            <FlatList
              data={doctors}
              renderItem={renderDoctorItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          );; // Replace with your Specialization list component
      default:
        return null;
    }
  };

  return (
    <ImageBackground source={IMAGES.backGround} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.header}>
            <Image
              resizeMode="contain"
              style={styles.backArrow}
              source={IMAGES.whitebackArrow}
            />
            <Text style={styles.search}>Search</Text>
            <View></View>
          </View>
          <View style={styles.searchBarContainer}>
            <Image source={IMAGES.searchIcon} style={styles.searchIcon} />
            <TextInput style={styles.searchInput} placeholder="Search" />
            <Image source={IMAGES.filterIcon} style={styles.filterIcon} />
          </View>
        </View>
        <View style={styles.mainView}>
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.key}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.listContainer}>{renderList()}</View>
        </View>
      </View>
    </ImageBackground>
  );
};

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

export default SearchDoctor;
