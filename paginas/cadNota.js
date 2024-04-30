import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

import firestore from "../Firebase";


export default function CadNotas({navigation}) {
  const [titulo, setTitulo] = useState(null);
  const [texto, setTexto] = useState(null);

  async function addNotas() {
    const docRef = await addDoc(collection(firestore, 'Notas'), {
      titulo: titulo,
      texto: texto,
    });
    setTitulo({titulo:''})
    setTexto({texto: ''})
  Alert.alert("Cadastro", "Registros cadastrados com sucesso")
navigation.navigate("Home")
  }

  return (
    <View style={estilo.container}>
      <View>
        <Text style={estilo.titulo}> Registre no Seu Bloco de Notas</Text>
      </View>
      <TextInput autoCapitalize = 'words' style={estilo.input} placeholder="Digite o Título" onChangeText={setTitulo} value={titulo}/>
      <TextInput style={estilo.input} placeholder="Digite o seu lindo dia" onChangeText={setTexto} value={texto}/>
      <TouchableOpacity
        style={estilo.btnenviar}
        onPress={() => {
          addNotas();
        }}>
        <Text style={estilo.btntxtenviar}> Enviar </Text>
      </TouchableOpacity>
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