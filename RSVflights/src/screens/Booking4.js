import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import colors from '../utils/colors';

const Passenger = ({navigation, route}) => {
  const {date} = route.params;
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Date');
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
        <Text style={styles.date}>{date}</Text>
        <View style={styles.passenger}>
          <Text style={styles.titulo}>How many passengers?</Text>
          <View style={styles.count}>
            <Icon
              name="chevron-left"
              type="feather"
              color={colors.blue}
              size={45}
              border
              onPress={() => setCount(count - 1)}
            />
            <Text style={styles.number}> {count} </Text>
            <Icon
              name="chevron-right"
              type="feather"
              color={colors.blue}
              size={45}
              border
              onPress={() => setCount(count + 1)}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Result', {passenger: count, date: date})
            }>
            <Text style={styles.next}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Passenger;

const styles = StyleSheet.create({
  titulo: {
    fontWeight: 'bold',
    fontSize: 38,
    backgroundColor: 'white',
    marginBottom: 10,
    marginTop: 30,
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
    backgroundColor: '#5b6df8',
    padding: 10,
    width: 360,
    height: 40,
    justifyContent: 'flex-end',
    marginLeft: 20,
    marginTop: 50,
    marginBottom: 10,
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
  count: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 350,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
    marginLeft: 80,
    marginRight: 50,
  },
  passenger: {
    backgroundColor: 'white',
  },
  number: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  calender: {
    width: 400,
  },
  date: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 20,
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
});
