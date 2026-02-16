import {useEffect, useState} from "react";
import {useLocalSearchParams} from "expo-router";
import {Alert, View} from "react-native";
import ThemedText from "../../../components/themedText";
import RobotCard from "../../../components/RobotCard";

const API_URL = "https://dummyuser.vercel.app/"

export async function fetchUsers(id) {
    try {
        const url = `${API_URL}/users/${id}`

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

export default function RobotDetail() {
    const { id } = useLocalSearchParams();
    const [robot, setRobot] = useState<typeof robot>({});

    useEffect(() => {
        setRobot({});
        const loadRobots = async () => {
            try {
                const data = await fetchUsers(id)
                setRobot(data)
            } catch (error) {
                console.error(error)
                Alert.alert("An error occurred loading the robots")
            }
        }

        loadRobots();
    }, [id]);

    return (
        <View style={{flex: 1}}>
            {robot.first_name !== undefined ? <RobotCard id={robot.id} name={robot.first_name + " " + robot.last_name} picture={robot.avatar} email={robot.email} age={robot.age} /> : <ThemedText type={"title"}>Loading...</ThemedText>}
        </View>
    )
}