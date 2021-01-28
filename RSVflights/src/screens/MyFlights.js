import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, Text, View, TouchableOpacity} from 'react-native';
import Auth from '../components/Auth';
import firebase from '../utils/firebase';
import 'firebase/auth';
import colors from '../utils/colors';
import {Icon} from 'react-native-elements';
// import { useNavigation } from '@react-navigation/native';


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
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.background}>
        {user ? (
          <View>
            <Text style={styles.title}>My Flights</Text> 
            <Icon 
              name="log-out-outline"
              type="ionicon" 
              onPress={() => firebase.auth().signOut()} />
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Booking')}}>
              <View >
                <Text style={styles.textbutton}>+</Text>
              </View>
            </TouchableOpacity>
        
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
  title: {
    color: colors.blue,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 75,
    backgroundColor: colors.blue2,
    borderRadius: 40,
    marginTop: 20,
    marginBottom: 20,
  },
  textbutton: {
    fontSize: 75,
    color: colors.white
  },
});
