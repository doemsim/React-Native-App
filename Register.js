import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
 
function RegisterApp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const emailIs = `Your Email is: ${email}`;
  const emailInvalide = `Your Email invalid!`;
  const passwordIs = `Your Password is: ${password}`;

    const handleRegisterForm = () => {

      //Validation email formate
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(email) === false){
          alert(emailInvalide);
      }

      //Validation password and confirm password 
      if(password !== confirmPassword) {
        alert("Password Not Match!")
      }else{
        alert(passwordIs);
      }
      
      //Validation email, password, and confirm password
      if(reg.test(email) === true && password === confirmPassword) {
        alert(emailIs + "\n" + passwordIs);
      }
    }

  return (
    <View style={styles.container}>
      <View style={styles.regform}>
        <Text style={styles.header}>Register Form</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Email..."
          placeholderTextColor="#fff"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Password..."
          placeholderTextColor="#fff"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Confirm Password..."
          placeholderTextColor="#fff"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        />
      </View>
      <TouchableOpacity onPress={handleRegisterForm} style={styles.bottom}>
        <Text style={styles.btntext}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485f',
    paddingLeft: 60,
    paddingRight: 60,
  },
  regform: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 2,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 10,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  bottom: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 10,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default RegisterApp;
