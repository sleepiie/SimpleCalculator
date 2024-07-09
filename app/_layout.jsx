import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Row from '@/components/row';
import Button from '@/components/Button';
import styles from '@/app/src/style';
import calculator,{ initialState } from './src/logic';



export default function App() {
    const [state, setState] = useState(initialState);
    const HandleTap = (type, value) => {
      setState((state) => calculator(type, value, state));
    };
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(state.currentValue).toLocaleString()}
          </Text>
          <Row>
            <Button text="AC" theme="accent" onPress ={() => HandleTap("clear")}/>
            <Button text="<-" theme="accent" />
            <Button text="+/-" theme="accent" onPress={() => HandleTap("operator","")}/>
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
            <Button text="%" onPress={() => HandleTap("operator", "%")}/>
            <Button text="0" onPress={() => HandleTap("number", 0)}/>
            <Button text="." onPress={() => HandleTap("number", ".")}/>
            <Button text="=" theme="secondary" onPress={() => HandleTap("equal")}/>
          </Row>
        </SafeAreaView>
      </View>
    );
}
