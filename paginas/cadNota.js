import React, { useState } from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import { collection, addDoc } from "firebase/firestore";
import {firestore} from "../Firebase";


export default function CadNotas({navigation}) {
  const [titulo, setTitulo] = useState(null);
  const [texto, setTexto] = useState(null);

  async function addNotas() {
    try{
    const docRef = await addDoc(collection(firestore,"Notas"), {
      titulo: titulo,
      texto: texto
    });
    console.log("Cadastrado com ID: ", docRef.id);
     Alert.alert("Nota Criada com Sucesso")
     navigation.navigate("Home");
  }catch (error){
    console.error("Erro ao cadastrar: ", error);
    Alert.alert("Erro", "Erro ao cadastrar . Por favor, tente novamente.");
  }
  Alert.alert("Cadastro", "Registros cadastrados com sucesso")
   navigation.navigate("Home")
  }

  return (
    <View style={estilo.container}>
      
      <View style={estilo.caixa}>
      <TextInput autoCapitalize = 'words' style={estilo.input} placeholder="Título:" onChangeText={setTitulo} value={titulo}/>
      <TextInput style={estilo.input} placeholder="Nota:" onChangeText={setTexto} value={texto}/>
      </View>

      <View style={estilo.botao}>
      <TouchableOpacity
        style={estilo.btnenviar}
        onPress={() => {
          addNotas();
        }}>
        <Text style={estilo.btntxtenviar}> Enviar </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#11492e',
  },
  input: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#fffaf4',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15,
    borderRadius: 100,
    width: 200,
  },
  caixa:{
    backgroundColor: '#371513',
    borderRadius: 10,
    height: 250,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnenviar: {
    marginTop: 20,
    backgroundColor: '#371513',
    borderRadius: 10,
    padding:5,
  },
  btntxtenviar: {
    fontSize: 25,
  },
  titulo: {
    marginVertical: 40,
    fontSize: 25,
    textAlign: 'center',
  },
});