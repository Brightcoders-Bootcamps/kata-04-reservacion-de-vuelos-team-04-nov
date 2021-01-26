import React from 'react'
import { 
    View, 
    StyleSheet, 
    SafeAreaView, 
    Dimensions} from 'react-native'
import CheckBoxs from '../components/CheckBoxs'
import FormInput from '../components/Form_SignUp'
import Buttons from '../components/Buttons'
// import colors from '../utils/colors'

export default function SignUp(props){
    const {navigation} = props;
    return(
        <SafeAreaView>
            <View style= {styles.containerPrincipal}>
                <FormInput/>
                <CheckBoxs/>
                <View style={styles.buttons}>
                    <Buttons navigation={navigation}/>  
                </View> 
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerPrincipal:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        paddingHorizontal: '2%',
        paddingVertical: '4%',
    },
    buttons:{
        width:'100%',
        justifyContent:'center',
        alignItems: 'center',
    },
});