import React from 'react'
import { 
    Text, 
    View, 
    StyleSheet, 
    TextInput,
} from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../utils/colors'

export default function FormInput() {
    return(
        <View style={styles.first}>
            <Text style={styles.title}>Sing Up</Text>
            <Text style={styles.label}>First Name</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.label}>Email *</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.label}>Password *</Text>
            <View style={styles.containerInputIcon}>
                <TextInput style={styles.inputIcon}/>
                <Icon name='eye' type='feather' color= {colors.gray} size={17}/>
            </View>
            <Text style={styles.small}>Use 8 or more characters with a mix of letters, numbers and symbols.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    first:{
        height: '48%',
        width:'100%' ,
        paddingHorizontal:'2%'
    },
    title:{
        color: colors.blue,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    input:{
        borderColor: colors.gray,
        borderWidth: 1,
        width:'100%',
        height: 40
    
    },
    label:{
        marginBottom: 5,
        marginTop:15 ,
        fontSize: 14,
    },
    containerInputIcon:{
        flexDirection: 'row',
        alignItems:'center',
        width:'100%',
        borderColor: colors.gray,
        borderWidth: 1,
        height: 40,
    },
    inputIcon:{
        width:'90%',
        height: '100%',
    },
    small:{
        fontSize: 12,
        marginTop:5,
        color: colors.gray
    },

});