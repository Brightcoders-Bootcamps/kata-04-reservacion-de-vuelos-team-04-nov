import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Auth from '../components/Auth';
import firebase from '../utils/firebase';
import 'firebase/auth';
import colors from '../utils/colors';
import {Icon, ListItem} from 'react-native-elements';
import constants from '../utils/constants';
import 'firebase/firestore'

firebase.firestore()
const db = firebase.firestore(firebase);

export default function MyFlights(props) {
  const {navigation} = props;
  const [user, setUser] = useState(undefined);
  const [list, setList] =  useState([])

  useEffect(()=> {
    db.collection('reservation').onSnapshot(querySnapshot =>{
      const flights = [];

      querySnapshot.docs.forEach(doc =>{
        const {date, passenger} = doc.data();
        flights.push({
          id: doc.id, 
          date,
          passenger,
        })
      })
      setList(flights)
      console.ignoredYellowBox
    })
  }, [])

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
            <Icon
              name="log-out-outline"
              type="ionicon"
              onPress={() => firebase.auth().signOut()}
              style={styles.signout}
              size={30}
            />
            <Text style={styles.titulo}>{constants.titleFlight}</Text>
            <ScrollView>
            {
              list.map(flights => {
                return(
                  <ListItem 
                  key = {flights.id} bottomDivider>
                  <ListItem.Content>
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
                  <ListItem.Title style={styles.date}>{flights.date}</ListItem.Title>
                  <ListItem.Title style={styles.date}>{flights.passenger >= 2 ? `${flights.passenger} passengers` : `${flights.passenger} passenger`}</ListItem.Title>
                </View>
                    </ListItem.Content>
                  </ListItem>
                )
              })
            }
            </ScrollView>
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '115%'
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
  },
  button: {
    width: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 60,
    backgroundColor: '#5b6df8',
    color: 'white',
    marginLeft: '38%',
    position: 'absolute',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 38,
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft: 20,
    color: '#5b6df8',
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
    alignItems: 'flex-start',
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
