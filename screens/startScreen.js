import React,{useState} from 'react';
import {View ,Text,StyleSheet, TextInput, Button,TouchableWithoutFeedback,Keyboard,Alert} from 'react-native';
import Card from '../components/card';
const StartScreen=(props)=>{
    const [enteredValue,setEnteredValue]=useState('');
    const [confirmed,setConfirmed]=useState(false);
    const [inputValue,setInputValued] =useState('');
    
    const setValue = inputValue=>{
        setEnteredValue(inputValue.replace(/[^0-9]/g,''));
    }
    const reset = ()=>{
        setEnteredValue('');
        setConfirmed(false);
    }
  
    const confirmedHandler=(value)=>{
        const chooseValue=parseInt(enteredValue);
        
        if(isNaN(chooseValue) || chooseValue <=0 || chooseValue >99){
            Alert.alert('Invalid Input!','Enter Number b/w 1 to 99',[{text:'okay',style:'destructive',onPress:reset}])
            return ;
        }
        setConfirmed(true);
        setInputValued(chooseValue);
        setEnteredValue('');
    }
   let confirmeOutputValue;
   if(confirmed){
   confirmeOutputValue=<Card>
                            <View >
                                <Text style={style.heading}>Choosen Number :</Text>
                            </View>
                            <View>
                                <Text style={style.number}>{inputValue}</Text>
                            </View>
                        </Card>
   }
    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>     
               <View style={style.screen}>
            <Text style={style.title}>Start A New Game</Text>
            <Card style={style.inputCont}>
                   
                <Text style={style.inputtitle}>Select a number</Text>
                <TextInput style={style.inputBox} keyboardType='number-pad' onChangeText={setValue} value={enteredValue} maxLength={2}></TextInput>
                <View style={style.button}>
                    <Button color="red"title="Reset" onPress={reset}></Button>
                    <Button color="green"title="Confirm" onPress={confirmedHandler}></Button>
                </View>
                </Card>

           {confirmeOutputValue}
        </View>
        </TouchableWithoutFeedback>

    )
}

const style=StyleSheet.create({
    screen:{
        padding:10,
        alignItems:'center',
        flex:1
    },
    title:{
        paddingTop:30,
        fontSize:25,
    },
   
    inputtitle:{
        fontSize:15,
       
        textAlign:'center',
        padding:10
    },
    heading:{
        fontSize:15,
       textAlign:'center',
        padding:10
    },
    number:{
        borderColor:'pink',
        borderWidth:5,
        borderRadius:5,
        textAlign:'center',
        
        padding:5
        
    },
    inputCont:{
        marginVertical:30,
        width:300,
        maxWidth:'80%',
        
       
    },
    inputBox:{
        borderBottomColor:'black',
        borderBottomWidth:2,
        textAlign:'center'
        
     
    },
    button:{
        paddingTop:15,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})

export default StartScreen