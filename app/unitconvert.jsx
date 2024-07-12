import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Row from '@/components/row';
import Button from '@/components/Button';
import RNPickerSelect from 'react-native-picker-select';
import styles from '@/app/src/style';
import convertUnits, { initialState, handleNumber, handleRemove } from '@/app/src/unitlogic';

export default function UnitConvert({ navigation }) {
  const [state, setState] = useState(initialState);
  const [convertedValue, setConvertedValue] = useState('0');
  const [selectedInputUnit, setSelectedInputUnit] = useState('Select Unit');
  const [selectedOutputUnit, setSelectedOutputUnit] = useState('Select Unit');


  const handleTap = (type, value) => {
    setState(prevState => handleNumber(value, prevState));
  };

  const handleConvert = () => {
      const result = convertUnits(state.currentValue, selectedInputUnit, selectedOutputUnit);
      setConvertedValue(result);
  };
  const handleClearAll = () => {
    setState(initialState);
    setConvertedValue('0');
  };


  const unitOptions = [
    { label: 'Kilometer', value: 'kilometer' },
    { label: 'Meter', value: 'meter' },
    { label: 'Centimeter', value: 'centimeter' },
    { label: 'Millimeter', value: 'millimeter' },
    { label: 'Micrometer', value: 'micrometer' },

  ];
  const isUnitSelected = (unit) => unit && unit !== 'Select Unit';
  const areBothUnitsSelected = isUnitSelected(selectedInputUnit) && isUnitSelected(selectedOutputUnit);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.inputRow}>
          <View style={styles.numberContainer}>
          <Text style={[
              styles.value,
              { color: isUnitSelected(selectedInputUnit) && isUnitSelected(selectedOutputUnit) ? '#FFF' : '#404040' }
            ]}>
              {(state.currentValue).toLocaleString()}
            </Text>
          </View>
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedInputUnit(value)}
              items={unitOptions}
              style={pickerSelectStyles}
              placeholder={{ label: 'Select Unit', value: 'Select Unit' }}
            />
          </View>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.numberContainer}>
            <Text style={[
              styles.value,
              { color: isUnitSelected(selectedInputUnit) && isUnitSelected(selectedOutputUnit) ? '#FFF' : '#404040' }
            ]}>
              {convertedValue}
            </Text>
          </View>
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedOutputUnit(value)}
              items={unitOptions}
              style={pickerSelectStyles}
              placeholder={{ label: 'Select Unit', value: 'Select Unit' }}
            />
          </View>
        </View>
        
        <Row single>
          <Button text="cal" theme="switch" size="small" onPress={() => navigation.navigate("Calculator")}/>
        </Row>
        <Row>
          <Button text="7" onPress={() => handleTap('number', '7')} disabled={!areBothUnitsSelected} />
          <Button text="8" onPress={() => handleTap('number', '8')} disabled={!areBothUnitsSelected}/>
          <Button text="9" onPress={() => handleTap('number', '9')} disabled={!areBothUnitsSelected}/>
          <Button text="AC" theme="accent" onPress={handleClearAll} />
        </Row>
        <Row>
          <Button text="4" onPress={() => handleTap('number', '4')} disabled={!areBothUnitsSelected}/>
          <Button text="5" onPress={() => handleTap('number', '5')} disabled={!areBothUnitsSelected}/>
          <Button text="6" onPress={() => handleTap('number', '6')} disabled={!areBothUnitsSelected}/>
          <Button text="<-" theme="accent" onPress={() => setState(prevState => handleRemove(prevState))} disabled={!areBothUnitsSelected}/>
        </Row>
        <Row>
          <Button text="1" onPress={() => handleTap('number', '1')} disabled={!areBothUnitsSelected}/>
          <Button text="2" onPress={() => handleTap('number', '2')} disabled={!areBothUnitsSelected}/>
          <Button text="3" onPress={() => handleTap('number', '3')} disabled={!areBothUnitsSelected}/>
          <Button text="Convert" theme="secondary" onPress={handleConvert} disabled={!areBothUnitsSelected}/>  
        </Row>
        <Row>
          <Button text="00" onPress={() => handleTap('number', '00')} disabled={!areBothUnitsSelected}/>
          <Button text="0" onPress={() => handleTap('number', '0')} disabled={!areBothUnitsSelected}/>
          <Button text="." onPress={() => handleTap('number', '.')} disabled={!areBothUnitsSelected}/>
          <View style={{ flex: 1 }} />
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
    fontSize: 16,
  },
  placeholder: {
    color: '#FFF', // Placeholder text color
    textAlign: 'right', // Align placeholder text to the right
  },
};