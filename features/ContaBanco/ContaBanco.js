import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View,Picker,Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import { colors } from '../../utils/colors';
import {sizes} from '../../utils/sizes';
import MyButton from '../../components/button/MyButton';



const ContaBanco = ({size,orange}) =>{

  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);


  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');


  const [value, setValue] = useState("");


  const [entrada, setEntrada] = useState(false);
  const interruptor = () => setEntrada(previousState => !previousState);


  const add = ( ) =>{

    console.log("teste");

  }

 return(

      <View style={styles({}).container} >
          
      <View style={styles({}).box1}>

          <Text style={styles({ size }).text} >Cadastro do Banco</Text>
          
          <Text style={styles({ size }).text} >Nome:</Text>
          <TextInput
            style={ [styles({ orange }).textInput, {fontSize: 10}] }
            onChangeText={() => console.log("Digitei")}
            placeholder="Digite seu nome"
          />
          <Text style={styles({ size }).text} >Idade:</Text>
          <TextInput
            style={[styles({ orange }).textInput, {fontSize: 15}]}
            onChangeText={() => console.log("Digitei")}
            placeholder="Digite sua idade"
          />

          <Text style={styles({ size }).text} >Genero:</Text>
          <Picker
            style={styles.Picker}
            value={value}
            onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
          >
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Feminino" value="Feminino" />
            </Picker>

            <Text style={styles({ size }).text} >limite:</Text>
            < Slider 
              style = { { width : 400} } 
              minimumValue = { 0 } 
              maximumValue = { 3000 } 
              minimumTrackTintColor = "#2E2EFE" 
              maximumTrackTintColor = "#2E2EFE" 
              
            />

            <Text style={styles({ size }).text} >Estudante:</Text>
            <Switch
              trackColor={{ false: colors.dark.red, true: colors.dark.green}}
              onValueChange={interruptor}
              value={entrada}
            />

              <MyButton
                texto="Abrir conta"
                onPress={()=>add}
                color={colors.basic.red}
                size={sizes.medium}

              />
              <MyButton
              texto="Abrir conta"
              onPress={add}
              color={colors.basic.red}
              size={sizes.medium}

                
              /> 

          
            
          
      </View>

      <View style={styles({}).box2}>         
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

  text: {
    fontSize: size,
    fontWeight: '500',
  },
  box1: {
    flex: 2,
    backgroundColor: colors.dark.clara,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  box2:{
    flex: 2,
    backgroundColor: colors.dark.clara,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: sizes.spacing.small,
    margin: sizes.spacing.medium,
    padding: sizes.spacing.medium,
    borderColor: orange,
  },
  
 

});
