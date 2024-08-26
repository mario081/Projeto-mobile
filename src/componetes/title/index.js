import React from "react";
import { View, Text, Image} from "react-native";

import styles from "./style";

export default function Title(){
    return(
        <View >
            <View style={styles.Image}>
                <Image 
                    source={require('../assets/teaceita.png')}/>
            </View>
            <View style={styles.text}>  
                <Text style={styles.normal}><Text style={styles.bold}>TEA</Text>ceita</Text>
            </View>
            <View>  
                <Text style={styles.TextSub}>Acesse</Text>
            </View>
            <View>  
                <Text style={styles.TextSubSub}>Com número de telefone ou nome de usuário e senha para entrar</Text>
            </View>
        </View>
    )
}

