import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

const PsicologoScreen = () => {
  const [nome, setNome] = useState('');
  const [crp, setCrp] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TEAceita Psicólogo</Text>
      <Text style={styles.text}>
        Olá caro Psicólogo! Por favor, preencha as informações a seguir
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
        <Text style={styles.label}>CRP</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCrp(text)}
          value={crp}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Especialidade</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEspecialidade(text)}
          value={especialidade}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTelefone(text)}
          value={telefone}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <Button title="Enviar" color="#4AAD65" onPress={() => console.log('Enviar dados do psicologo')} />
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

export default PsicologoScreen;
