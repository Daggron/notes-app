import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomePage from './pages/HomePage';
import SecondPage from './pages/secondPage';
import { createAppContainer } from 'react-navigation';
import { Footer, FooterTab, Button , Icon } from 'native-base';
import {Text, StyleSheet} from 'react-native';

const AppNavigator = createBottomTabNavigator({
    Home : {screen : HomePage },
    Second : {screen : SecondPage,
    navigationOptions : {
        title : "Add Note"
    }}
},{
    initialRouteName : "Home",
    tabBarComponent : props=>{
        return(
            <Footer >
                <FooterTab style={styles.container} >
                    
                    <Button style={styles.Button} onPress={()=>props.navigation.navigate('Home')}>
                       <Icon name="home"/>
                        <Text style={{color : '#f5f0e3'}} >Home</Text>
                    </Button>
                    <Button style={styles.Button} onPress={()=>props.navigation.navigate('Second', {Hello:"this"})}>
                        <Icon name="add" />
                            <Text style={{color : '#f5f0e3'}}>Add Note</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    },
    tabBarOptions : {
        activeBackgroundColor : "#e6891d"
    }
})

const styles = StyleSheet.create({
    container : {
        backgroundColor : "#ff9d76",
        color : "#f5f0e3",
        elevation : 10
    },
    Button:{
        borderColor : "#bbb",
        borderStyle : "solid",
        borderRightWidth : 1
    }
})

export default createAppContainer(AppNavigator);