import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Nav = () => {
    return (
        <View className="flex-row justify-evenly p-2">
            <View className="border p-2 rounded-md justify-center items-center bg-white">
                <Ionicons name="home-outline" size={24} color="black"/>
            </View>
            <View className="border p-2 rounded-md justify-center items-center bg-white">
                <Ionicons name="list-outline" size={24} color="black"/>
            </View>
            <View className="border p-2 rounded-md justify-center items-center bg-white">
                <Ionicons name="calendar-outline" size={24} color="black"/>
            </View>
            <View className="border p-2 rounded-md justify-center items-center bg-white">
                <Ionicons name="bookmark-outline" size={24} color="black"/>  
            </View>
            <View className="border p-2 rounded-md justify-center items-center bg-white">
                <Ionicons name="settings-outline" size={24} color="black"/>  
            </View>
        </View>
    )
}

export default Nav;