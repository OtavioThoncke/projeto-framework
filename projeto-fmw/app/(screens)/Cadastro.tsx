import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native'; // Ajuste isso conforme a sua implementação de navegação
import axios from 'axios';

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [preco, setPreco] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleCadastro = async () => {
    if (!nome || !marca || !preco) {
      setAlertMessage('Por favor, preencha todos os campos!');
      return;
    }

    setAlertMessage('');

    // URL da sua API para cadastrar mercadorias
    const apiUrl = 'http://localhost:3006/cadastrar'; // Alterado para a rota correta

    try {
      const response = await axios.post(apiUrl, {
        nome,
        marca,
        preco,
      });

      console.log('Cadastro realizado com sucesso!', response.data);
      // Você pode redirecionar ou resetar o formulário após o sucesso
      setNome('');
      setMarca('');
      setPreco('');
      setAlertMessage('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setAlertMessage('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Link to="/Home" style={styles.navText}>
          Home
        </Link>
        <Link to="/Listagem" style={styles.navText}>
          Listagem
        </Link>
        <Link to="/Cadastro" style={styles.navText}>
          Cadastro
        </Link>
      </View>

      <Text style={styles.title}>Cadastro de Produto</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={marca}
        onChangeText={setMarca}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />
      
      {alertMessage ? <Text style={styles.alertText}>{alertMessage}</Text> : null}
      
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#333',
  },
  navText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  alertText: {
    color: 'red',
    marginBottom: 15,
  },
});

export default Cadastro;
