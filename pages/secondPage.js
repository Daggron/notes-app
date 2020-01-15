import React from 'react'
import { Keyboard, StyleSheet, Alert} from 'react-native';
import { TaskContext } from '../taskConntextProvider';
import { Input, Container , Header , Item, Content, Textarea , Form , Button, Left, Body, Title, Right, Icon } from 'native-base';
import {Text , Image} from 'react-native';
import Images from './images.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Realm from 'realm';

export default function SecondPage(props) {

    const [tasks , setTasks ] = React.useContext(TaskContext);
    const [title , setTitle ] = React.useState("");
    const [description , setDesc] = React.useState("");

   

    const handleTitleCHange = (e) =>{
        setTitle(e);
    }   

    const handleDesc = e =>{
        setDesc(e);
    }

    const handleSubmit = async ()=>{
        Keyboard.dismiss();

        const notes = {
            name : 'note_details',
            properties : {
                title : 'string',
                description : 'string',
                notes_id : 'int'
            }
        }
    

       Realm.open({schema : [notes]})
       .then(realm=>{

        let id = realm.objects('note_details').sorted('notes_id', true).length > 0
        ? realm.objects('note_details').sorted('notes_id', true)[0]
            .notes_id + 1
        : 1;

           realm.write(()=>{
               realm.create('note_details',{
                   title : title,
                   description : description,
                   notes_id : id
               })
               Alert.alert('Success','Data added successfully',[{
                   text : "OK"
               }],{cancelable : false})
           })

           const data = realm.objects("note_details");
           setTasks(data);
       })
        
    }


    return (
            <Container style={style.Container}>


                <Header style={{backgroundColor : '#ff9d76' }} >
                    <Left>
                       <TouchableOpacity >
                           <Text style={{fontSize : 20 , color :"#f5f0e3"}} onPress={()=>props.navigation.navigate('Home')}>
                               &lt;-
                           </Text>
                       </TouchableOpacity>
                    </Left>
                    <Body style={{marginLeft : 0}}>
                        <Title style={{color : "#f5f0e3" , marginLeft : -30}} >Add Note</Title>
                    </Body>
                    <Right />
                </Header>
                    <Content>

                        <Image source={Images} style={{flex : 1 , alignSelf : "center" , alignContent : "center" , alignContent : "center"  , height : 100 , width : 100 , marginTop : 20 }}/>

                        <Text style={{flex : 1 , textAlign : "center" , fontSize : 30, marginTop : 10}}>
                            Add Note
                        </Text>

                        
                        <Item rounded style={{marginTop : 15 }}>

                            
                        <Input placeholder="Enter Title here" returnKeyType="next" onChangeText={handleTitleCHange}/>
                        </Item>
                       
                            <Content padder>
                                <Form>
                                    <Textarea rowSpan={7} bordered placeholder="Enter Description Here" returnKeyType="done" onChangeText={handleDesc} onSubmitEditing={handleSubmit}/>
                                </Form>
                            </Content>
                        <Button style={{backgroundColor : "#ff9d76"}} onPress={handleSubmit} style={{marginTop : 10}}>
                            <Text style={{ flex : 1 , color: "white" , textAlign : "center"}}> Add Note </Text>
                        </Button>
                        
                    </Content>
            </Container>
    )
}

const style = StyleSheet.create({
    Container : {
        flex : 1,
        justifyContent : "center",
    }
})


