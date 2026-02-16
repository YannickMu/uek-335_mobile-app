import {Alert, FlatList, StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";
import RobotCard from "../../../components/RobotCard";

const styles = StyleSheet.create({
    display: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    buttonlink: {
        backgroundColor: "#af7fff",
        padding: 10,
        color: "#fff",
        fontWeight: "900",
        borderRadius: 7,
        width: 100,
        textAlign: "center"
    }
});

const API_URL = "https://dummyuser.vercel.app/"

export async function fetchUsers() {
    try {
        const url = `${API_URL}/users`

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`HTTP-Error! Status: ${response.status} (${response.statusText})`)
        }

        return await response.json()
    } catch (error) {
        console.error("[ERROR] Error getting user data:", error.message)
        return null
    }
}

export default function RobotsTab() {
    const [robots, setRobots] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        setRobots([]);
        const loadRobots = async () => {
            try {
                const data = await fetchUsers()
                setRobots(data)
            } catch (error) {
                console.error(error)
                Alert.alert("An error occurred loading the robots")
            }
        }

        loadRobots();
        setRefreshing(false)
    }, [refreshing])

    return (
        <View style={styles.display}>
            <FlatList refreshing={refreshing} onRefresh={() => setRefreshing(true)} data={robots} renderItem={({item}) =>
                <RobotCard id={item.id} name={item.first_name + " " + item.last_name} picture={item.avatar} email={item.email} age={item.age} />
            }/>
        </View>
    );
}