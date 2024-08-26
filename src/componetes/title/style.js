import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Image: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 40
    },
    bold: {
        color: "#1C1C1C",
        fontSize: 36,
        fontWeight: "bold"
    },
    normal: {
        color: "#1C1C1C",
        fontSize: 36,
    },
    text: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    TextSub: {
        fontWeight: "500",
        fontSize: 30,
        marginLeft: "10%",
        marginTop: "5%"

    },
    TextSubSub: {
        fontSize: 20,
        marginLeft: "10%",
        marginRight: "10%",
        textAlign: "justify"
    }
});

export default styles;