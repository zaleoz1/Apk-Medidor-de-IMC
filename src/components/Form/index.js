import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from "react-native";
import ResultImc from "./ResultImc/";
import styles from "./style"; // Importando o arquivo de estilo

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    const weightNum = parseFloat(weight.replace(",", ".").replace(/[^0-9.]/g, ""));
    const heightNum = parseFloat(height.replace(",", ".").replace(/[^0-9.]/g, ""));

    if (!isNaN(weightNum) && !isNaN(heightNum) && heightNum > 0) {
      const imcValue = (weightNum / (heightNum * heightNum)).toFixed(2);
      setImc(imcValue);
    } else {
      setImc(null);
      setMessageImc("Entrada inválida. Use números válidos.");
    }
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual:");
      setTextButton("Calcular Novamente");
      Keyboard.dismiss(); // Esconde o teclado ao calcular
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("preencha o peso e altura");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.FormContext}>
        <View style={styles.Form}>
          <Text style={styles.FormLabel}>Altura</Text>
          <TextInput
            style={styles.Input}
            onChangeText={setHeight}
            value={height}
            placeholder="Digite sua altura"
            keyboardType="numeric"
          />
          <Text style={styles.FormLabel}>Peso</Text>
          <TextInput
            style={styles.Input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Digite seu peso"
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.ButtonCalculator}
            activeOpacity={0.7}
            onPress={validationImc}
          >
            <Text style={styles.TextButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
        <ResultImc mensageresultImc={messageImc} resultImc={imc} />
      </View>
    </TouchableWithoutFeedback>
  );
}
