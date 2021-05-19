import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario'

export default function App() {

  const [citas, setCitas] = useState([
    {id: "1", paciente: "Hook", propietario: 'Juan', sintomas: "No come"},
    {id: "2", paciente: "Redux", propietario: 'Juan', sintomas: "dolor"},
    {id: "3", paciente: "Context", propietario: 'Juan', sintomas: "No come"},
    {id: "4", paciente: "Node", propietario: 'Juan', sintomas: "No duerme"}
  ]);

  const eliminarPaciente= id => {
    setCitas((citasActuales) => {
      return citasActuales.filter(cita => cita.id !== id);
    })
  }
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
        <View style={styles.contenido}>
          <Formulario/>
          <Text style={styles.titulo}>{citas.length > 0 ? 
          'Administra tus citas' : ' No hay citas,agrega una'}</Text>
          <FlatList
            style={styles.listado}
            data={citas}
            renderItem = {({item}) => (
                <Cita cita={item}
                  eliminarPaciente={eliminarPaciente}
                />
              )
            }
            keyExtractor={cita => cita.id}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor : {
  backgroundColor : '#AA076B',
  flex: 1
  },
  titulo: {
      marginTop: 40,
      marginBottom: 20,
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff'
  },
  contenido : {
    flex: 1,
    marginHorizontal: '2.5%'
  },
  listado : {
    flex:1,

  }
});
