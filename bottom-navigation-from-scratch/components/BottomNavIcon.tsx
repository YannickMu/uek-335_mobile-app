import Ionicons from "@expo/vector-icons/Ionicons";

interface BottomNavIconProps  {
    color: string;
    icon: any;
}

export default function BottomNavIcon({color, icon}: BottomNavIconProps) {
    return (<Ionicons name={icon} size={28} color={color} style={{ marginBottom: -3 }} />)
}