import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import colors from '../utils/colors';
import firebase from '../utils/firebase';

export default function SingUp(props) {
  const {changeForm, navigation} = props;
  const [formData, setFormData] = useState(defaultValue());
  const [formError, setFormError] = useState({});
  const [isSelected, setSelected] = useState(false);
  const [isSelected2, setSelected2] = useState(false);

  const register = () => {
    let errors = {}; 
    if (
      !formData.email ||
      !formData.password ||
      !formData.name ||
      !isSelected ||
      !isSelected2
    ) {
      if (!formData.email) {
        errors.email = true;
      }
      if (!formData.password) {
        errors.password = true;
      }
      if (!formData.name) {
        errors.name = true;
      }
    } else if (formData.password.length < 8) {
      errors.password = true;
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          console.log('cuenta creada');
          navigation.navigate('Home');
        })
        .catch(() => {
          setFormError({email: true, password: true, name: true});
        });
    }
    setFormError(errors);
  };
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.first}>
        <Text style={styles.title}>Sing Up</Text>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          onChange={(e) => setFormData({...formData, name: e.nativeEvent.text})}
        />
        <Text style={styles.label}>Email *</Text>
        <TextInput
          style={styles.input}
          onChange={(e) =>
            setFormData({...formData, email: e.nativeEvent.text})
          }
        />
        <Text style={styles.label}>Password *</Text>
        <View style={styles.containerInputIcon}>
          <TextInput
            style={styles.inputIcon}
            secureTextEntry={true}
            onChange={(e) =>
              setFormData({...formData, password: e.nativeEvent.text})
            }
          />
        </View>
        <Text style={styles.small}>
          Use 8 or more characters with a mix of letters, numbers and symbols.
        </Text>
      </View>
      <View>
        <View style={styles.containerCheckbox}>
          <CheckBox
            tintColors={{true: colors.blue, false: colors.black}}
            value={isSelected}
            onValueChange={(newValue) => setSelected(newValue)}
          />
          <Text style={styles.textCheckbox}>
            I agree to the <Text style={styles.underline}>Terms</Text> and{' '}
            <Text style={styles.underline}>Privacy Policy</Text>
            <Text style={styles.textred}> *</Text>
          </Text>
        </View>
        <View style={styles.containerCheckbox}>
          <CheckBox
            tintColors={{true: colors.blue, false: colors.black}}
            value={isSelected2}
            onValueChange={(newValue) => setSelected2(newValue)}
          />
          <Text style={styles.textCheckbox}>
            Subscribe for select product updates.
          </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={register}>
            <Text style={styles.textWhite}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.textCheckbox}>or</Text>
          <TouchableOpacity style={styles.button2}>
            <View style={styles.containerImage}>
              <Image
                source={require('../assets/images/google.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.containerTextWhite}>
              <Text style={styles.textWhite}>Sign Up with Google</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.containerLogin}>
            <Text style={styles.textCheckbox}>Already have an account?</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('LogIn')}}>
              <Text style={styles.textLogin}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
function defaultValue() {
  return {
    email: '',
    password: '',
    repeatPassword: '',
  };
}
const styles = StyleSheet.create({
  containerPrincipal: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingHorizontal: '2%',
    paddingVertical: '4%',
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
    backgroundColor: colors.gray,
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
