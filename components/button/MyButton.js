import React from 'react';
import { StyleSheet,Text,TouchableOpacity } from 'react-native';

const MyButton = ({ texto, color,onPress,size }) => {
    
    return (
        <TouchableOpacity
           style={styles({color}).botao}
           onPress={onPress}
           underlayColor={color}
        >
        <Text style={styles({size}).botao}>
            {texto}
        </Text>
        </TouchableOpacity>
    );
}

export default MyButton;

const styles =({color,size}) => StyleSheet.create({

    container:{
        flex:1,
        paddingTop:50,
    },

    botao:{
        height:35,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:color,
        borderRadius:150,

    },
});