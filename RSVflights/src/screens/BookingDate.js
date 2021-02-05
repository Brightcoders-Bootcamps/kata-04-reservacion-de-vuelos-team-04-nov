import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Moment from 'moment';
import {View} from 'react-native';
import colors from '../utils/colors';
import {Icon} from 'react-native-elements';

const Calender = ({navigation, route}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [markedDates, setMarkedDates] = useState({});
  const {locationNow, locationFly, pEmail} = route.params;

  const locationString = JSON.stringify(locationNow)
  const city = locationString.substring(1,4);
  const country = locationString.substring (5, (locationString.length-1));

  const locationFlyString = JSON.stringify(locationFly)
  const cityFly = locationFlyString.substring(1,4);
  const countryFly = locationFlyString.substring (5, (locationFlyString.length-1));

  const setNewDaySelected = (date) => {
    const markedDate = Object.assign({});
    markedDate[date] = {
      selected: true,
      selectedColor: colors.blue,
    };
    setSelectedDate(date);
    setMarkedDates(markedDate);
    console.log(selectedDate);
  };

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.containerIcons}>
            <TouchableOpacity
              onPress={() => {
              navigation.navigate('Booking_fly',{locationNow, pEmail});
            }}>
              <Icon
                name="chevron-left"
                type="feather"
                color={colors.blue}
                size={35}
                border
              />
            </TouchableOpacity>
            <View style={styles.containerReservation}>
              <View style={styles.containerNow}>
                <Text style={styles.textLocation}>{city}</Text>
                <Text style={styles.textCountry}>{country}</Text>
              </View>
              <View style={styles.containerPlane}>
                <Icon
                  name="airplane"
                  type="ionicon"
                  color={colors.blue}
                  size={30}
                />
              </View>
              <View style={styles.containerFly}>
                <Text style={styles.textLocation}>{cityFly}</Text>
                <Text style={styles.textCountry}>{countryFly}</Text>
              </View>
            </View>
          </View>  
          <View style={styles.date}>
            <Text style={styles.titulo}>Select date </Text>
            <Calendar
              markedDates={markedDates}
              current={selectedDate}
              pastScrollRange={24}
              futureScrollRange={24}
              horizontal
              pagingEnabled
              onDayPress={(day) => {
                setNewDaySelected(day.dateString);
                console.log(day);
              }}
            />
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={[selectedDate === '' ? styles.button : styles.button2]}
              onPress={() =>
                navigation.navigate('Passenger', {
                  locationNow: locationNow, 
                  locationFly:locationFly,
                  date: Moment(selectedDate).format('MMMM D, YYYY'),
                  city: city,
                  country: country,
                  cityFly: cityFly,
                  countryFly: countryFly,
                  pEmail: pEmail,
                })
              }>
              <Text style={styles.next}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Calender;

const styles = StyleSheet.create({
  titulo: {
    fontWeight: 'bold',
    fontSize: 38,
    backgroundColor: 'white',
    marginBottom: 5,
    marginLeft: 20,
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingHorizontal: '2%',
    paddingVertical: '10%',
  },
  containerIcons: {
    height: '25%',
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  containerButton: {
    height: '35%',
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.gray,
    width: '95%',
    height: 45,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 8,
  },
  next: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  calender: {
    width: '100%',
  },
  date: {
    height: '40%',
    width:'100%',
  },
  textLocation: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.black,
  },
  textCountry: {
    fontSize: 12,
    color: colors.gray,
    marginVertical: 10
  },
  containerReservation: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  containerNow: {
    width: '40%',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  containerFly: {
    width: '40%',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    alignItems: 'flex-end',
  },
  containerPlane: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    height: '100%',
    width: '20%',
    // justifyContent:'center'
  },
  button2: {
    alignItems: 'center',
    backgroundColor: colors.blue,
    width: '95%',
    height: 45,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 8,
  },
});
