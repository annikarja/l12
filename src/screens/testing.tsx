import React from "react";
import { View, Text, ScrollView } from 'react-native';


const add: (a: number, b: number)=> number = (a, b) => {
    return a + b;
}

export const Sensor: React.FC<{}> = () => {
    const x: number = 20;
    const sum = add(3, 2);
    const list: Array<boolean> = [true, false, true];

    const exampleList: string[] = [
        'eka', 
        'toka', 
        'kolmas', 
    ];

    for (const item of exampleList) {
        exampleList.push(item+item);
    }

    return (
    <View>
        <Text>hello from sensor!</Text>
        <ScrollView>
            {
                exampleList.map((item) => <View key={'item-'+item}><Text>{item}</Text></View>)
            }
        </ScrollView>
    </View>);
}

export default Sensor;