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
  
  const RegisterScreen: React.FC = () => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const [username, setUsername] = useState<string>("");
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
            placeholder="Username"
            placeholderTextColor="#ffffff"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
          />
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
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <View style={styles.loginContainer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
          </View>
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
    input: {
      width: '100%',
      paddingHorizontal: 10,
      height: 40,
      color: "#ffffff",
      marginBottom: 8,
       borderBottomWidth:1,
    borderColor:"#ffffff"
    },
    separator: {
      height: 1,
      width: '100%',
      backgroundColor: '#ffffff',
      marginVertical: 8,
    },
    button: {
      marginTop: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
      padding: 10,
      borderRadius: 20,
      width: '100%',
    },
    buttonText: {
      color: 'violet',
      textAlign: 'center',
      fontWeight: "bold",
      fontSize: 16,
    },
    footerText: {
      color: '#ffffff',
    },
    loginContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
    },
    loginText: {
        color:"#ffffff",
        textDecorationLine: 'underline',
      fontWeight: "bold",
      marginLeft: 5,
    }
  });
  
  export default RegisterScreen;
  