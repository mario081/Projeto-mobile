import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';

// Função externa para manipular eventos
function handleStarPress() {
    console.log("Ícone de estrela pressionado!");
}

export default function MabuThermas() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.titlestyleAlt}>Mabu Thermas Grand Resort</Text>
                        <SimpleLineIcons name="hourglass" size={20} color="white" style={styles.iconStyle} />
                    </View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.ImageStyle} source={require('../assets/local.png')} />
                        <View style={styles.overlayTextContainer}>
                            <Text style={styles.overlayText}>Aguardando verificação...</Text>
                        </View>
                    </View>
                    <View style={styles.infoStyle}>
                        <Text style={styles.titlestyle}>Mabu Thermas</Text>
                        <Text style={styles.categoryStyle}>
                            Mabu Thermas Grand Resort
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                        </Text>
                        <View style={styles.ratingContainer}>
                            <TouchableOpacity onPress={handleStarPress}>
                                <SimpleLineIcons name="star" size={20} color="#FFD700" />
                            </TouchableOpacity>
                            <Text style={styles.ratingText}>2.5 estrelas</Text>
                        </View>
                        <View style={styles.overlayTextContainerAlt}>
                            <View style={styles.profileContainer}>
                                <Text style={styles.profileName}>Local não foi verificado no momento...</Text>
                            </View>
                            <Text style={styles.overlayTextAlt}>
                                Aguardando Verificação...
                            </Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Já visitei!</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Adicionar comentário</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 10;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: "10%"
    },
    cardContainer: {
        width: deviceWidth - 25,
        backgroundColor: '#CCCCCC',
        borderRadius: radius,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
        paddingBottom: 20, // Adicionando padding para acomodar o espaço do overlay de texto
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Alinha os itens horizontalmente
        alignItems: 'center',
        paddingHorizontal: 20, // Espaçamento horizontal interno
        paddingTop: 10, // Espaçamento superior interno
    },
    imageContainer: {
        position: 'relative'
    },
    ImageStyle: {
        marginTop: "3%",
        height: 210,
        width: deviceWidth - 25,
        opacity: 0.9,

    },
    overlayTextContainer: {
        position: 'absolute',
        top: "10%",
        left: 18,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 5,
        padding: 6,
    },
    overlayText: {
        fontSize: 12,
        color: '#000',
    },
    titlestyleAlt: {
        flex: 1, // Permite que o texto cresça conforme necessário
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconStyle: {
        marginLeft: 5, // Adicionando espaço entre o ícone e o texto
    },
    titlestyle: {
        flex: 1, // Permite que o texto cresça conforme necessário
        marginTop: "3%",
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    categoryStyle: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: '200',
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    ratingText: {
        fontSize: 16,
        marginLeft: 10,
    },
    overlayTextContainerAlt: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        paddingBottom: 20,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    profileName: {
        fontSize: 16,
        marginLeft: 0,
    },
    profileIcon: {
        marginLeft: 5,
    },
    overlayTextAlt: {
        fontSize: 14,
        color: '#000',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#4AAD65',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 0,
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
    },
});

