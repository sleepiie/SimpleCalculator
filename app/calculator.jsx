import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Row from '@/components/row';
import Button from '@/components/Button';
import styles from '@/app/src/style';
import calculator,{ initialState } from '@/app/src/logic';

export default function Mainscreen({navigation}) {
    const [state, setState] = useState(initialState);
    const HandleTap = (type, value) => {
      setState((state) => calculator(type, value, state));
    };
    const formatNumber = (value) => {
      const numericValue = parseFloat(value);
      if (numericValue === 0) {
        return "0";
      }
      if (Math.abs(numericValue) >= 1e8 || Math.abs(numericValue) < 1e-8) {
        return numericValue.toExponential(3); // Adjust the number of decimal places as needed
      }
      return numericValue.toLocaleString();
    };
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.value}>
            {formatNumber(state.currentValue)}
          </Text>
          <Row single>
            <Button text="unit" theme="switch" size="small"onPress ={() => navigation.navigate("UnitConverter")}/>
          </Row>
          <Row>
            <Button text="AC" theme="accent" onPress ={() => HandleTap("clear")}/>
            <Button text="<-" theme="accent" onPress={() => HandleTap("remove")}/>
            <Button text="+/-" theme="accent" onPress={() => HandleTap("posneg","")}/>
            <Button text="÷" theme="accent" onPress={() => HandleTap("operator","/")}/>
          </Row>
          <Row>
            <Button text="7" onPress={() => HandleTap("number", 7)}/>
            <Button text="8" onPress={() => HandleTap("number", 8)}/>
            <Button text="9" onPress={() => HandleTap("number", 9)}/>
            <Button text="x" theme="accent" onPress={() => HandleTap("operator","*")}/>
          </Row>
          <Row>
            <Button text="4" onPress={() => HandleTap("number", 4)}/>
            <Button text="5" onPress={() => HandleTap("number", 5)}/>
            <Button text="6" onPress={() => HandleTap("number", 6)}/>
            <Button text="-" theme="accent" onPress={() => HandleTap("operator", "-")}/>
          </Row>
          <Row>
            <Button text="1" onPress={() => HandleTap("number", 1)}/>
            <Button text="2" onPress={() => HandleTap("number", 2)}/>
            <Button text="3" onPress={() => HandleTap("number", 3)}/>
            <Button text="+" theme="accent" onPress={() => HandleTap("operator", "+")}/>
          </Row>
          <Row>
            <Button text="%" onPress={() => HandleTap("percentage")}/>
            <Button text="0" onPress={() => HandleTap("number", 0)}/>
            <Button text="." onPress={() => HandleTap("number", ".")}/>
            <Button text="=" theme="secondary" onPress={() => HandleTap("equal")}/>
          </Row>
        </SafeAreaView>
      </View>
    );
}
