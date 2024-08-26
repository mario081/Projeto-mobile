import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert, Button, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./style";

export default function Form() {
    const navigation = useNavigation();
    const [usuario, setUsuario] = useState(null)
    const [senha, setSenha] = useState(null)
    const [textButton, setTextButton] = useState("Acessar")
    const [textButtonTwo, setTextButtonTwo] = useState("Cadastrar")

    const createAlert = () => Alert.alert(
        "Oops!",
        "Verifique se o campo Usuário e Senha estão preenchidos."
    );

    function limpaCampos() {
        if (usuario == null || senha == null) {
            createAlert();
        } else {
            setUsuario(null);
            setSenha(null);
            navigation.navigate("Home");
        }
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.text}>Digite seu usuário:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setUsuario}
                    value={usuario}
                    placeholder="Número de telefone ou nome de usuário"
                    keyboardType="email-address"
                />
                <Text style={styles.text}>Digite sua senha:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setSenha}
                    value={senha}
                    placeholder="Senha"
                    keyboardType="numeric"
                    secureTextEntry={true}
                />


                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.buttonTwo}
                        onPress={() => navigation.navigate("Cadastro")}
                    >
                        <Text style={styles.textButtonClean}>{textButtonTwo}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonClean}
                        onPress={() => limpaCampos()
                        }
                    >
                        <Text style={styles.textButtonClean}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonCadastro}>
                    <Text style={styles.textCadastro}>------- Ou acesse com: --------</Text>
                </View>

                <View style={styles.containerImagem}>
                    <TouchableOpacity>
                        <Image style={styles.imagemLogin}
                            source={require('../assets/google.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={styles.imagemLogin}
                            source={require('../assets/facebook.png')} />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}