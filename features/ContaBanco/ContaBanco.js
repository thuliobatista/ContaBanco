import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View,Picker,Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import { colors } from '../../utils/colors';
import {sizes} from '../../utils/sizes';
import MyButton from '../../components/button/MyButton';

  const ContaBanco = ({size,orange}) =>{

    
    //Nome e Idade
    const [nome, setNome] = useState("Digite seu Nome");
    const [idade, setIdade] = useState("Digite sua Idade");

    //Genero
    const [genero, setValue] = useState("");

    //Estudante
    const [entrada, setEntrada] = useState(false);
    const interruptor = () => setEntrada(previousState => !previousState);

    //Limite

    const[limite,setLimimite] = useState('0');

    
    const EnviarDados = () =>{

      useEffect(() => {

      if(nome == "Digite seu Nome" ||idade == "Digite sua Idade" ||genero == false || entrada ==false || limite == 0){

        alert('Digitite todos os campos')

      }else{

        alert('Nome: '+ nome + '/Idade:' + idade + '/Genero: ' + genero + '/limite: ' + limite + '/Estudante: ' + entrada );

      }

    });
  }

    const ResetarDados = ( ) =>{

        setNome("Digite seu nome " );
        setIdade("Digite sua Idade ");
        setValue("");
        setEntrada(false);
        setLimimite('0');
    }

 return(

      <View style={styles({}).container} >

        <View style={styles({}).box1}>
        <Text style={styles({ size }).text} >Cadastro do Banco</Text>
        </View>

        <View style={styles({}).box2}>
        <Text style={styles({ size }).text} >Nome:</Text>
          <TextInput
            style={ [styles({ orange }).textInput, {fontSize: 15}] }
            onChangeText={setNome}
            value={nome}
          />

          <Text style={styles({ size }).text} >Idade:</Text>
          <TextInput
            style={[styles({ orange }).textInput, {fontSize: 15}]}
            onChangeText={setIdade}
            value={idade}
          />
        </View>


        <View style={styles({}).box3}>
        <Text style={styles({ size }).text} >Genero:</Text>
          <Picker
            style={styles.Picker}
            value={genero}
            onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
          > 
            <Picker.Item label="Escolha seu Genero" value="Vasio" />
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Feminino" value="Feminino" />
            </Picker>
        </View>

        <View style={styles({}).box4}>
        <Text style={styles({ size }).text} >limite:{limite}</Text>
            < Slider 
              style = { { width : 400, height: 40} } 
              minimumValue = { 0 } 
              maximumValue = { 3000} 
              minimumTrackTintColor = "#2E2EFE" 
              maximumTrackTintColor = "#2E2EFE" 
              value={limite}
              onValueChange={(limite) => setLimimite(parseInt(limite))}
              
            />
        </View>

        <View style={styles({}).box5}>
        <Text style={styles({ size }).text} >Estudante:</Text>
        <Switch
              trackColor={{ false: colors.dark.red, true: colors.dark.green}}
              onValueChange={interruptor}
              value={entrada}
            />
            
        </View>

        <View style={styles({}).box6}>
        
              <MyButton
                
                texto="Abrir conta"
                onPress={EnviarDados}
                color={colors.basic.botao}
                size={sizes.font.medium}

              />
              <br/>

              <MyButton
              texto="Resetar"
              onPress={ResetarDados}
              color={colors.basic.botao}
              size={sizes.font.medium}
              
              /> 
        </View>
    </View>
    );

}

export default ContaBanco;

const styles = ({ size, orange }) => StyleSheet.create({ 

  container: {
    flex: 1,
    backgroundColor: colors.basic.clara,
  }, 

 
  box1: {
    backgroundColor: colors.basic.clara,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2:{
    backgroundColor: colors.basic.clara,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  box3:{
    backgroundColor: colors.basic.clara,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  box4:{
    backgroundColor: colors.basic.clara,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    
  },
  box5:{
    backgroundColor: colors.basic.clara,
    justifyContent: 'flex-start',
   alignItems: 'stretch',
  },
  box6:{
    backgroundColor: colors.basic.clara,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
   padding:4,
   margin:4,
  },

  text: {
    fontSize: size,
    fontWeight: '500',
    
  },
  textInput: {
    borderWidth: sizes.spacing.small,
    margin: sizes.spacing.medium,
    padding: sizes.spacing.medium,
    borderColor: orange,
  },
  
 

});
