import { Tabs } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"
import BottomNavIcon from "../../components/BottomNavIcon";
import {BlurView} from "expo-blur";

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
        title: "Robots",
        name: "robots/index",
        iconFocused: "skull",
        icon: "skull-outline"
    },
    {
        title: "Robot Details",
        name: "robots/[id]",
        iconFocused: "skull",
        icon: "skull-outline",
        href: null
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
                            href: tab.href,
                            tabBarIcon: ({ color, focused }) => (
                                <BottomNavIcon icon={focused ? tab.iconFocused : tab.icon} color={color} />
                            ),
                            tabBarBackground: () => (
                                <BlurView tint="dark" intensity={100} style={{}} />
                            )
                        }}/>
                    )
                })
            }
        </Tabs>
);
}