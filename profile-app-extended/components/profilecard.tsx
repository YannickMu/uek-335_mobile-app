import {Image, StyleSheet, Text, View, ViewStyle} from "react-native";
import {Colors} from "@/constants/theme";
import {ThemedText} from "@/components/themed-text";
import {ThemedView} from "@/components/themed-view";
import {useThemeColor} from "@/hooks/use-theme-color";

interface ProfileCardProps {
    name: string;
    picture: string;
    role: string;
    location: string;
    style: ViewStyle | undefined;
}

const styles = StyleSheet.create({
    card: {
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

export default function ProfileCard({name, picture, role, location, style}: ProfileCardProps) {
    return(
        <ThemedView style={[styles.card, style]}>
            <Image source={{uri: picture}} style={styles.picture} />
            <ThemedText style={styles.name}>{name}</ThemedText>
            <ThemedText style={styles.job}>{role}</ThemedText>
            <ThemedText style={styles.location}>{location}</ThemedText>
        </ThemedView>
    );
}