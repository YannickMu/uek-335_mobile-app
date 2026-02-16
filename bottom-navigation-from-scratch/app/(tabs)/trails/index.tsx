import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";

const styles = StyleSheet.create({
    display: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    buttonlink: {
        backgroundColor: "#af7fff",
        padding: 10,
        color: "#fff",
        fontWeight: "900",
        borderRadius: 7,
        width: 100,
        textAlign: "center"
    }
});

export default function TrailsTab() {
    return (
        <View style={styles.display}>
            <Text>Hello World!</Text>
            <Link style={styles.buttonlink} href={"/test/"}>Click Me!</Link>
        </View>
    );
}