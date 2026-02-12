import {StyleSheet, Text, TouchableOpacity, ViewStyle} from "react-native";
import {ThemedText} from "@/components/themed-text";

const styles = StyleSheet.create(
    {
        default: {
            backgroundColor: "#4583d3",
            borderRadius: 10,
            padding: 5,
            margin: 3
        },
        outlined: {
            borderRadius: 10,
            borderColor: "#4583d3",
            borderWidth: 1,
            padding: 5,
            margin: 3
        },
        delete: {
            backgroundColor: "#df5f5f",
            borderRadius: 10,
            padding: 5,
            margin: 3
        }
    }
);

interface ThemedButtonProps {
    onPress: () => void;
    title: string;
    type: "default" | "outlined" | "delete";
    style: ViewStyle;
}

export default function ThemedButton({onPress, title, type, style}: ThemedButtonProps) {
    return(
        <TouchableOpacity style={[
            type === "default" ? styles.default : undefined,
            type === "outlined" ? styles.outlined : undefined,
            type === "delete" ? styles.delete : undefined,
            style
        ]} onPress={onPress}>
            <ThemedText style={[
                type === "default" ? {color: "#1a1a1a"}:{color: "#eaeaea"},
                {textAlign: "center"}
            ]}>{title}</ThemedText>
        </TouchableOpacity>
    );
}