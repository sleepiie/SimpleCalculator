import { StyleSheet, } from "react-native";
import { Dimensions } from "react-native";


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-end',
        
    },
    text: {
        color: '#fff',
        fontSize: 24,
    },
    value: {
        color: '#fff',
        fontSize: 48,
        textAlign: 'right',
        marginRight: 20,
        marginBottom: 10,
    },

});

export default styles;