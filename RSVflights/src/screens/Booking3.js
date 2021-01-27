import React from 'react';
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
  const [selectedDate, setSelectedDate] = React.useState('2021-01-31');
  const [markedDates, setMarkedDates] = React.useState({});

  const setNewDaySelected = (date) => {
    const markedDate = Object.assign({});
    markedDate[date] = {
      selected: true,
      selectedColor: '#5b6df8',
    };
    setSelectedDate(date);
    setMarkedDates(markedDate);
    console.log(selectedDate);
  };

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Booking_fly');
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
              <Text style={styles.textLocation}>BEG</Text>
              <Text style={styles.textCountry}>Serbia</Text>
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
              <Text style={styles.textLocation}>AMS</Text>
              <Text style={styles.textCountry}>Netherlands</Text>
            </View>
          </View>
          <View style={styles.date}>
            <Text style={styles.titulo}>Select date </Text>
            <Calendar
              style={styles.calender}
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
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('Passenger', {
                  date: Moment(selectedDate).format('MMMM D, YYYY'),
                })
              }>
              <Text style={styles.next}>Next</Text>
              <View
                style={[selectedDate.isTrue ? styles.button : styles.button2]}
              />
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
    marginBottom: 10,
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
  button: {
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 10,
    width: 360,
    height: 40,
    justifyContent: 'flex-end',
    marginLeft: 20,
    marginTop: 100,
    marginBottom: 100,
    borderRadius: 10,
    shadowColor: 'gray',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  next: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  number: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  calender: {
    width: 400,
  },
  date: {
    marginTop: 50,
  },
  textLocation: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.black,
    marginLeft: 20,
  },
  textCountry: {
    fontSize: 12,
    color: colors.gray,
    marginVertical: 10,
    marginLeft: 20,
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
    backgroundColor: '#5b6df8',
  },
});
