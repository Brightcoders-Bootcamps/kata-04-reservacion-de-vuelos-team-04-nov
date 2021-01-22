import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, Text, View} from 'react-native';
import Auth from './src/components/Auth';
import firebase from './src/utils/firebase';
import 'firebase/auth';
export default function App() {
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
            <Text>Logeado</Text>
            <Text onPress={() => firebase.auth().signOut()}>Cerrar Sesión</Text>
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
  },
});