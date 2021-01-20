import React, {useState} from 'react'
import { 
    Text, 
    View, 
    StyleSheet, 
    SafeAreaView, 
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import colors from '../utils/colors'

export default function CheckBoxs() {
    const [isSelected, setSelected] = useState(false);
    const [isSelected2, setSelected2] = useState(false);

    return(
        <SafeAreaView>
            <View style={styles.containerCheckbox}>
                <CheckBox
                    tintColors= {{true: colors.blue , false: colors.black}}
                    value= {isSelected}
                    onValueChange= {(newValue) => setSelected(newValue)}
                />
                <Text style={styles.textCheckbox}>I agree to the <Text style={styles.underline}>Terms</Text> and <Text style={styles.underline}>Privacy Policy</Text><Text style={styles.textred} > *</Text></Text>
            </View>
            <View style={styles.containerCheckbox}>
                <CheckBox
                    tintColors= {{true: colors.blue , false: colors.black}}
                    value= {isSelected2}
                    onValueChange= {(newValue) => setSelected2(newValue)}
                />
                <Text style={styles.textCheckbox}>Subscribe for select product updates.</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerCheckbox:{
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
        width: '100%',
        marginBottom: 10
    },
    checkbox:{
        fontSize: 12,
        backgroundColor: colors.white,
        borderColor: colors.white,
        justifyContent:'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal:0
    },
    textCheckbox:{
        color: colors.gray,
        fontWeight: 'normal',
        paddingHorizontal:5,
        fontSize: 14,
    },
    underline:{
        textDecorationLine: 'underline',
        color: colors.gray
    },
    textred:{
        color: colors.red
    },
});