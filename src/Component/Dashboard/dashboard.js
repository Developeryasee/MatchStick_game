import React, { useRef, useState ,useEffect} from "react";
import { View, Text, StatusBar, Image,BackHandler, Animated, Dimensions, ScrollView, StyleSheet, Touchable, TouchableOpacity, Alert } from 'react-native'
import { Actions } from "react-native-router-flux";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get('window')
const itemWidth = (width / 5) * 4;
const padding = (width - itemWidth) / 2
const offset = itemWidth
const Dashboard = (props) => {
    const [color,setcolor]=useState("")
    useEffect(() => {
        const backAction = () => {
          Alert.alert('Info',
                    'Are you want to logout?',[
                       {text:'yes',onPress:()=>{
                         console.log("YES");
                        Actions.login()
                       }},
                       {text:'no',onPress:()=>{
                       
                       }},
                    ],
                    {cancelable:false}
                    );
                    return true;
          
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);
    const [TotalStick, setTotalStick] = useState(21);
    const [Yours,setyours]=useState(0)
    const [Ai,setAi]=useState(0)
    const [previous,setprev]=useState("")

    let content = [];

    for (let i = 0; i < TotalStick; i++) {
        // const element = array[i];

        content.push(
            <View key={i} style={{
                width: 45, height: 45, backgroundColor: 'white', margin: 5, borderRadius: 5,

                shadowOpacity: 0.3,
                shadowRadius: 3,
                shadowOffset: {

                    height: 3, width: 3
                },
                elevation: 4,
            }}>
                <View style={{ paddingLeft: 5, height: '30%' }}>
                    <Text style={{ color: '#000', fontSize: 10, fontFamily: 'semibold' }}>{i + 1}</Text>
                </View>

                <View style={{ height: '70%' }}>
                    <Image
                        source={require('./../../../assets/images/matchstick_1.png')}
                        resizeMode="contain"
                        style={{ width: "100%", height: "100%", }}
                    />

                </View>

            </View>
        )

    }

    let yours = []
    for (let i = 0; i < 14; i++) {
        yours.push(
            <View key={i} style={{
                width: 45, height: 45, backgroundColor: 'white', margin: 5, borderRadius: 5,

                shadowOpacity: 0.3,
                shadowRadius: 3,
                shadowOffset: {

                    height: 3, width: 3
                },
                elevation: 4,
            }}>
                <View style={{ paddingLeft: 5, height: '30%' }}>
                    <Text style={{ color: '#000', fontSize: 10, fontFamily: 'semibold' }}>{i + 1}</Text>
                </View>

                <View style={{ height: '70%' }}>
                    <Image
                        source={require('./../../../assets/images/matchstick_1.png')}
                        resizeMode="contain"
                        style={{ width: "100%", height: "100%", }}
                    />

                </View>

            </View>
        )

    }
  

    const validateStick=(num)=>{
                var balanceStick=TotalStick-num;
                var Aichoosen=5-num;
                setprev(Aichoosen)
               
                setTotalStick(balanceStick-Aichoosen);
                setyours(Yours+num)
                setAi(Ai+Aichoosen)
                
    }
    if (TotalStick===1) {

       
        Alert.alert('LOSER',
        'Now, You have to picked up last 1 sticks, so you are a looser...',[
           {text:'OK',onPress:()=>{
            Actions.reset("result",{data:["LOSE",props.data[0]]})

           }},
           
        ],
        {cancelable:false}
        );
    }
    
    return (
        <View style={{ flex: 1, backgroundColor: "#f3f3f4" }}>
            <StatusBar
                hidden={true}
            />
            <SafeAreaView style={{ width: '100%', height: '100%', paddingTop: 20 }}>
                <View style={{ flex: 0.5, justifyContent: 'center' }}>
                    <View style={{ paddingLeft: 5, height: '20%', flexDirection: 'row' }}>
                        <View style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 3, borderBottomColor: '#304ffe', borderLeftColor: '#304ffe', borderTopColor: '#304ffe', borderRightColor: 'transparent', padding: 3 }}>
                            <Image
                                source={require('./../../../assets/images/men.jpg')}
                                resizeMode="cover"
                                style={{ width: "100%", height: "100%", borderRadius: 30 }}
                            />

                        </View>
                        <View style={{ width: '100%', height: '100%' }}>
                            <Text style={{ color: '#000', fontSize: 15, fontFamily: 'semibold', paddingLeft: 12, paddingTop: 5 }}>
                                Welcome
                            </Text>
                            <Text style={{ color: '#000', fontSize: 15, fontFamily: 'semibold', paddingLeft: 12 }}>
                                to the 21 MatchStick Game
                            </Text>
                        </View>

                    </View>
                    <View style={{
                        marginLeft: 7, marginRight: 7, height: '20%', backgroundColor: '#fff', borderRadius: 20, justifyContent: 'center', padding: 20,
                        shadowOpacity: 0.3,
                        shadowRadius: 3,
                        shadowOffset: {

                            height: 3, width: 3
                        },
                        elevation: 4,
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#000', fontSize: 20, fontFamily: 'semibold' }}>
                                Yours
                            </Text>
                            <Text style={{ color: '#000', fontSize: 20, fontFamily: 'semibold' }}>
                                Total : {Yours}
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#000', fontSize: 20, fontFamily: 'semibold' }}>
                                AI chose : {previous}
                            </Text>
                            <Text style={{ color: '#000', fontSize: 20, fontFamily: 'semibold' }}>
                                Total : {Ai} 
                            </Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap', }}>

                        {

                            content
                        }


                    </View>




                </View>
                <View style={{ flex: 0.5, padding: 7 }}>
                    <View style={{ height: '25%', justifyContent: 'flex-end' }}>
                        <Text style={{ color: '#000', fontSize: 25, fontFamily: 'semibold' }}>
                            Yours Turn
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', height: '25%', alignItems: 'center', justifyContent: 'space-between' }}>
                        {
                            [1, 2, 3, 4].map((item, index) => (
                                <TouchableOpacity style={{
                                    width: '20%', height: 50, backgroundColor: color===item?"blue":"#fff", shadowOpacity: 0.3,
                                    shadowRadius: 3,
                                    shadowOffset: {

                                        height: 3, width: 3
                                    },
                                    elevation: 4, borderRadius: 5, justifyContent: 'center', alignItems: 'center'
                                }}  onPress={()=>{
                                    setcolor(item)
                                    validateStick(item)
                                }}>
                                    <Text style={{ color:color===item?"#fff":"#000", fontSize: 20, fontFamily: 'semibold' }}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }

                        
                    </View>
                    <Text style={{ color: '#000', fontSize: 15, fontFamily: 'semibold',textAlign:'center' }}>
                    NOTE : {"\n"}
                    1. In this Puzzle there are 21 Match Sticks.{"\n"}
2. You and AI will pick up the sticks one by one.{"\n"}
3. Sticks can be picked from 1 to 4.{"\n"}
4. The who, picked up the last stick, is the loser.
                        </Text>
                        
                </View>
            </SafeAreaView>
        </View>
    )
}
export default Dashboard;

const styles = StyleSheet.create({
    item: {
        height: itemWidth, width: itemWidth, borderRadius: 16, alignItems: 'center'
    }
})