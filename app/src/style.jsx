import { StyleSheet, } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    paddingBottom: 68,
    paddingLeft: 8,
    paddingRight: 8,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Change to space-between
    alignItems: 'center',
    marginBottom: 10,
  },
  numberContainer: {
    flex: 8, // Adjust the flex value as needed
    justifyContent: 'center',
  },
  pickerContainer: {
    flex: 3, // Adjust the flex value as needed
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
  value: {
    color: '#fff',
    fontSize: 65,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
    paddingBottom: 12,
  },
});

export default styles;
