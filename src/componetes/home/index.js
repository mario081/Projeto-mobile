import * as React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';

import styles from './style'

import menuHome from '../meuHome';
import perfilScreen from '../perfil';
import localScreen from '../local-home';
import BibliotecaScreen from '../Biblioteca';
import LinksScreen from '../Links';
import Title from '../title';
import Main from '../main';

const Drawer = createDrawerNavigator();

function Login() {
    return (
        <View>
            <Title />
            <Main />
        </View>
    );
}

function CustomDrawerContent(props) {
    const { navigation } = props;

    return (
        <View style={{marginTop: 55}}>  
            <DrawerItem
                label="Home"
                onPress={() => navigation.navigate('Home')}
                icon={({ color, size }) => <SimpleLineIcons name="home" size={24} color="black" />}
            />
            <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 8 }} />
            <DrawerItem
                label="Meu Perfil"
                onPress={() => navigation.navigate('Meu Perfil')}
                icon={({ color, size }) => <SimpleLineIcons name="user" size={24} color="black" />}
            />
            <DrawerItem
                label="Local Recente"
                onPress={() => navigation.navigate('Local Recente')}
                icon={({ color, size }) => <SimpleLineIcons name="location-pin" size={24} color="black" />}
            />
            <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 8 }} />
            <DrawerItem
                label="Mensagens"
                onPress={() => navigation.navigate('Mensagens')}
                icon={({ color, size }) => <SimpleLineIcons name="speech" size={24} color="black" />}
            />
            <DrawerItem
                label="Configurações"
                onPress={() => navigation.navigate('Configurações')}
                icon={({ color, size }) => <SimpleLineIcons name="settings" size={24} color="black" />}
            />
            <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 8 }} />
            <DrawerItem
                label="Sair"
                onPress={() => navigation.navigate('Deslogar')}
                icon={({ color, size }) => <SimpleLineIcons name="logout" size={24} color="black" />}
            />
        </View>
    );
}

export default function Home() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen
                name="Home"
                component={menuHome}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <SimpleLineIcons name="home" size={24} color="black" />
                    ),
                    drawerLabel: "Home"
                }}
            />
            <Drawer.Screen
                name="Meu Perfil"
                component={perfilScreen}
                options={{
                    drawerIcon: () => <SimpleLineIcons name="user" size={24} color="black" />,
                    drawerLabel: "Meu Perfil"
                }}
            />
            <Drawer.Screen
                name="Local Recente"
                component={localScreen}
                options={{
                    drawerIcon: () => <SimpleLineIcons name="location-pin" size={24} color="black" />,
                    drawerLabel: "Local Recente"
                }}
            />
            <Drawer.Screen
                name="Mensagens"
                component={BibliotecaScreen}
                options={{
                    drawerIcon: () => <SimpleLineIcons name="speech" size={24} color="black" />,
                    drawerLabel: "Mensagens"
                }}
            />
            <Drawer.Screen
                name="Configurações"
                component={LinksScreen}
                options={{
                    drawerIcon: () => <SimpleLineIcons name="settings" size={24} color="black" />,
                    drawerLabel: "Configurações"
                }}
            />
            <Drawer.Screen
                name="Deslogar"
                component={Login}
                options={{
                    headerShown: false,
                    drawerIcon: () => <SimpleLineIcons name="logout" size={24} color="black" />,
                    drawerLabel: "Sair"
                }}
            />
        </Drawer.Navigator>
    );
}
