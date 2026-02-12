import ParallaxScrollView from "@/components/parallax-scroll-view";
import {IconSymbol} from "@/components/ui/icon-symbol";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});

export default function UserTabScreen() {
    return (
        <ParallaxScrollView headerImage={<IconSymbol
            size={310}
            color="#808080"
            name="person.fill"
            style={styles.headerImage}
        />} headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}>

        </ParallaxScrollView>
    )
}