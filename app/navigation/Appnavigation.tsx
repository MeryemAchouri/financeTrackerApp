import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";


const Stack = createStackNavigator();

const Navigation: React.FC = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
          
          <Stack.Screen name="Login"  component={LoginScreen} options={{headerShown:false}} />
          <Stack.Screen name="Register"  component={RegisterScreen} options={{headerShown:false}} />
          <Stack.Screen name="Home" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;