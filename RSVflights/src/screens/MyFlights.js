import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Auth from '../components/Auth';
import firebase from '../utils/firebase';
import 'firebase/auth';
import colors from '../utils/colors';
import {Icon} from 'react-native-elements';

export default function MyFlights(props) {
  const {navigation} = props;
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
    });
  }, []);

  if (user === undefined) {
    return null;
  }
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.background}>
        {user ? (
          <View>
            <Text>Logeado</Text>
            <Icon
              name="log-out-outline"
              type="ionicon"
              onPress={() => firebase.auth().signOut()}
              style={styles.signout}
              size={30}
            />
            <Text style={styles.titulo}>My flights</Text>
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
                <Text style={styles.date}>September 3, 2020</Text>
                <Text style={styles.date}>2 passengers</Text>
              </View>
              <View style={styles.screen}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate('Booking');
                  }}>
                  <Text style={styles.textbutton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <Auth />
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: '10%',
  },
  textbutton: {
    fontSize: 70,
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 85,
    fontWeight: 'bold',
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100%',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  cities: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: 30,
    marginTop: 0,
  },
  namecities: {
    fontSize: 17,
    fontWeight: '300',
    color: '#959597db',
  },
  line: {
    backgroundColor: '#dadaddc4',
    height: 2,
    width: 335,
    marginLeft: 40,
  },
  line2: {
    backgroundColor: 'black',
    height: 1,
    width: 335,
    marginLeft: 40,
  },
  button: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    borderRadius: 60,
    backgroundColor: '#5b6df8',
    color: 'white',
    marginLeft: '38%',
    marginTop: '10%',
  },
  flights: {
    paddingVertical: '5%',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 38,
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft: 20,
    color: '#5b6df8',
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingHorizontal: '5%',
    paddingVertical: '10%',
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
  signout: {
    marginLeft: '80%',
  },
});
