import ParallaxScrollView from "@/components/parallax-scroll-view";
import {IconSymbol} from "@/components/ui/icon-symbol";
import {StyleSheet} from "react-native";
import {ThemedView} from "@/components/themed-view";
import {Fonts} from "@/constants/theme";
import {ThemedText} from "@/components/themed-text";
import {Image} from "expo-image";

const styles = StyleSheet.create({
    headerImage: {
        height: 400,
        aspectRatio: 1,
        color: '#808080',
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});

export default function UserTabScreen() {
    return (
        <ParallaxScrollView headerImage={<Image source={{uri: "https://i.pravatar.cc/300?img=0"}} style={styles.headerImage}/>} headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText
                    type="title"
                    style={{
                        fontFamily: Fonts.rounded,
                    }}>
                    Profile
                </ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    )
}