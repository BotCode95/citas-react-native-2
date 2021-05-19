import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const Formulario = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);

    }
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    }
    const confirmarFecha = date => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    }

    const showTimePicker = () => {
        setTimePickerVisibility(true);
        
    }
    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    }

    const confirmarTime = date => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    }

    return ( 
        <>
        <View style={styles.formulario}>
            <View>
                <Text style={styles.label}>Paciente: </Text>
                <TextInput style={styles.input}
                    onChangeText={(texto) => console.log(texto)}
                    // keyboardType='numeric'
                />
            </View>
            <View>
                <Text style={styles.label}>Dueño: </Text>
                <TextInput style={styles.input}
                    onChangeText={(texto) => console.log(texto)}
                    // keyboardType='numeric'
                />
            </View>
            <View>
                <Text style={styles.label}>Télefono Contacto: </Text>
                <TextInput style={styles.input}
                    onChangeText={(texto) => console.log(texto)}
                    keyboardType='numeric'
                />
            </View>
            <View>
                <Button title="Seleccionar Fecha" onPress={showDatePicker}/>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={confirmarFecha}
                    onCancel={hideDatePicker}
                    locale='es_ES'
                    headerTextIOS="Elige una fecha"
                />
            </View>
            <View>
                <Button title="Seleccionar Hora" onPress={showTimePicker}/>
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={confirmarTime}
                    onCancel={hideTimePicker}
                    locale='es_ES'
                    headerTextIOS="Elige una hora"
                />
            </View>
            <View>
                <Text style={styles.label}>Sintomas: </Text>
                <TextInput 
                    multiline
                    style={styles.input}
                    onChangeText={(texto) => console.log(texto)}
                />
            </View>
        </View>
        
        </>
     );
}

const styles= StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: '2.5%'
    },
    label: {
        fontWeight: 'bold',
        fontSize:18,
        marginTop: 20
    },
    input: {
        marginTop:10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    }
})
export default Formulario;