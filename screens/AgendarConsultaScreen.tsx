import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const AgendarConsultaScreen = ({ navigation }: any) => {
  const [especialidade, setEspecialidade] = useState('');
  const [data, setData] = useState('');

  const salvarConsulta = async () => {
    const novaConsulta = { especialidade, data };
    const armazenadas = await AsyncStorage.getItem('consultas');
    const consultas = armazenadas ? JSON.parse(armazenadas) : [];
    consultas.push(novaConsulta);
    await AsyncStorage.setItem('consultas', JSON.stringify(consultas));
    navigation.navigate('MinhasConsultas');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Especialidades</Text>
      <TextInput style={styles.input} value={especialidade} onChangeText={setEspecialidade} />
      <Text style={styles.label}>Data</Text>
      <TextInput style={styles.input} value={data} onChangeText={setData} />
      <Button title="Agendar" onPress={salvarConsulta} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, marginTop: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginTop: 5, borderRadius: 5 },
});

export default AgendarConsultaScreen;