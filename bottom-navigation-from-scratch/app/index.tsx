import {Text, View} from "react-native";
import {Redirect} from "expo-router";

export default function HomeScreen() {
    return (
        <View>
            <Text>Hello World!</Text>
            <Redirect href="/explore" />
        </View>
    );
}