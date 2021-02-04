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
import { Icon } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export default function SingUp(props) {
  const navigation = useNavigation();
  const [formData, setFormData] = useState(defaultValue());
  const [formError, setFormError] = useState({});
  const [isSelectedPolicy, setSelectedPolicy] = useState(false);
  const [isSubscribe, setSubscribe] = useState(false);
  const [passVisible, setPassvisible] = useState(false);
  const setUndoVisiblePass =()=> {
    setPassvisible(!passVisible);
  };
  function ValidationOK (){
    let errors = {}; 
    if (
      !formData.email ||
      !formData.password ||
      !isSelectedPolicy ||
      !isSubscribe
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
      setFormError(errors);
      return false;
    } else if (formData.password.length < 8) {
      errors.password = true;
      setFormError(errors);
      return false;
    } else if (!validateEmail(formData.email)) {
        errors.email = true;
        setFormError(errors);
        return false;
    } else {
      return true;
    }
  }
  const register = () => {
    let validado = ValidationOK();
    if (validado)
    {
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          const mail = formData.email;
          navigation.navigate('Home',{pEmail: mail});
        })
        .catch((e) => {
          if (e.code == 'auth/email-already-in-use')
          setFormError({...formError, exist: true})
        });
    }
  };
  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
    if (type=='email')
    {
      setFormError({...formError, email: false});
      setFormError({...formError, exist: false});
    }
    else if (type=='password')
      setFormError({...formError, password: false});
  };
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.first}>
        <Text style={styles.title}>Sing Up</Text>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          onChange={(e) => onChange(e, 'name')}
        />
        <View  style={styles.viewEtiquetas} ><Text style={styles.label}>Email *</Text>{ (formError.exist) && <Text style={styles.labelError} > Email in use. Use a different email</Text>}</View> 
        <TextInput
          style={styles.input}
          onChange={(e) => onChange(e, 'email')}
        />
        <View style={styles.viewEtiquetas} ><Text style={styles.label}>Password *</Text>{ (formError.email || formError.password) && <Text style={styles.labelError} > Incorrect email and/or password</Text>}</View>        
        <View style={styles.containerInputIcon}>
           {passVisible ? (
              <TextInput 
              style={styles.inputIcon} 
              onChange={(e) => onChange(e, 'password')}
              />
           ) : (
            <TextInput 
            style={styles.inputIcon} 
            secureTextEntry={true}
            onChange={(e) => onChange(e, 'password')}
            />
           ) }           
                <TouchableOpacity onPress={setUndoVisiblePass}><Icon name='eye' type='feather' color= {colors.gray} size={17} /></TouchableOpacity>                
            </View>
        <Text style={styles.small}>
          Use 8 or more characters with a mix of letters, numbers and symbols.
        </Text>
      </View>
      <View>
        <View style={styles.containerCheckbox}>
          <CheckBox
            tintColors={{true: colors.blue, false: colors.black}}
            value={isSelectedPolicy}
            onValueChange={(newValue) => setSelectedPolicy(newValue)}
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
            value={isSubscribe}
            onValueChange={(newValue) => setSubscribe(newValue)}
          />
          <Text style={styles.textCheckbox}>
            Subscribe for select product updates.
          </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <View style={styles.container}>
          { ((!formError.email || !formError.password) && isSelectedPolicy && isSubscribe) ?
            (
              <TouchableOpacity style={styles.buttonEnabled} onPress={register}>
              <Text style={styles.textWhite}>Sign Up</Text>
            </TouchableOpacity>
            ) : (
              <View style={styles.buttonDisabled} >
              <Text style={styles.textWhite}>Sign Up</Text>
            </View>
            )
          }
          <Text style={styles.textCheckbox}>or</Text>
          { (isSelectedPolicy && isSubscribe) ?
            (
              <TouchableOpacity style={styles.button2Enabled}>
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
            ) : (
              <View style={styles.button2Disabled}>
              <View style={styles.containerImage}>
                <Image
                  source={require('../assets/images/google.png')}
                  style={styles.image}
                />
              </View>
              <View style={styles.containerTextWhite}>
                <Text style={styles.textWhite}>Sign Up with Google</Text>
              </View>
            </View>
            )
          }
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
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function defaultValue() {
  return {
    email: '',
    password: '',
    repeatPassword: ''
  };
}
const styles = StyleSheet.create({
  viewEtiquetas: {
    flexDirection:'row',
    alignItems: 'center',
  },
  labelError: {
    color: 'red',
    fontSize: 14,
    marginBottom: 5,
    marginTop: 15,
  },
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
  buttonEnabled: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 45,
    backgroundColor: colors.blue,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
  },
  buttonDisabled: {
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
  button2Enabled: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 45,
    backgroundColor: colors.blue,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
  },
  button2Disabled: {
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
