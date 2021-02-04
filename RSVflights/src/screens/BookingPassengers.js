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
  const {locationNow, locationFly, date, city, country, cityFly, countryFly, pEmail} = route.params;  
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.containerIcons}>
          <TouchableOpacity
            onPress={() => {
            navigation.navigate('Date', {locationNow, locationFly, pEmail});
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
          <Text style={styles.date}>{date}</Text> 
        </View>
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
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={[count ? styles.buttonBlue : styles.button]}
            onPress={() =>
              navigation.navigate('Result', {locationNow: locationNow, locationFly: locationFly, date: date, city: city, country: country, cityFly: cityFly, countryFly: countryFly, pEmail: pEmail, passenger: count})
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
    width:'100%',
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
  buttonBlue: {
    alignItems: 'center',
    backgroundColor: colors.blue,
    width: '95%',
    height: 45,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 8,
  },
  containerButton: {
    height: '35%',
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  next: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  count: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 250,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
    marginLeft: '20%',
    marginRight: '20%',
  },
  date: {
    fontWeight:'bold',
    paddingHorizontal: 10,
    marginTop:10
  },
  passenger: {
    backgroundColor: colors.white,
    height: '40%',
    width:'100%',
  },
  number: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  textLocation: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.black,
  },
  textCountry: {
    fontSize: 12,
    color: colors.gray,
    marginVertical: 10,
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
