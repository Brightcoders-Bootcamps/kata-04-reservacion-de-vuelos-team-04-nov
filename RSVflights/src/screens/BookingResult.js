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
        <View style={styles.containerButton}>
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
    backgroundColor: colors.blue,
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
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 25,
    width: '100%',
  },
  date: {
    fontWeight: 'bold',
  },
  received: {
    fontWeight: 'bold',
    fontSize: 38,
    textAlign: 'left',
    marginLeft: 15,
    // paddingEnd: 50,
    flex: 1,
    width: '80%',
    marginTop: 10,
  },
  containerButton: {
    height: '35%',
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
});
