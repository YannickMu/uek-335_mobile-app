import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import Counter from "@/components/sample/counter";

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

export default function counterTab() {
    return (
        <ParallaxScrollView headerImage={<IconSymbol
            size={310}
            color="#808080"
            name="plus.app.fill"
            style={styles.headerImage}
        />} headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }} >
            <Counter/>
        </ParallaxScrollView>
    )
}