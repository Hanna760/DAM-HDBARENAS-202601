import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('');

  const handleAdd = () => {
    if (num1 && num2) {
      const sum = parseFloat(num1) + parseFloat(num2);
      setResult(sum.toString());
      setOperation('suma');
    }
  };

  const handleSubtract = () => {
    if (num1 && num2) {
      const diff = parseFloat(num1) - parseFloat(num2);
      setResult(diff.toString());
      setOperation('resta');
    }
  };

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult('');
    setOperation('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número 1</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa el primer número"
          keyboardType="decimal-pad"
          value={num1}
          onChangeText={setNum1}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número 2</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa el segundo número"
          keyboardType="decimal-pad"
          value={num2}
          onChangeText={setNum2}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <Text style={styles.buttonText}>Sumar +</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSubtract} onPress={handleSubtract}>
          <Text style={styles.buttonText}>Restar -</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonClear} onPress={handleClear}>
        <Text style={styles.buttonText}>Limpiar</Text>
      </TouchableOpacity>

      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Resultado ({operation}): {result}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#555',
  },
  input: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    gap: 10,
  },
  buttonAdd: {
    flex: 1,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonSubtract: {
    flex: 1,
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonClear: {
    backgroundColor: '#FF9800',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    backgroundColor: '#2196F3',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Calculator;
