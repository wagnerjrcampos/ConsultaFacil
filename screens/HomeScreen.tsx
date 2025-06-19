import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha uma opção:</Text>
      <Button title="Agendar Consulta" onPress={() => navigation.navigate('AgendarConsulta')} />
      <Button title="Minhas Consultas" onPress={() => navigation.navigate('MinhasConsultas')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
});

export default HomeScreen;