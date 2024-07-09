import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Row from '@/components/row';
import Button from '@/components/Button';
import RNPickerSelect from 'react-native-picker-select';
import styles from '@/app/src/style';
import convertUnits, { initialState, handleNumber, handleClear, handleRemove } from '@/app/src/unitlogic';

export default function UnitConvert({ navigation }) {
  const [state, setState] = useState(initialState);
  const [convertedValue, setConvertedValue] = useState('0');
  const [selectedInputUnit, setSelectedInputUnit] = useState('');
  const [selectedOutputUnit, setSelectedOutputUnit] = useState('');

  const handleTap = (type, value) => {
    setState(prevState => handleNumber(value, prevState));
  };

  const handleConvert = () => {
    const result = convertUnits(state.currentValue, selectedInputUnit, selectedOutputUnit);
    setConvertedValue(result);
  };

  const unitOptions = [
    { label: 'Meter', value: 'meter' },
    { label: 'Kilometer', value: 'kilometer' },
    { label: 'Centimeter', value: 'centimeter' },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.inputRow}>
          <View style={styles.numberContainer}>
            <Text style={styles.value}>
              {parseFloat(state.currentValue).toLocaleString()}
            </Text>
          </View>
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedInputUnit(value)}
              items={unitOptions}
              style={pickerSelectStyles}
              placeholder={{ label: 'Select Unit', value: null }}
            />
          </View>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.numberContainer}>
            <Text style={styles.value}>
              {convertedValue}
            </Text>
          </View>
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedOutputUnit(value)}
              items={unitOptions}
              style={pickerSelectStyles}
              placeholder={{ label: 'Select Unit', value: null }}
            />
          </View>
        </View>
        
        <Row>
          <Button text="go to calculator" theme="accent" onPress={() => navigation.navigate("Calculator")} />
        </Row>
        <Row>
          <Button text="AC" theme="accent" onPress={() => setState(initialState)} />
          <Button text="<-" theme="accent" onPress={() => setState(prevState => handleRemove(prevState))} />
        </Row>
        <Row>
          <Button text="7" onPress={() => handleTap('number', '7')} />
          <Button text="8" onPress={() => handleTap('number', '8')} />
          <Button text="9" onPress={() => handleTap('number', '9')} />
        </Row>
        <Row>
          <Button text="4" onPress={() => handleTap('number', '4')} />
          <Button text="5" onPress={() => handleTap('number', '5')} />
          <Button text="6" onPress={() => handleTap('number', '6')} />
        </Row>
        <Row>
          <Button text="1" onPress={() => handleTap('number', '1')} />
          <Button text="2" onPress={() => handleTap('number', '2')} />
          <Button text="3" onPress={() => handleTap('number', '3')} />
        </Row>
        <Row>
          <Button text="0" onPress={() => handleTap('number', '0')} />
          <Button text="." onPress={() => handleTap('number', '.')} />
          <Button text="Convert" theme="accent" onPress={handleConvert} />  
        </Row>
      </SafeAreaView>
    </View>
  );
}

const pickerSelectStyles = {
  inputIOS: {
    color: '#FFF', // iOS text color
    textAlign: 'right', // Align text to the right
    fontSize: 16,
  },
  inputAndroid: {
    color: '#FFF', // Android text color
    textAlign: 'right', // Align text to the right
  },
  placeholder: {
    color: '#FFF', // Placeholder text color
    textAlign: 'right', // Align placeholder text to the right
  },
};
