import React from 'react'
import { 
    Text, 
    View, 
    StyleSheet, 
    SafeAreaView,
    TouchableOpacity,
    Image
} from 'react-native';
import colors from '../utils/colors'

export default function Buttons(props){
    const {navigation} = props;

    return(
        <SafeAreaView>
            <View style={styles.container} >
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Home') }}>
                    <Text style={styles.textWhite}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.textCheckbox}>or</Text>
                <TouchableOpacity style={styles.button2} onPress={() => {navigation.navigate('Home') }}>
                    <View style={styles.containerImage}>
                        <Image source={require('../assets/images/google.png')} style={styles.image}/>
                    </View>
                    <View style={styles.containerTextWhite}>
                        <Text style={styles.textWhite}>Sign Up with Google</Text>   
                    </View>
                </TouchableOpacity>
                <View style={styles.containerLogin}>
                    <Text style={styles.textCheckbox}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('LogIn') }}>
                        <Text style={styles.textLogin}>Log In</Text>
                    </TouchableOpacity>
                </View>

            </View> 
        
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerLogin:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center' ,
        height: 30,
        width: '100%',
        marginBottom: 10,
    },
    container:{
            justifyContent:'center',
            alignItems: 'center',
    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height: 45,
        backgroundColor: colors.gray,
        borderRadius:8,
        marginTop: 20,
        marginBottom: 20,
    },
    button2:{
        alignItems:'center',
        justifyContent:'flex-start',
        width:'100%',
        height: 45,
        backgroundColor:colors.gray,
        borderRadius:8,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row'
    },
    textWhite:{
        color: colors.white,
        fontSize: 15,
    },
    containerTextWhite:{
        width:'65%',
        alignItems:'center',
        justifyContent:'center'
    },
    textLogin:{
        color:colors.blue,
        textDecorationLine: 'underline',
    },
    image:{
        width: 20,
        height: 20,
        marginHorizontal:30
    },
    containerImage:{
        width:'15%',
        height:'100%',
        alignItems: 'flex-start',
        justifyContent:'center'
    },
    textCheckbox:{
        color: colors.gray,
        fontWeight: 'normal',
        paddingHorizontal:5,
        fontSize: 14,
    },
});