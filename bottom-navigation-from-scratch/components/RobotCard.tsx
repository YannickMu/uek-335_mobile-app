import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import {Link, router} from "expo-router";

interface RobotCardProps {
    id: number;
    name: string;
    picture: string;
    email: string;
    age: number;
    style?: ViewStyle;
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        marginHorizontal: 24,
        marginVertical: 8,
        paddingVertical: 8,
        padding: 16,
        borderRadius: 8,
        flex: 1,
        flexDirection: "row",
        elevation: 4,
        shadowColor: "#fcfcfc",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        maxHeight: 72
    },
    innercard: {
        flex: 1,
        flexDirection: "row"
    },
    textcont: {
        flex: 1,
        maxHeight: 56,
        overflow: "hidden",
        width: "auto",
        justifyContent: "center"
    },
    picture: {
        width: 56,
        height: 56,
        alignSelf: "center",
        borderRadius: 8,
        borderColor: "#9f9fff",
        marginRight: 16
    },
    name: {
        color: "#323333",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 6
    },
    email: {
        color: "#4e515a",
        fontSize: 14,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#4e515a"
    }
});

export default function RobotCard({id, name, picture, email, age, style}: RobotCardProps) {
    return(
        <TouchableOpacity style={[styles.card, style]} onPress={() => router.push(`/robots/${id}`)}>
        <View style={[styles.innercard]}>
            <Image source={{uri: picture}} style={styles.picture} />
            <View style={styles.textcont}>
                <Text style={styles.name}>{name}</Text>
                <Link href={"mailto:" + email} style={styles.email}>{email}</Link>
            </View>
            <Text style={[styles.name, {alignSelf: "center"}]}>{age}</Text>
        </View>
        </TouchableOpacity>
    );
}