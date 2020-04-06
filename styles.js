import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        position: 'relative',
        top: 0,
        marginTop: 20,
        paddingVertical: 10,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        width: 300
    },
    border: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 20,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    textField: {
        position: 'relative',
        top: -30,
        marginTop: 20,
        paddingVertical: 10,
        alignItems: 'center',
        borderColor: '#d3d3d3',
        borderBottomWidth: 2,
        fontSize: 20,
        width: 300,
    },
    logoImage: {
        position: 'relative',
        top: -30,
        padding: 10,
        resizeMode: "contain",
        height: "10%"
    },
    loginButtonText: {
        fontSize: 28
    },
    bioTextInput: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 20,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,

    }
  });
