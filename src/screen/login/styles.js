import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      padding: width * 0.06,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    header: {
      marginVertical: height * 0.05,
    },
    title: {
      fontFamily: 'Poppins',
      fontSize: width * 0.1,
      fontWeight: 'bold',
      color: '#001f33',
      marginBottom: height * 0.01,
      textAlign: 'center',
    },
    subtitle: {
      fontFamily: 'Poppins',
      fontSize: width * 0.05,
      fontWeight: 'bold',
      color: '#929292',
      textAlign: 'center',
    },
    form: {
      marginBottom: height * 0.03,
    },
    formAction: {
      marginVertical: height * 0.03,
    },
    formFooter: {
      fontSize: width * 0.04,
      fontWeight: '500',
      color: '#222',
      textAlign: 'center',
    },
    input: {
      marginBottom: height * 0.02,
    },
    inputLabel: {
      fontSize: width * 0.045,
      fontWeight: '600',
      color: '#222',
      marginBottom: height * 0.01,
    },
    inputControl: {
      height: height * 0.06,
      backgroundColor: '#f1f5f9',
      paddingHorizontal: width * 0.04,
      borderRadius: 12,
      fontSize: width * 0.04,
      fontWeight: '500',
      color: '#222',
      elevation: 5,
    },
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      paddingVertical: height * 0.015,
      paddingHorizontal: width * 0.04,
      shadowColor: '#000',
      borderRadius:10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    btnText: {
      fontSize: width * 0.045,
      lineHeight: height * 0.03,
      fontWeight: '600',
      color: '#000',
      textAlign:'center'
    },
    btnE: {
      marginTop: height * 0.025,
      width: width * 0.6,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      paddingVertical: height * 0.015,
      paddingHorizontal: width * 0.04,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    banner: {
      width: '100%',
      height: height * 0.3,
    },
  });