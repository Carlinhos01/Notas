import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList,TouchableOpacity,Alert} from 'react-native';
//import Firebase from '../Firebase';
import firestore from '../Firebase';

import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Home({navigation}){

const [Notas, setDiario] = useState([]);

function deleteNotas(id){
  
  Firebase.collection("Notas").doc(id).delete();

  Alert.alert("A Nota foi Deletada.");
}

// useEffect(()=>{
//   Firebase.collection("Notas").onSnapshot((query)=>{
//     const lista=[];
//     query.forEach((doc) =>{
//       lista.push({...doc.data(),id: doc.id});
//     });
//   setDiario(lista);
//   });
// },[]);

useEffect(() => {
  try {
    const unsubscribe = firestore.collection("Notas").onSnapshot((querySnapshot) => {
      const lista = [];
      querySnapshot.forEach((doc) => {
        lista.push({ ...doc.data(), id: doc.id });
      });
      setDiario(lista);
    });

    return () => {
      unsubscribe();
    };
  } catch (error) {
    console.error("Erro ao consultar a coleção:", error);
  }
}, []);


  return(
<View style={estilo.container}>
  <View >
    <Text style={estilo.titulo}> Meu Bloco de Notas </Text>
  </View>

  <FlatList 
  data={Notas}
  renderItem={({item})=>{
   return(
     <View style={estilo.diarios}>

<TouchableOpacity onPress={()=>navigation.navigate("altNota",{
  id: item.id,
  titulo: item.titulo,
  texto: item.texto,
})}>
    <View style={estilo.itens}>
<Text style={estilo.titulodiario}> Titulo: <Text style={estilo.textodiario}>{item.titulo} </Text></Text>
<Text style={estilo.titulodiario}> Texto: <Text style={estilo.textodiario}>{item.texto} </Text></Text>

    </View>
</TouchableOpacity>

    <View style={estilo.botaodeletar}>
<TouchableOpacity onPress={()=>{deleteNotas(item.id)}}>
 <MaterialCommunityIcons name="delete-empty" size={70} color="red" />
</TouchableOpacity>

    </View>
    </View>
     );
  }}
  />
<TouchableOpacity style={estilo.addbutton} onPress={()=> navigation.navigate("cadNota")}>
  <MaterialCommunityIcons name="plus-circle-outline" size={70} color="green" />
</TouchableOpacity>
</View>
   
  );
}

const estilo = StyleSheet.create({
container:{
  flex:1,
  justifyContent: 'center',
  alignItems: 'center'
},
titulo:{
  marginTop: 50,
  fontSize:30,
},
itens:{
  marginHorizontal: 10,
  marginVertical: 10,
  padding: 10,
 
},
titulodiario:{
fontSize: 13,
color:'#fff'
},
textodiario:{
fontSize: 15,
fontWeight: "bold",
},
diarios:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: 10,
  marginVertical: 10,
  padding: 10,
  backgroundColor: '#0000CD',
  borderRadius:10
},
botaodeletar:{
  textAlignVertical: 'center',
  marginVertical: 10,

},
addbutton:{
backgroundColor: '#ffffff',
borderRadius: 50,
position: 'absolute',
left: 20,
bottom: 40,
justifyContent: "center",
alignItems: "center"
}
});