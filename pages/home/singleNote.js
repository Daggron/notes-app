import React from 'react'
import {View , Text} from 'react-native'
import { Card, Container, CardItem, Body, Content } from 'native-base'

export default function SingleNote(props) {
    return (
       <Container>
           <Content>
                <Card style={{backgroundColor : "#ee8572"}}>
                    <CardItem style={{backgroundColor : "#ee8572" , borderRadius : 15}}>
                        <Body>
                            <Text style={{color : "#f5f0e3" , fontSize : 20}}>
                                {props.navigation.getParam('note').title}
                            </Text>
                            <Text style={{color : "#f5f0e3" , fontSize : 20 , marginTop : 15}}>
                                {props.navigation.getParam('note').description}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
           </Content>
       </Container>
    )
}
