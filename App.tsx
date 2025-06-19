import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AgendarConsultaScreen from './screens/AgendarConsultaScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MinhasConsultasScreen from './screens/MinhasConsultasScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="AgendarConsulta" component={AgendarConsultaScreen} options={{ title: 'Agendar Consulta' }} />
        <Stack.Screen name="MinhasConsultas" component={MinhasConsultasScreen} options={{ title: 'Minhas Consultas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;