import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function ResultImc(props) {
    return (
        <View style={styles.ResultImc}>
           <Text style={styles.Information}>{props.mensageresultImc}</Text>
            <Text style={styles.ResultImcNumber}>{props.resultImc}</Text>
        </View>
    );
}
