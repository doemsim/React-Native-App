import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
 
function LoginApp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const defaultPassword = "sim123";
  
  const emailIs = `Your email is: ${email}`;
  const passwordIs = `Your Password is: ${password}`;

    const handleLoginForm = () => {
      //Validation password
      if(password !== defaultPassword) {
        alert("Password Incorrect")
      }else{
        alert(emailIs + "\n" + passwordIs);
      }
    }

  return (
    <View style={styles.container}>
      <View style={styles.loginform}>
        <Text style={styles.header}>Login Form</Text>
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
      </View>
      <TouchableOpacity onPress={handleLoginForm} style={styles.bottom}>
        <Text style={styles.btntext}>Login</Text>
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
  loginform: {
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
export default LoginApp;
