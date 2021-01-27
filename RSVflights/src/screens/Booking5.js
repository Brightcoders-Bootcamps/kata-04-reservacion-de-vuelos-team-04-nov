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

const Result = ({navigation, route}) => {
  const {date} = route.params;
  const {passenger} = route.params;

  return (
    <SafeAreaView>
      <View style={styles.container}>
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
        <View style={styles.dates}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.date}>{passenger} passengers</Text>
        </View>
        <Text style={styles.received}>Your request was received.</Text>
        <View style={styles.passenger}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate}>
            <Text style={styles.next}>Finish</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Result;

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
    justifyContent: 'center',
    marginTop: 150,
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
  dates: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginRight: 500,
    marginTop: 15,
    marginBottom: 25,
    width: '100%',
  },
  date: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  received: {
    fontWeight: 'bold',
    fontSize: 38,
    textAlign: 'left',
    marginLeft: 20,
    paddingEnd: 50,
    flex: 1,
    width: '80%',
    marginTop: 10,
}
});
