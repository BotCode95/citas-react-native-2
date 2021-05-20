import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert, ScrollView} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import shortid from 'shortid';

const Formulario = ({citas,setCitas, setMostrarForm}) => {
    const [paciente,setPaciente] = useState('');
    const [propietario,setPropietario] = useState('');
    const [telefono,setTelefono] = useState('');
    const [sintomas,setSintomas] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);

    }
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    }
    const confirmarFecha = date => {
        console.log(date)
        const opciones ={year: 'numeric', month: 'long', day: "2-digit"}
        setFecha(date.toLocaleDateString('es-ES', opciones));
        hideDatePicker();
    }

    const showTimePicker = () => {
        setTimePickerVisibility(true);
        
    }
    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    }

    const confirmarTime = hora => {
        const opciones ={hour: 'numeric', minute: "2-digit"}
        setHora(hora.toLocaleString('en-EN', opciones));
        hideDatePicker();
    }

    const crearNuevaCita= () => {
        if(paciente.trim() === '' ||
            propietario.trim() === '' ||
            telefono.trim() === '' ||
            fecha.trim() === '' ||
            hora.trim() === '' ||
            sintomas.trim() === '') {
                console.log('Complete los datos');
                mostrarAlerta()
                return;
            }
        const cita = {paciente, propietario, telefono, fecha, hora, sintomas};

        cita.id = shortid.generate();

        const citasActuales = [...citas,cita];
        setCitas(citasActuales)

        setMostrarForm(false)


    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
            [{
                text: 'OK'
            }]
        )
    }

    return ( 
        <>
        <ScrollView style={styles.formulario}>
            <View>
                <Text style={styles.label}>Paciente: </Text>
                <TextInput style={styles.input}
                    onChangeText={(texto) => setPaciente(texto)}
                    // keyboardType='numeric'
                />
            </View>
            <View>
                <Text style={styles.label}>Dueño: </Text>
                <TextInput style={styles.input}
                    onChangeText={(texto) => setPropietario(texto)}
                    // keyboardType='numeric'
                />
            </View>
            <View>
                <Text style={styles.label}>Télefono Contacto: </Text>
                <TextInput style={styles.input}
                    onChangeText={(texto) => setTelefono(texto)}
                    keyboardType='numeric'
                />
            </View>
            <View>
                <Text style={styles.label}>Fecha:</Text>
                <Button title="Seleccionar Fecha" onPress={showDatePicker}/>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={confirmarFecha}
                    onCancel={hideDatePicker}
                    locale='es_ES'
                    headerTextIOS="Elige una fecha"
                />
                <Text>{fecha}</Text>
            </View>
            <View>
                <Text style={styles.label}>Hora:</Text>
                <Button title="Seleccionar Hora" onPress={showTimePicker}/>
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={confirmarTime}
                    onCancel={hideTimePicker}
                    locale='es_ES'
                    headerTextIOS="Elige una hora"
                />
                <Text>{hora}</Text>
            </View>
            <View>
                <Text style={styles.label}>Sintomas: </Text>
                <TextInput 
                    multiline
                    style={styles.input}
                    onChangeText={(texto) => setSintomas(texto)}
                />
            </View>
            <View>
                <TouchableHighlight onPress={() => crearNuevaCita()} style={styles.btnEnviar}>
                    <Text style={styles.textoSubmit}>Enviar </Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
        </>
     );
}

const styles= StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10
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
    },
    btnEnviar: {
        padding: 10,
        backgroundColor: '#7d024e',
        marginVertical:25,
    },
    textoSubmit: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
export default Formulario;