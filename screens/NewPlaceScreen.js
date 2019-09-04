
import React from 'react';
import {ScrollView, View, Button, Text, TextInput,StyleSheet} from 'react-native'
import  Colors from '../constants/Colors';

const NewPlaceScreen = props =>{
    return (
        <ScrollView>
        <View style={styles.form}>
            <Text style={styles.label}>NewPlaceScreen</Text>
            <TextInput style={styles.textInput}/>
            <Button title='Save Place' color={Colors.primary} onPress={()=>{}}/>
        </View>
        </ScrollView>  
    )
}
NewPlaceScreen.navigationOptions = {
    headerTitle: 'Add Places'
}

const styles = StyleSheet.create({
    form:{
        margin:30
    },
    label:{
        fontSize:18,
        marginBottom: 15
    },
    textInput:{
        borderBottomColor: '#ccc',
        borderBottomWidth:1,
        marginBottom:15,
        paddingVertical:4,
        paddingHorizontal: 2
    }
})

export default NewPlaceScreen