import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import colors from '../utils/colors';
import {Icon} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';


export default function Booking_fly({navigation, route}) {
  const {locationNow, pEmail} = route.params;
  const locationString = JSON.stringify(locationNow)
  const city = locationString.substring(1,4);
  const country = locationString.substring (5, (locationString.length-1));
  
  const [isSelectedPickerfly,setIsSelectedPickerfly] = useState("");

  return (
    <>
      <SafeAreaView>
        <View style={styles.containerPrincipal}>
          <View style={styles.containerIcon}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Booking', {pEmail: pEmail});
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
              <View style={styles.containerFly}></View>
            </View>
          </View>
          <View style={styles.containerQuestion}>
            <Text style={styles.question}>Where will you be flying to?</Text>
            <View style= {[isSelectedPickerfly ? styles.containerPickerBlue: styles.containerPicker]}>
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                onValueChange={(isSelectedPickerfly) => setIsSelectedPickerfly(isSelectedPickerfly)}
                placeholder={{label: "Select location", value: null }}
                style={{inputAndroid: {color: colors.black} }}
                items={[
                  {label: 'CDM, Ciudad de México', value: 'CDM Ciudad_Nexico'},
                  {label: 'GDL, Guadalajara', value: 'GDL Guadalajara'}, 
                  {label: 'QRO, Cancun', value: 'QRO Cancun'},
                ]}
              />
            </View> 
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={[isSelectedPickerfly ? styles.buttonBlue : styles.button]}
              onPress={() => {
                navigation.navigate('Date', {locationFly: isSelectedPickerfly, locationNow : locationNow, pEmail: pEmail });
              }}>
              <Text style={styles.textWhite}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingHorizontal: '2%',
    paddingVertical: '10%',
  },
  question: {
    color: colors.black,
    marginBottom: 40,
    fontSize: 38,
    fontWeight: 'bold',
  },
  containerIcon: {
    height: '25%',
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  containerReservation: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  containerQuestion: {
    height: '40%',
    paddingHorizontal: 10,
  },
  containerButton: {
    height: '35%',
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    height: 45,
    backgroundColor: colors.gray,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
  },
  buttonBlue: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    height: 45,
    backgroundColor: colors.blue,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
  },
  textWhite: {
    color: colors.white,
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
  containerNow: {
    width: '40%',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  containerFly: {
    width: '40%',
    alignItems: 'flex-end',
  },
  containerPlane: {
    height: '100%',
    width: '20%',
  },
  containerPicker:{
    borderBottomWidth:2,
    borderBottomColor: colors.gray
  },
  containerPickerBlue:{
    borderBottomWidth:2,
    borderBottomColor: colors.blue
  }

});
