import React from 'react';
import { View } from 'react-native';
import Main from '../componetes/main';
import Home from '../componetes/home'
import Title from '../componetes/title';
import CadastroScreen from '../componetes/cadastro';
import PsicologoScreen from '../componetes/cadastro/psico';
import EmpresaScreen from '../componetes/cadastro/Empresa';
import UsuarioScreen from '../componetes/cadastro/Usuario';
import { createStackNavigator } from '@react-navigation/stack';
import mabu from '../componetes/local-Mabu';
import blue from '../componetes/local-home';


const Stack = createStackNavigator();

function Login() {
    return (
        <View>
            <Title />
            <Main />
        </View>
    );
}

export default function StackRoutes() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cadastro"
                component={CadastroScreen}

            />
            <Stack.Screen 
                name="Psicologo" 
                component={PsicologoScreen} 
            />
            <Stack.Screen 
                name="Empresa" 
                component={EmpresaScreen} 
            />
            <Stack.Screen 
                name="Usuario" 
                component={UsuarioScreen} 
            />

            <Stack.Screen 
                name="Mabu Thermas" 
                component={mabu} 
                options={{ nameShown: false }}
            />

            <Stack.Screen 
                name="Blue Park"
                component={blue} 
                options={{ nameShown: false }}
            />

        </Stack.Navigator>

    )
}
