import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import cadNota from './cadNota';
import altNota from './altNota';

const Stack = createStackNavigator();

export default function Rotas(){
    return(
        <NavigationContainer>
            <Stack.Navigator initinalRouteName="Home">
                <Stack.Screen 
                    name="Home"
                    component={Home}
                    options={{headerTintColor: '#9ac234'}}
                />

                <Stack.Screen 
                    name="Criar Nota"
                    component={cadNota}
                    options={{headerTintColor: '#9ac234', title:'Criar Nota'}}
                />

                <Stack.Screen 
                    name="Alterar Nota"
                    component={altNota}
                    options={{headerTintColor: '#9ac234', title:'Criar Nota'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}