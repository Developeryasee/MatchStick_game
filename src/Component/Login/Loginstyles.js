import {StyleSheet} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({

    mainContainer:{
        flex: 1,
        backgroundColor: "#fff",
       
    },
    LoginMain: {
        // paddingLeft: wp('1%'),
        // paddingRight: wp('1%'),
        // paddingBottom: hp('2%'),
        padding:wp('5.12%'),
        flex: 1
    },
    mainLog:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },  
    inputBoxContainer: {
        flex: 1,
        alignItems: "center",
    },
    childContainer:{
        width: "100%",
        height: "99%",
      
    },
    userInpContainer:{
        // marginTop: 32,
        backgroundColor: '#ffffff',
        width: "100%",
        height: 56,
        borderRadius: 12,
        borderBottomWidth: 1,
        marginBottom: hp(2),
        alignItems: "flex-start",
        justifyContent: "flex-end",
        flexDirection: 'row'
    },
    loginButtonContainer:{
        width: "100%",
        height: 56,
        backgroundColor: '#FFF395',
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emailIconContainer:{
        width: "20%",
        height: "100%",
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    InputContainer:{
        width: "80%",
        height: "100%",
        borderRadius: 12,
        justifyContent: 'center',
    },
    inputText:{
        fontSize: 15, lineHeight: 18, fontWeight: "500", fontFamily: "Inter Regular", letterSpacing: 0.007,
        color:"#000"
    },
    title:{
        fontSize:wp(15),
        fontFamily:"Inter Semi-Bold",
        color:"#3E5481",
        fontWeight:'700',
        letterSpacing:wp(4),
    },
    subtitle:{
        fontSize:wp(7),
        fontFamily:"Inter Regular",
        color:"#3E5481",
        fontWeight:'600',
        letterSpacing:wp(1.5),
        marginBottom:hp(5)
    
    },
    serviatorIcon:{
        width: wp("40%"),
        height: wp("40%"),
    }, mainTitleNameText:{
        color: "#3E5481",
        fontFamily: "Inter Bold",
        fontSize: wp(8),
    },  


});
