import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Link href="/Home" style={styles.navText}>Home</Link>
        <Link href="/Listagem" style={styles.navText}>Listagem</Link>
        <Link href="/Cadastro" style={styles.navText}>Cadastro</Link>
      </View>
      <Image
        source={{ uri: 'https://www.phsoft.com.br/wp-content/uploads/2020/10/controle-estoque.png' }} // Nova imagem
        style={styles.stockImage}
      />

      {/* Conteúdo principal */}
      <Text style={styles.welcomeText}>Bem-vindo ao sistema</Text>

      {/* Nova imagem de controle de estoque */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
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
  stockImage: {
    width: '100%', // Ajusta a imagem para preencher a largura da tela
    height: 400, // Aumenta a altura da imagem
    marginTop: 20,
    borderRadius: 10,
    resizeMode: 'contain', // Ajusta a imagem para caber dentro do espaço
  },
});

export default Home;
