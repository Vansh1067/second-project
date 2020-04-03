import React from 'react';
import {View ,Text,StyleSheet} from 'react-native';

const header=(props)=>{
    return (
        <View style={style.header}>
            <Text style={style.headerTitle}>{props.title}</Text>
        </View>
    )
}

const style=StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        paddingTop:40,
        backgroundColor:'#f7287b',
        alignItems:'center',
        justifyContent:'center',
    },
    headerTitle:{
        color:'white',
        fontSize:18

    }
})

export default header