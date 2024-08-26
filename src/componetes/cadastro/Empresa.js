import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

const EmpresaScreen = () => {
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TEAceita Empresa</Text>
      <Text style={styles.text}>
        Olá caro Empresário! Por favor, preencha as informações a seguir
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome da Empresa</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNomeEmpresa(text)}
          value={nomeEmpresa}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Endereço</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEndereco(text)}
          value={endereco}
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
      <View style={styles.inputContainer}>
        <Text style={styles.label}>CNPJ</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCnpj(text)}
          value={cnpj}
        />
      </View>
      <Button title="Enviar" color="#4AAD65" onPress={() => console.log('Enviar dados da Empresa')} />
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

export default EmpresaScreen;
