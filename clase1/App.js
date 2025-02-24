import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ThemeSwitcher from './Ejercicios/ThemeSwitcher';
import ToggleText from './Ejercicios/ToggleText';
import DynamicForm from './Ejercicios/DynamicForm';
import UserDetails from './Ejercicios/UserDetails';
import ClickCounter from './Ejercicios/ClickCounter';
import ImageGallery from './Ejercicios/ImageGallery';
import RegistrationForm from './Ejercicios/RegistrationForm';
import AlertButton from './Ejercicios/AlertButton';
import Greeting from './Ejercicios/Greeting';
import ParentCounter from './Ejercicios/ParentCounter';
import Game from './Ejercicios/Game';
import Task from './Ejercicios/Task';

//PUNTO 1
/*
// Ejercicio 1: Saludo Personalizado
export default function App() {
  const name = "Beto";
  return (
    <View style={styles.container}>
      <Greeting name={name} />
      <StatusBar style="auto" />
    </View>
  );
}
*/

/*
// Ejercicio 2: Detalles de Usuario
export default function App() {
  const nombre ="Beto";
  const edad = "20";
  const ocupacion = "Development";
  return (
    <View style={styles.container}>  
      <UserDetails nombre={nombre} edad={edad} ocupacion={ocupacion} />
      <StatusBar style="auto" />
    </View>
  );
}
*/

/*
// Ejercicio 3: Lista de Tareas
export default function App() {
  const task = { title: "Aprender React Native", completed: false };

  return (
    <View>
      <Task task={task} />
      <StatusBar style="auto" />
    </View>
  );
}
*/

//PUNTO 2
/*
// Ejercicio 1: Control de Visibilidad
export default function App() {
  return (
    <View style={styles.container}>
      <ToggleText />
      <StatusBar style="auto" />
    </View>
  );
}
*/

/*
// Ejercicio 2: Formulario Dinámico
export default function App() {
  return (
    <View style={styles.container}>
      <DynamicForm />
      <StatusBar style="auto" />
    </View>
  );
}
*/

/*
// Ejercicio 3: Contador de Clicks
export default function App() {
  return (
    <View style={styles.container}>
      <ClickCounter />
      <StatusBar style="auto" />
    </View>
  );
}
*/

//PUNTO 3
 /*
// Ejercicio 1: Formulario de Registro
export default function App() {
  const [userData, setUserData] = useState(null);

  return (
    <View style={styles.container}>
      <RegistrationForm onRegister={setUserData} />
      {userData && (
        <View style={styles.box}>
          <Text style={styles.text}>Datos Registrados:</Text>
          <Text>Nombre: {userData.name}</Text>
          <Text>Correo: {userData.email}</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
*/

/*
// Ejercicio 2: Cambio de Tema
export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <View style={[styles.container, isDarkTheme ? styles.darkTheme : styles.lightTheme]}>
      <ThemeSwitcher onToggleTheme={setIsDarkTheme} />
      <Text style={styles.text}>Modo {isDarkTheme ? "Oscuro" : "Claro"}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/

/*
// Ejercicio 3: Alerta
export default function App() {
  const alertMessage = "Alerta, Virus";

  return (
    <View style={styles.container}>
      <AlertButton message={alertMessage} />
      <StatusBar style="auto" />
    </View>
  );
}
*/

// PUNTO 4

/*
// Ejercicio 1: Contador desde el Padre
export default function App() {
  return (
    <View style={styles.container}>
      <ParentCounter />
      <StatusBar style="auto" />
    </View>
  );
}
*/

/*
// Ejercicio 2: Galería de Imágenes
export default function App() {
  return (
    <View style={styles.container}>
      <ImageGallery />
      <StatusBar style="auto" />
    </View>
  );
}
*/

/*
// Ejercicio 3: Juego de adivinanzas
export default function App() {
  return (
    <View style={styles.container}>
      <Game />
      <StatusBar style="auto" />
    </View>
  );
}
*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  box: {
    padding: 20,
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});