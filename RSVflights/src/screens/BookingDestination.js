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

export default function Booking(props) {
  const {navigation, router} = props;
  const [isSelectedPicker,setIsSelectedPicker] = useState("");

  return (
    <>
      <SafeAreaView>
        <View style={styles.containerPrincipal}>
          <View style={styles.containerIcon}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Booking');
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
              <View style={styles.containerFly}></View>
            </View>
          </View>
          <View style={styles.containerQuestion}>
            <Text style={styles.question}>Where will you be flying to?</Text>
            <View style= {[isSelectedPicker ? styles.containerPickerBlue: styles.containerPicker]}>
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                onValueChange={(isSelectedPicker) => setIsSelectedPicker(isSelectedPicker)}
                placeholder={{label: "Select location", value: null }}
                style={{inputAndroid: {color: colors.black} }}
                items={[
                  {label: 'Belgrade, Serbia', value: 'BEG'},
                  {label: 'AMS, Netherlands', value: 'AMS'}, 
                  {label: 'Berlin, Germany', value: 'BER'},
                ]}
              />
            </View> 
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={[isSelectedPicker ? styles.buttonBlue : styles.button]}
              onPress={() => {
                navigation.navigate('Date');
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
