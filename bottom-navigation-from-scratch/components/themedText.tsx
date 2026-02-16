import {StyleSheet, Text, ViewStyle} from "react-native";

interface ThemedTextProps {
    type: "title" | "subtitle" | "normal";
    children: string;
    style?: ViewStyle;
}

const styles = StyleSheet.create({
    normal: {
        color: "#0f0f0f",
        fontSize: 13,
        marginBottom: 13,
        marginHorizontal: 11
    },
    title: {
        color: "#0f0f0f",
        fontSize: 23,
        fontWeight: "bold",
        marginBottom: 24,
        marginHorizontal: 11
    },
    subtitle: {
        color: "#0f0f0f",
        fontSize: 19,
        fontWeight: "semibold",
        marginBottom: 19,
        marginHorizontal: 11
    }
});

export default function ThemedText({type, style, children, ...rest}: ThemedTextProps) {
    return (
        <Text style={[
            type === 'normal' ? styles.normal : undefined,
            type === 'title' ? styles.title : undefined,
            type === 'subtitle' ? styles.subtitle : undefined,
            style,
        ]}
              {...rest}
        >{children}</Text>
    );
}