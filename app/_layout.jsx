import { Text, View, SafeAreaView } from 'react-native';

import Row from '@/components/row';
import Button from '@/components/Button';
import styles from '@/app/src/style';



export default function App() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.value}>0</Text>
          <Row>
            <Button text="AC" theme="accent" />
            <Button text="<-" theme="accent" />
            <Button text="+/-" theme="accent" />
            <Button text="÷" theme="accent" />
          </Row>
          <Row>
            <Button text="7" />
            <Button text="8" />
            <Button text="9" />
            <Button text="x" theme="accent" />
          </Row>
          <Row>
            <Button text="4" />
            <Button text="5" />
            <Button text="6" />
            <Button text="-" theme="accent" />
          </Row>
          <Row>
            <Button text="1" />
            <Button text="2" />
            <Button text="3" />
            <Button text="+" theme="accent" />
          </Row>
          <Row>
            <Button text="%" />
            <Button text="0" />
            <Button text="." />
            <Button text="=" theme="secondary" />
          </Row>
        </SafeAreaView>
      </View>
    );
}
