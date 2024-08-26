import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const options = [
  'Psicologo',
  'Empresa',
  'Úsuario',
  
];

const CreateAccountScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false); // Close dropdown after selecting an option
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleContinuePress = () => {
    if (selectedOption === 'Psicologo') {
      navigation.navigate('Psicologo');
    } else if (selectedOption === 'Empresa') {
      navigation.navigate('Empresa');
    } else if (selectedOption === 'Úsuario') {
      navigation.navigate('Usuario');
    } else if (selectedOption === 'Outro') {
      navigation.navigate('Outro');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar conta TEAceita</Text>
      <Text style={styles.description}>Crie um usuário que encaixa mais com o seu perfil</Text>
      <View style={styles.dropdown}>
        <Text style={styles.dropdownLabel}>Eu sou um...</Text>
        <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
          <Text style={styles.dropdownButtonText}>
            {selectedOption ? selectedOption : 'Selecione uma opção...'}
          </Text>
          <View style={styles.arrowDown} />
        </TouchableOpacity>
        {isDropdownOpen && (
          <ScrollView style={styles.dropdownOptions}>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.dropdownOption}
                onPress={() => handleOptionPress(option)}
              >
                <Text style={styles.dropdownOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
      {selectedOption && (
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinuePress}
        >
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  dropdownLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  dropdownButtonText: {
    fontSize: 16,
  },
  arrowDown: {
    width: 10,
    height: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderLeftColor: 'transparent',
    borderTopColor: '#000',
    transform: [{ rotate: '45deg' }],
  },
  dropdownOptions: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    maxHeight: 150, // Limitar a altura máxima do dropdown
  },
  dropdownOption: {
    padding: 10,
  },
  dropdownOptionText: {
    fontSize: 16,
  },
  continueButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#4AAD65',
    borderRadius: 5,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CreateAccountScreen;