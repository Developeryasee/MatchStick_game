import React, { useState, useEffect } from "react";
import { Image, View ,Text, TouchableOpacity} from "react-native";
import { Actions } from "react-native-router-flux";
import { openDatabase } from "react-native-sqlite-storage";
var db = openDatabase({
    name: 'db.db', location: 'default',
    createFromLocation: '~db.db'
  }, (success) => { console.log(success) }, error => { console.log(error) })

const Result = (props) => {
    const [lost,setlost]=useState("")
    console.log(props.data, "img");
   
    useEffect(() => {
                 db.transaction((tx)=>{
                      tx.executeSql("select lost from user where id=?",[props.data[1]],(tx,result)=>{
                                    setlost(result.rows.item(0).lost+1)
                                    console.log(result.rows.item(0).lost,"result.rows.item(0).lost");
                                     tx.executeSql("update user set lost=? where id=?",[result.rows.item(0).lost+1,props.data[1]],(tx1,resultt)=>{
                                    console.log("UPDATE SUCESS");
                                        },error=>{
                                            console.log(error);
                                        })

                      },error=>{
                        console.log(error);
                    })
                },error=>{
                    console.log(error);
                })
       }, [])
    return (
        <View style={{ flex: 0.5, backgroundColor: '#fff',
        alignItems:'center',justifyContent:'center',
    padding:40}}>
         
                    <View 
                        style={{
                            width: "100%",
                            height: "25%",
                        }}>
                        <Image
                            source={require('./../../../assets/images/sad.png')}
                            resizeMode="contain"
                            style={{
                                width: "100%",
                                height: "100%",

                            }}
                        />
                          <Text style={{ color: '#000', fontSize: 18, fontFamily: 'semibold' ,marginTop:10,textAlign:"center"}}>
                                       Sorry You Lost the Match
                         </Text>
                         <Text style={{ color: 'red', fontSize: 18, fontFamily: 'semibold' ,marginTop:20,textAlign:'center',textDecorationLine:"underline"}}>
                                       HIGH SCORE
                         </Text>
                         <Text style={{ color: 'red', fontSize: 18, fontFamily: 'semibold' ,marginTop:20,}}>
                                       NO. OF LOST : {lost}
                         </Text>
                        <TouchableOpacity style={{width:'100%',height:50,borderRadius:10,backgroundColor:'red',justifyContent:'center',alignItems:'center',marginTop:20,}}>
                        <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'semibold' }} onPress={()=>{
                            console.log("YEs");
                            // Actions.reset("dashboard",{data:[props.data[1]]})
                            Actions.dashboard({data:[props.data[1]]})
                        }}>
                                      PLAY AGAIN
                         </Text>
                        </TouchableOpacity>

                    </View>

                </View>
         
    )
}

export default Result;