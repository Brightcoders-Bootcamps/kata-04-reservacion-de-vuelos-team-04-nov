import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  LogBox,
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

export default function MyFlights({navigation}) {  
  const [user, setUser] = useState(undefined);
  const [list, setList] =  useState([]);
  useEffect(()=> {   
    LogBox.ignoreLogs(['Setting a timer']);
    firebase.auth().onAuthStateChanged((response) => {
      if (response)
      {
        const mail = response.email;        
        setUser(response);   
        if(mail)
        {
          const flights = [];
          db.collection(response.uid)
          .orderBy('DateFly','asc')
          .get()
          .then((response) => {
            response.forEach((doc) => {
              const data = doc.data();
              data.id = doc.id;
              flights.push(data);
            });
            setList(flights);                 
          });
        }      
      }      
    });  
  }, [list]);
  const salir =()=> {
    firebase.auth().signOut();
    setUser(undefined);
  }
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.background}>
        {user ? (
          <View style={styles.container}> 
            <View style={styles.header}>
              <Text style={styles.titulo}>{constants.titleFlight}</Text>
              <Icon
                name="log-out-outline"
                type="ionicon"
                onPress={salir}
                style={styles.signout}
                size={30}
              />              
            </View>           
            <ScrollView>
            {
              list.map(flights => {
                return(
                <ListItem key = {flights.id} bottomDivider>
                      <ListItem.Content>
                        <View style={styles.containerReservation}>
                            <View style={styles.containerNow}>
                            <Text style={styles.textLocation}>{flights.CityOrigen}</Text>
                            <Text style={styles.textCountry}>{flights.CountryOrigen}</Text>
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
                            <Text style={styles.textLocation}>{flights.CityDestino}</Text>
                            <Text style={styles.textCountry}>{flights.CountryDestino}</Text>
                          </View>
                        </View>
                        <View style={styles.dates}>
                          <ListItem.Title style={styles.date}>{flights.DateFly}</ListItem.Title>
                          <ListItem.Title style={styles.date}>{flights.Passenger >= 2 ? `${flights.Passenger} passengers` : `${flights.Passenger} passenger`}</ListItem.Title>
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
                  console.log(user.uid);            
                  navigation.navigate('Booking', {pEmail: user.uid});
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingHorizontal: '2%',
    paddingVertical: '10%',
  },
  container: {
    width :'100%'
  },  
  screen: {    
    position: 'absolute',   
    alignItems: 'center',
    width: '100%',
    height: 650,
    justifyContent: 'flex-end',
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: colors.blue,
    color: 'white',        
  },
  textbutton: {
    fontSize: 70,
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 38,
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft: 20,
    color: colors.blue,
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
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});
