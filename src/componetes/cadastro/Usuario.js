import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

const UsuarioScreen = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TEAceita Usuário</Text>
      <Text style={styles.text}>
        Olá caro Usuário! Por favor, preencha as informações a seguir
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNome(text)}
          value={nome}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sobrenome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSobrenome(text)}
          value={sobrenome}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Seu gênero</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setGenero(text)}
          value={genero}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sua data de nascimento (dd/mm/aa)</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setDataNascimento(text)}
          value={dataNascimento}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>CPF</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCpf(text)}
          value={cpf}
        />
      </View>
      <Button title="Enviar" color="#4AAD65" onPress={() => console.log('Enviar dados Úsuario')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'left',
    width: '80%',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#4AAD65',
    borderRadius: 10,
  },
});

export default UsuarioScreen;
