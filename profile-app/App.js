import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import ProfileCard from "./components/profilecard";
import Colors from "./constants/Colors";

export default function App() {
  return (
      <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
              <ScrollView>
                  <ProfileCard name={"Peter Erikson"} picture={"https://i.pravatar.cc/300?img=3"} role={"System Engineer"} location={"CH, St. Gallen"} />
                  <ProfileCard name={"Sara Steiner"} picture={"https://i.pravatar.cc/300?img=32"} role={"Chief of Social Media"} location={"CH, Zürich"} />
                  <ProfileCard name={"Nibor Rellatsgrub"} picture={"https://i.pravatar.cc/300?img=5"} role={"Software Developer"} location={"CH, St. Gallen"} />
                  <ProfileCard name={"Divad Namjioom"} picture={"https://i.pravatar.cc/300?img=0"} role={"Software Developer"} location={"CH, St. Gallen"} />
              </ScrollView>
              <StatusBar style="auto" />
          </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
      flex: 1,
  },
});
