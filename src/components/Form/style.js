import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    FormContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "white",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
 },
 Form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
 },
    FormLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20,
 },
    Input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 60,
        margin: 12,
        paddingLeft: 10,
    },
ButtonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#FF0033",
    padding: 14,
    marginLeft: 12,
    marginTop: 30,
    marginBottom: 10,
}
,
    TextButtonCalculator: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
 },
    
});

export default styles;