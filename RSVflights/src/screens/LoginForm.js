import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  TextInput,
  Image,
} from 'react-native';
import firebase from '../utils/firebase';
import 'firebase/auth';
import colors from '../utils/colors';
import {useNavigation} from '@react-navigation/native'

export default function LoginForm(props) {
  const navigation = useNavigation();
  const [formData, setFormData] = useState(defaultValue());
  const [formError, setFormError] = useState({});
  
  const login = () => {
    let errors = {};
    if (!formData.email || !formData.password) {
      if (!formData.email) {
        errors.email = true;
      }
      if (!formData.password) {
        errors.password = true;
      }
    } else if (formData.password.length < 8) {
      errors.password = true;
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then(() => {          
          navigation.navigate('Home');
        })
        .catch(() => {
          setFormError({
            email: true,
            password: true,
          });
        });
    }
    setFormError(errors);
  };
  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
  };
  return (
    <>
      <View style={styles.containerPrincipal}>
        <View style={styles.logoTipo}>
          <Image
            style={styles.logo}
            source={require('../assets/images/logoF.png')}
          />
        </View>
        <View style={styles.first}>
          <Text style={styles.title}>Sing In</Text>
          <Text style={styles.label}>Email *</Text>
          <TextInput
            style={styles.input}
            onChange={(e) => onChange(e, 'email')}
          />
          <Text style={styles.label}>Password *</Text>
          <View style={styles.containerInputIcon}>
            <TextInput
              style={styles.inputIcon}
              secureTextEntry={true}
              onChange={(p) => onChange(p, 'password')}
            />
          </View>
          <Text style={styles.small}>
            Use 8 or more characters with a mix of letters, numbers and symbols.
          </Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={login}>
              <Text style={styles.textWhite}>Sign In</Text>
            </TouchableOpacity>
            <Text style={styles.textCheckbox}>or</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('SingUp');
              }}>
              <View style={styles.containerTextWhite}>
                <Text style={styles.textWhite}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
function defaultValue() {
  return {
    email: '',
    password: '',
  };
}
const styles = StyleSheet.create({
  logoTipo: {
    width: '100%',
    height: 120,
    alignSelf: 'center',
    position: 'absolute',
  },
  logo: {
    width: '20%',
    height: 60,
    alignSelf: 'center',
    marginTop: 10,
  },
  containerPrincipal: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingHorizontal: '2%',
    paddingVertical: '20%',
    //  marginTop: '15%',
  },
  buttons: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  first: {
    height: '48%',
    width: '100%',
    paddingHorizontal: '2%',
  },
  title: {
    color: colors.blue,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  input: {
    borderColor: colors.gray,
    borderWidth: 1,
    width: '100%',
    height: 40,
  },
  label: {
    marginBottom: 5,
    marginTop: 15,
    fontSize: 14,
  },
  containerInputIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: colors.gray,
    borderWidth: 1,
    height: 40,
  },
  inputIcon: {
    width: '90%',
    height: '100%',
  },
  small: {
    fontSize: 12,
    marginTop: 5,
    color: colors.gray,
  },
  containerCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    width: '100%',
    marginBottom: 10,
  },
  checkbox: {
    fontSize: 12,
    backgroundColor: colors.white,
    borderColor: colors.white,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 0,
  },
  underline: {
    textDecorationLine: 'underline',
    color: colors.gray,
  },
  textred: {
    color: colors.red,
  },
  containerLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: '100%',
    marginBottom: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 45,
    backgroundColor: colors.blue2,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 45,
    backgroundColor: colors.gray,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
  },
  textWhite: {
    color: colors.white,
    fontSize: 15,
  },
  containerTextWhite: {
    width: '65%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogin: {
    color: colors.blue,
    textDecorationLine: 'underline',
  },
  image: {
    width: 20,
    height: 20,
    marginHorizontal: 30,
  },
  containerImage: {
    width: '15%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textCheckbox: {
    color: colors.gray,
    fontWeight: 'normal',
    paddingHorizontal: 5,
    fontSize: 14,
  },
});
