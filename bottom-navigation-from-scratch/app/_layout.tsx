import { Slot } from "expo-router"
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {ImageBackground, Text} from "react-native";

export default function RootLayout() {
    return(
        <ImageBackground source={{uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2FjgbFbWR.jpg&f=1&nofb=1&ipt=d6813f6990fe158d5501bed66667d42cc5f9ed05b2cc442b2492a804bb04bb78"}} resizeMethod={"resize"} style={{
            flex: 1
        }}>
        <Slot />
        </ImageBackground>
    )
}