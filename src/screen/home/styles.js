import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

export const styles  =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
    },
    innercontainer:{
      width:SIZES.width*.93,
      alignSelf:'center',
    },
    InputBox: {
        width:SIZES.width*.93,
        marginTop: SIZES.height * .03,
        backgroundColor:COLORS.gray10,
        borderRadius:15,
        height:SIZES.height*.05,
        flexDirection:'row',
        alignItems:'center',
        // gap:SIZES.width*-.02 ,
        borderWidth:.5  ,
        color:COLORS.black,
        justifyContent:'center'
    },
    icon:{
        fontSize:SIZES.width*.055,
        color:COLORS.black,
        marginHorizontal:SIZES.width*.03
    },
    input: {
        fontSize:SIZES.width*.04,
        color:COLORS.black,
        width:SIZES.width*.7
    },
    bannerView:{
        width:SIZES.width*.93,
        height:SIZES.height*.15,
        borderRadius:15,
        marginTop:SIZES.height*.02,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
        // paddingHorizontal:SIZES.width*.02,
        // backgroundColor:'red'
    },
    cardView:{
        width:SIZES.width*.9,
        marginTop:SIZES.height*.03,
    },
    mainCardView:{
        width:SIZES.width*.93,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    cards:{
      width:SIZES.width*1,
    },
    heading:{
        fontSize:SIZES.width*.06,
        color:COLORS.black,
        ...FONTS.sixHundred,
        marginHorizontal:SIZES.width*.03

    },
    greenText:{
        fontSize:SIZES.width*.04,
        color:COLORS.green,
        ...FONTS.sixHundred
    },
  
    image:{
        width:SIZES.width*.4,
        height:SIZES.height*.15,
        borderRadius:10,
        // backgroundColor:'red'
        // marginRight:SIZES.width*.2
    },

    getData:{
        backgroundColor:'red',
        marginTop:SIZES.height*.04
    }
})