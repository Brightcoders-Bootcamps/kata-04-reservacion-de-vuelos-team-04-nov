import React from 'react';
import {
    StyleSheet,
    View, 
    TouchableHighlight,
    Dimensions,
    Text,
 } from 'react-native';

export default function Booking() {
    return(
        <View style={styles.containerPrincipal}>
            <TouchableHighlight>
                <Text>hola</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
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

});