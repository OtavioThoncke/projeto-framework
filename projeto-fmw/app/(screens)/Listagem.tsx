import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import axios from 'axios';

interface Mercadoria {
  id: string;
  nome: string;
  marca: string;
  preco: string;
  imagem: string; // Propriedade de imagem
}

const Listagem: React.FC = () => {
  const [mercadorias, setMercadorias] = useState<Mercadoria[]>([]);
  const apiUrl = 'http://localhost:3006/mercadorias'; // URL da sua API

  useEffect(() => {
    // Função para buscar mercadorias da API
    const fetchMercadorias = async () => {
      try {
        const response = await axios.get(apiUrl);
        setMercadorias(response.data); // Atualiza o estado com os dados da API
      } catch (error) {
        console.error('Erro ao buscar mercadorias:', error);
      }
    };

    fetchMercadorias();
  }, []);

  const renderItem = ({ item }: { item: Mercadoria }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imagem }} style={styles.itemImage} />
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>Nome: {item.nome}</Text>
        <Text style={styles.itemText}>Marca: {item.marca}</Text>
        <Text style={styles.itemText}>Preço: {item.preco}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <Link href="/Home" style={styles.navText}>Home</Link>
        <Link href="/Listagem" style={styles.navText}>Listagem</Link>
        <Link href="/Cadastro" style={styles.navText}>Cadastro</Link>
      </View>

      {/* Listagem de Mercadorias */}
      <Text style={styles.title}>Lista de Mercadorias</Text>
      <FlatList
        data={mercadorias}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Listagem;
