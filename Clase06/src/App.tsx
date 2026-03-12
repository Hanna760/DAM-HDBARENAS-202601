import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { stylesApp } from "./App.style";

type Operation = "+" | "-" | null;

export default function App() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [operation, setOperation] = useState<Operation>(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumberPress = (number: string) => {
    if (newNumber) {
      setDisplay(number);
      setNewNumber(false);
    } else {
      setDisplay(display === "0" ? number : display + number);
    }
  };

  const handleOperation = (op: Operation) => {
    const currentNumber = parseFloat(display);
    
    if (firstNumber === null) {
      setFirstNumber(currentNumber);
    } else if (operation) {
      const result =
        operation === "+"
          ? firstNumber + currentNumber
          : firstNumber - currentNumber;
      setDisplay(result.toString());
      setFirstNumber(result);
    }
    
    setOperation(op);
    setNewNumber(true);
  };

  const handleEquals = () => {
    if (firstNumber !== null && operation) {
      const currentNumber = parseFloat(display);
      const result =
        operation === "+"
          ? firstNumber + currentNumber
          : firstNumber - currentNumber;
      setDisplay(result.toString());
      setFirstNumber(null);
      setOperation(null);
      setNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setFirstNumber(null);
    setOperation(null);
    setNewNumber(true);
  };

  const Button = ({ label, onPress, style }: any) => (
    <Pressable
      style={[stylesApp.button, style]}
      onPress={onPress}
    >
      <Text style={stylesApp.buttonText}>{label}</Text>
    </Pressable>
  );

  return (
    <View style={stylesApp.container}>
      <View style={stylesApp.display}>
        <Text style={stylesApp.displayText}>{display}</Text>
      </View>

      <View style={stylesApp.buttonsContainer}>
        <View style={stylesApp.row}>
          <Button
            label="C"
            onPress={handleClear}
            style={stylesApp.clearButton}
          />
          <Button
            label="+"
            onPress={() => handleOperation("+")}
            style={stylesApp.operationButton}
          />
          <Button
            label="-"
            onPress={() => handleOperation("-")}
            style={stylesApp.operationButton}
          />
        </View>

        <View style={stylesApp.row}>
          <Button label="1" onPress={() => handleNumberPress("1")} />
          <Button label="2" onPress={() => handleNumberPress("2")} />
          <Button label="3" onPress={() => handleNumberPress("3")} />
        </View>

        <View style={stylesApp.row}>
          <Button label="4" onPress={() => handleNumberPress("4")} />
          <Button label="5" onPress={() => handleNumberPress("5")} />
          <Button label="6" onPress={() => handleNumberPress("6")} />
        </View>

        <View style={stylesApp.row}>
          <Button label="7" onPress={() => handleNumberPress("7")} />
          <Button label="8" onPress={() => handleNumberPress("8")} />
          <Button label="9" onPress={() => handleNumberPress("9")} />
        </View>

        <View style={stylesApp.row}>
          <Button label="0" onPress={() => handleNumberPress("0")} />
          <Button
            label="="
            onPress={handleEquals}
            style={stylesApp.equalsButton}
          />
        </View>
      </View>
    </View>
  );
}
