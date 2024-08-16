
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import React, { useState } from "react";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { Text } from 'react-native-paper';

   
  const LoginScreen: React.FC = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

   return (
     <ImageBackground source={require('../assets/background.jpg')} style={styles.container}>
        <View style={{paddingBottom:70}} > 
        <Image source={require('../assets/money-management.png')} style= {{width:70,height:70}} />
        </View>
      <View style={styles.centeredContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ffffff"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ffffff"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Home') }}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
        <Text style={styles.footerText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  centeredContainer: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    paddingHorizontal:10,
    height: 40,
    color: "#ffffff",
    marginBottom: 8,
    borderBottomWidth:1,
    borderColor:"#ffffff"
  },
 
  button: {
    marginTop: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    padding: 10,
    borderRadius: 20,
    width: '100%',
  },
  buttonText: {
    color: 'violet',
    textAlign: 'center',
    fontWeight:"bold",
    fontSize: 16,
  },
  footerText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#FFFFFf',
    fontWeight:"bold",

  },
});

export default LoginScreen;
