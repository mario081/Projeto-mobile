// import { AntDesign, SimpleLineIcons, Octicons, Ionicons } from '@expo/vector-icons';

// import CursoScreen from '../componetes/Curso';
// import CarteiraDigitalScreen from '../componetes/Carteira-digital';
// import SolicitacoesScreen from '../componetes/Solicitacoes';
// import BibliotecaScreen from '../componetes/Biblioteca';
// import LinksScreen from '../componetes/Links';
// import Home from '../componetes/home';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Title from '../componetes/title';
// import Main from '../componetes/main';
// import { StyleSheet, View } from 'react-native';

// const Drawer = createDrawerNavigator();

// function Login() {
//     return (
//         <View>
//             <Title />
//             <Main />
//         </View>
//     );
// }

// export default function DrawerRoutes() {
//     return (
//         <Drawer.Navigator>
//             <Drawer.Screen
//                 name="Home"
//                 component={Home}
//                 options={{ 
//                     drawerIcon: () => <AntDesign name="swap" size={24} color="black" />,
//                     drawerLabel: "Inicio"
//                 }}
//             />
//             <Drawer.Screen
//                 name="Meu Curso"
//                 component={CursoScreen}
//                 options={{
//                     drawerIcon: () => <AntDesign name="swap" size={24} color="black" />,
//                     drawerLabel: "Meu Curso"
//                 }}
//             />
//             <Drawer.Screen
//                 name="Carteira digital"
//                 component={CarteiraDigitalScreen}
//                 options={{
//                     drawerIcon: () => <SimpleLineIcons name="wallet" size={24} color="black" />,
//                     drawerLabel: "Carteira Digital"
//                 }}
//             />
//             <Drawer.Screen
//                 name="Solicitações"
//                 component={SolicitacoesScreen}
//                 options={{
//                     drawerIcon: () => <Octicons name="list-ordered" size={24} color="black" />,
//                     drawerLabel: "Solicitações"
//                 }}
//             />
//             <Drawer.Screen
//                 name="Biblioteca"
//                 component={BibliotecaScreen}
//                 options={{
//                     drawerIcon: () => <Ionicons name="library-outline" size={24} color="black" />,
//                     drawerLabel: "Biblioteca"
//                 }}
//             />
//             <Drawer.Screen
//                 name="Links Úteis"
//                 component={LinksScreen}
//                 options={{
//                     drawerIcon: () => <AntDesign name="link" size={24} color="black" />,
//                     drawerLabel: "Links Uteis"
//                 }}
//             />
            
//             <Drawer.Screen
//                 name="Deslogar"
//                 component={Login}
//                 options={{ headerShown: false,
//                     drawerIcon: () => <AntDesign name="link" size={24} color="black" />,
//                     drawerLabel: "Sair"
//                 }}
//             />
//         </Drawer.Navigator>
//     )
// }
