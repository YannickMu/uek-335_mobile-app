import {Button, Text, TextInput, TextInputEndEditingEvent, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import {ThemedText} from "@/components/themed-text";
import ThemedButton from "@/components/themed-button";
import {Label} from "@react-navigation/elements";

function increment(max: number | undefined, count: number): number {
    if (max === undefined || max > count) {
        return count + 1;
    } else {
        return count;
    }
}

export default function Counter() {
    let [count, setCount] = useState<number>(0);
    let [max, setMax] = useState<number | undefined>(undefined);

    return(
        <>
            <ThemedText type="title" style={{textAlign: "center"}}>{count}</ThemedText>
            <View>
                <ThemedText type="default" style={{color: "#bbb", marginBottom: -4, marginLeft: 6}}>Maximal Value</ThemedText>
                <TextInput id={"maxval"} value={String(max).replace(/\D/g,'')} placeholder={"max-value"} onEndEditing={(event: TextInputEndEditingEvent) => max !== undefined && max < count ? setCount(max) : undefined} onChangeText={(text: string) => {
                    text = text.replace(/\D/g,'');
                    if (text === "") {
                        setMax(undefined);
                        return;
                    }
                    setMax(Number(text));
                }} keyboardType={"number-pad"} style={{
                    borderWidth: 1,
                    borderColor: "#3498db",
                    borderRadius: 10,
                    padding: 10,
                    fontSize: 18,
                    color: "#efefef",
                    textAlign: "center",
                    margin: 3
                }}/>
            </View>
            <ThemedButton title="Increment" type="default" onPress={() => setCount(increment(max, count))} style={{}} />
            <ThemedButton title="Decrement" type="delete" onPress={() => setCount(count - 1)} style={{}} />
        </>
    )
}