import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* Redux */
import {Provider} from 'react-redux';
import store from './src/store';

/* Components */
import HomeScreen from './src/Components/HomeScreen';
import AddTransaction from './src/Components/AddTransaction';
import Settings from './src/Components/Settings';


const Stack = createStackNavigator();

function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} options={{
                        title: 'Tšekihoidla',
                    }} />
                    <Stack.Screen name="Add" component={AddTransaction} options={{
                        title: 'Lisa väljaminek',
                    }} />
                    <Stack.Screen name="Settings" component={Settings} options={{
                        title: 'Sätted',
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;