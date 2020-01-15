import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {TaskContext} from '../../taskConntextProvider';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {Icon, Container, Card, Content} from 'native-base';
import Realm from 'realm';

export default function Notes(props) {
  const [tasks, setTasks] = React.useContext(TaskContext);

  React.useEffect(()=>{
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
      const notes = realm.objects('note_details');
      setTasks(notes);
      console.log(notes);
    })
  },[])

  const removeData = e => {
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
      
      realm.write(()=>{
       let del = realm.objects('note_details').filtered('notes_id == '+e.notes_id);
        realm.delete(del);
      })

      const no = realm.objects('note_details');
      setTasks(no);
    })
  };

  if (tasks.length === 0) {
    return (
      <View style={style.flex}>
        <Text>Add Some Items to the List</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        keyExtractor={item => item.notes_id}
        data={tasks}
        renderItem={({item}) => (
          <TouchableOpacity style={style.list}>
            <Text
              style={{fontSize: 20, color: '#f5f0e3'}}
              onPress={() => props.navigation.navigate('singleNote' , {note : item})}
            >
              {item.title}
            </Text>
            <Icon
              onPress={() => props.navigation.navigate('singleNote' , {note : item})}
              name="star"
              style={{color: "#f7d695" }}
            />
            <Icon name="trash" onPress={()=>removeData(item)}/>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  list: {
    flex: 1,
    padding: 15,
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom : 10,
    backgroundColor: '#ee8572',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    flexDirection: 'row',
    fontSize: 40,
    borderRadius: 10,
    elevation: 5,
  },
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
