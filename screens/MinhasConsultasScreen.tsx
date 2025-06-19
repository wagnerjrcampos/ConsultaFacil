import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const MinhasConsultasScreen = () => {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const carregarConsultas = async () => {
      const armazenadas = await AsyncStorage.getItem('consultas');
      if (armazenadas) {
        setConsultas(JSON.parse(armazenadas));
      }
    };
    carregarConsultas();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Consultas</Text>
      <FlatList
        data={consultas}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }: any) => (
          <View style={styles.card}>
            <Text>Especialidade: {item.especialidade}</Text>
            <Text>Data: {item.data}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, marginBottom: 10 },
  card: { padding: 15, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 10 },
});

export default MinhasConsultasScreen;
