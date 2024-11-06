import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongInput, setWrongInput] = useState(false);

  const handleLogin = () => {
    const validEmail = 'adm';
    const validPassword = 'adms';

    if (email === validEmail && password === validPassword) {
      navigation.navigate('Home', { email });
    } else {
      setWrongInput(true);
    }
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.subtitle}>faça login na sua conta</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        onSubmitEditing={handleLogin}
      />
      {wrongInput && (<Text style={styles.alertText}>E-mail ou senha incorretos!</Text>)}
      
      <Button title="Acessar" onPress={handleLogin} color="#6200EE" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
    color: '#666',
  },
  input: {
    
    height:50,
     
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  alertText: {
    color: 'red',
    marginVertical: 12,
    textAlign: 'center',
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  forgotPasswordText: {
    color: '#6200EE',
    fontSize: 14,
  },
});
