import React from "react"
import { View, Text } from "react-native"
import styles from "./style" // Importando o arquivo de estilo

export default function Title(){
    return(
        <View style={styles.BoxTitle}>
            <Text style={styles.textTitle}>MEDIDOR DE IMC</Text>
        </View>
    );
}
