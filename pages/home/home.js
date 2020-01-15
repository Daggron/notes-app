import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Notes from './notes'
import { createAppContainer } from 'react-navigation';
import SingleNote from './singleNote';

const HomeNavigator = createStackNavigator({
    notes : {
        screen : Notes,
        navigationOptions: {
            title : "Notes",
            headerTintColor : "#f5f0e3",
            headerStyle :{
                backgroundColor : "#ff9d76"
            }
        }
    },
    singleNote : {
        screen : SingleNote,
        navigationOptions : {
            title : "Description",
            headerTintColor : "#f5f0e3",
            headerStyle :{
                backgroundColor : "#ff9d76"
            }
        }
    }
},{
    initialRouteName : "notes",
})

export default createAppContainer(HomeNavigator);