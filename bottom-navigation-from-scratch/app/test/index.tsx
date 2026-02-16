import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {BlurView} from "expo-blur";
import ThemedText from "../../components/themedText";
import {Link} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const styles = StyleSheet.create({
    display: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    buttonlink: {
        fontSize: 13,
        backgroundColor: "#af7fff",
        padding: 10,
        color: "#fff",
        fontWeight: "900",
        borderRadius: 7,
        width: 150,
        textAlign: "center",
        alignSelf: "center",
}
});

export default function TrailsTab() {
    return (
        <BlurView style={styles.display}>
            <SafeAreaProvider>
                <SafeAreaView style={styles.display}>
                    <ThemedText type={"title"}>Some Hidden page!!!</ThemedText>
                    <ThemedText type={"subtitle"}>By some unknown author!!!</ThemedText>
                    <ThemedText type={"normal"}>With some very long text in it:

                        Ut qui minus a. Dignissimos quidem nisi quo non recusandae laudantium excepturi. Cupiditate ut quia est. Odit magni quos placeat autem ab dolorem. Cupiditate sint qui est. Eum fuga possimus velit asperiores.

                        Et deserunt aliquid aut aperiam non dolores. Minus suscipit quibusdam tenetur autem blanditiis. Inventore perferendis delectus nisi omnis quae dolorem consequatur. Est et assumenda pariatur rerum cupiditate illo ratione voluptatem.

                        Numquam voluptas aut sint est aut. Qui eum dolor autem culpa rerum eius architecto. Officiis quod harum voluptatum tenetur aut. Quia aut quam ad aliquid iusto voluptatem molestiae aperiam. Officia sed sint quaerat magnam voluptas. Quod quia qui reprehenderit.

                        Et doloremque in inventore necessitatibus dicta optio necessitatibus. Id fugit voluptas quasi placeat aut. Provident modi eius veritatis id molestias sequi. Dolorem cupiditate perspiciatis molestiae iste. Et velit ut ratione. Magnam dolorem et possimus perspiciatis tempora.

                        Laboriosam sed necessitatibus fugiat nihil neque. Aut nemo laborum rem doloremque. Nesciunt omnis enim reprehenderit perferendis suscipit quo placeat deserunt. Autem aspernatur eos omnis sint voluptatem repellat aspernatur. Quod laudantium accusamus totam quam magnam. Atque cum fugiat laborum dolor.
                    </ThemedText>
                    <Link href={"/"} style={styles.buttonlink}>Back Home <Ionicons name={"home"} size={13}/> </Link>
                </SafeAreaView>
            </SafeAreaProvider>
        </BlurView>
    );
}