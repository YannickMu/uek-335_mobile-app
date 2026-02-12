import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import Colors from "../constants/Colors";
import {SafeAreaView} from "react-native-safe-area-context";

interface ProfileCardProps {
    name: string;
    picture: string;
    role: string;
    location: string;
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        marginHorizontal: 24,
        marginVertical: 16,
        padding: 16,
        borderRadius: 8,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        maxHeight: 275
    },
    picture: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 16,
        borderWidth: 3,
        borderColor: Colors.primary
    },
    name: {
        color: Colors.black,
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    },
    job: {
        color: Colors.textSecondary,
        fontSize: 18,
        marginBottom: 16
    },
    location: {
        color: Colors.textMuted,
        marginBottom: 16
    }
});

export default function ProfileCard({name, picture, role, location}: ProfileCardProps) {
    return(
        <View style={styles.card}>
            <Image source={{uri: picture}} style={styles.picture} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.job}>{role}</Text>
            <Text style={styles.location}>{location}</Text>
        </View>
    );
}