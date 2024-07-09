import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import mainscreen from './calculator';
import UnitConvert from './unitconvert';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
        <Stack.Screen name="Calculator" component={mainscreen} />
        <Stack.Screen name="UnitConverter" component={UnitConvert}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
