import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width:"100%",
        height:"100%",
        bottom:0,
        alignItems: "center",
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:15,
        padding:10
    },
    input:{
        width:"85%",
        borderRadius:10,
        backgroundColor:"#4AAD65",
        height:40,
        marginLeft: "7%",
        marginTop: "2%",
        paddingLeft: 8

    },
    buttonClean:{
       borderRadius: 10,
       borderColor: "#4AAD65",
       borderWidth: 1,
       backgroundColor: "#4AAD65",
       width: "40%",
       justifyContent: "center",
       alignItems: "center"

    }, 

    buttonTwo: {
       borderRadius: 10,
       borderColor: "#4AAD65",
       borderWidth: 1,
       width: "39%",
       justifyContent: "center",
       alignItems: "center"
    },

    container:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 18

    },

    textButtonClean:{
        fontSize:18,
        color:"#000000",
        padding: 13,

    },
    textEsqueceuSenha:{
        textAlign: "right",
        paddingRight: 30,
        fontSize: 17,
        opacity: 0.5,
        textDecorationLine: "underline",
        marginTop: "3%"
    },
    textCadastro:{
        fontSize: 18,
        opacity: 0.5,

    },
    buttonCadastro:{
        marginTop: "5%",
        alignItems:"center",
        justifyContent:"center"
    },
    text: {
        marginLeft: "7%",
        marginTop:"2%",
    },

    containerImagem: {
        marginTop: "8%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    imagemLogin: {
        width: 60,
        height: 60
    }

    

});

export default styles;