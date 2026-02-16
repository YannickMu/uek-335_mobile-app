import { Tabs } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"
import BottomNavIcon from "../../components/BottomNavIcon";

const tabs = [
    {
        title: "Explore",
        name: "explore/index",
        iconFocused: "compass",
        icon: "compass-outline"
    },
    {
        title: "Trails",
        name: "trails/index",
        iconFocused: "trail-sign",
        icon: "trail-sign-outline"
    },
    {
        title: "Favourites",
        name: "favourites/index",
        iconFocused: "heart",
        icon: "heart-outline"
    },
    {
        title: "User",
        name: "user/index",
        iconFocused: "person-circle",
        icon: "person-circle-outline"
    }
];

export default function HomeLayout() {
    return (
        <Tabs>
            {
                tabs.map((tab) => {
                    return(
                        <Tabs.Screen key={tab.name} name={tab.name} options={{
                            title: tab.title,
                            tabBarIcon: ({ color, focused }) => (
                                <BottomNavIcon icon={focused ? tab.iconFocused : tab.icon} color={color} />
                            ),
                        }}/>
                    )
                })
            }
        </Tabs>
);
}