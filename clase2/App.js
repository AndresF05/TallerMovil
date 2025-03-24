import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './ejercicios/Screen1';
import Screen2 from './ejercicios/Screen2';
import Screen3 from './ejercicios/Screen3';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ImageScreen from './ejercicios/ImageScreen';
import OptionsScreen from './ejercicios/OptionsScreen';
import QuizScreen from './ejercicios/QuizScreen';
import { Ionicons } from '@expo/vector-icons';

//Parte1
/*
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} */

//Parte2
/*const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Images') {
              iconName = focused ? 'image' : 'image-outline';
            } else if (route.name === 'Options') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Quiz') {
              iconName = focused ? 'help-circle' : 'help-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { paddingBottom: 5, paddingTop: 5 },
        })}
      >
        <Tab.Screen name="Images" component={ImageScreen} />
        <Tab.Screen name="Options" component={OptionsScreen} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}*/