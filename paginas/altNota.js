import React,{useState} from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native';
import Firebase from '../Firebase';

export default function AlterarDiario({navigation,route}){

const id = route.params.id;


const [titulo, setTitulo] = useState(route.params.titulo);
const [texto, setTexto] = useState(route.params.texto);


function alterarDiario(id,titulo,texto,data,local){
  Firebase.collection("diario").doc(id).update({
    titulo: titulo,
    texto: texto,

  })
  Alert.alert("Aviso", "Diário Alterado com sucesso.")
  navigation.navigate("Home")
}

  return(
<View style={estilo.container}>
<View>
<Text style={estilo.titulo}> Alterar dados do Diario </Text>
</View>
<View>
<TextInput autoCapitalize = 'words' style={estilo.input} placeholder="Digite o Título" onChangeText={setTitulo} value={titulo}/>
      <TextInput style={estilo.input} placeholder="Digite o seu dia" onChangeText={setTexto} value={texto}/>
      <TouchableOpacity
        style={estilo.btnenviar}
        onPress={() => {
          alterarDiario(id,titulo,texto);
        }}>
        <Text style={estilo.btntxtenviar}> Alterar </Text>
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
  },
  input: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#9ac234',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15,
    borderRadius: 10,
  },
  btnenviar: {
    marginTop: 20,
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