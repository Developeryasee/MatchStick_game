import React, { useState ,useRef,useEffect} from "react";
import { View,Alert,Image, Text, Dimensions, TextInput, TouchableOpacity,Animated,Easing } from "react-native";
import style from './Loginstyles'
import Icon from 'react-native-vector-icons/Zocial';
import Icons from 'react-native-vector-icons/MaterialIcons'
import {Actions} from 'react-native-router-flux'
import { openDatabase } from "react-native-sqlite-storage";
var db = openDatabase({
    name: 'db.db', location: 'default',
    createFromLocation: '~db.db'
  }, (success) => { console.log(success) }, error => { console.log(error) })
const Login: () => React$Node = () => {
    // const dispatch=useDispatch()

    const [TextInput1, setTextInput1] = useState(false)
    const [TextInput2, setTextInput2] = useState(false)
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 2000,
          useNativeDriver:true,
         
        }
      ).start();
    }, [fadeAnim])


 const onLogin=()=>{
    if (!username) {
        alert('Please fill username');
        return;
      }
      if (!password) {
        alert('Please fill Password');
        return;
      }
    db.transaction((tx)=>{
        tx.executeSql("Select username,password,lost,id from user where username=? AND password=?",[username,password],(tx,result)=>{
            console.log(result.rows.length);
            if (result.rows.length===1) {
                // alert("Success")
                console.log(result.rows.item(0));
                // Actions.dashboard({data:result.rows.item(0).id})
                Actions.reset("dashboard",{data:[result.rows.item(0).id]})
            }else{
                alert("Sorry User Not Found")
            }
         
            
        },error=>{
            console.log(error);
        })
    })
     
 }
    return (
        <>


            <View style={style.mainContainer}>
                <View style={[style.LoginMain]}>
                    <Animated.View style={{...style.mainLog,opacity: fadeAnim,}}>
                        <Image style={style.serviatorIcon} resizeMode='cover' source={require('../../../assets/images/match-box.png')}></Image>
                        <Text style={style.mainTitleNameText}>
                          
                          MATCHSTICK GAME
                          
                          </Text>
                    </Animated.View>
                    <View style={style.inputBoxContainer}>
                        <View style={style.childContainer}>
                            <View style={{ ...style.userInpContainer, borderBottomWidth: TextInput1 ? 2 : 1,borderTopWidth:TextInput1 ? 2 : 1,borderRightWidth:TextInput1 ? 2 : 1,borderLeftWidth:TextInput1 ? 2 : 1, borderColor: TextInput1 ? "#FFF395" : "#D0DBEA" }}>
                                <View style={style.emailIconContainer}>
                                    <Icon
                                        name='guest'
                                        color="#3E5481"
                                        size={25}
                                    />
                                </View>
                                <View style={style.InputContainer}>
                                    <TextInput
                                        style={style.inputText}
                                        placeholder="Username"
                                        placeholderTextColor="#9FA5C0"
                                        value={username}
                                        onFocus={() => {
                                            // setonFocusColor("#FFF395")
                                            // setonFousWidth(2)
                                            setTextInput1(true)
                                        }}
                                        onChangeText={(text) => {
                                          setUsername(text)
                                        }
                                        }
                                        onBlur={() => {
                                            //   setonFocusColor("#D0DBEA")
                                            //   setonFousWidth(1)
                                            setTextInput1(false)

                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{ ...style.userInpContainer,  borderBottomWidth: TextInput2  ? 2 : 1,borderTopWidth:TextInput2 ? 2 : 1,borderRightWidth:TextInput2 ? 2 : 1,borderLeftWidth:TextInput2 ? 2 : 1, borderColor: TextInput2 ? "#FFF395" : "#D0DBEA", marginTop: 20 }}>
                                <View style={style.emailIconContainer}>
                                    <Icons
                                        name='security'
                                        color="#3E5481"
                                        size={25}
                                    />
                                </View>
                                <View style={style.InputContainer}>
                                    <TextInput
                                        style={style.inputText}
                                        placeholder="Password"
                                        placeholderTextColor="#9FA5C0"
                                        value={password}
                                        keyboardType="number-pad"
                                        onFocus={() => {
                                            // setonFocusColor("#FFF395")
                                            // setonFousWidth(2)
                                            setTextInput2(true)
                                        }}
                                        onChangeText={(text) => {
                                          setPassword(text)
                                        }
                                        }
                                        onBlur={() => {
                                            //   setonFocusColor("#D0DBEA")
                                            //   setonFousWidth(1)
                                            setTextInput2(false)

                                        }}
                                    />
                                </View>
                            </View>
                            <View style={style.loginButtonContainer}>
                                <TouchableOpacity style={{ width: "100%", height: "100%", justifyContent: 'center', alignItems: 'center' }} onPress={onLogin}>
                                    <Text style={{ fontFamily: 'Inter Bold', fontSize: 15, lineHeight: 18, letterSpacing: 0.007,color:"#000" }}>
                                    LOG IN
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>


    );
};



export default Login; 