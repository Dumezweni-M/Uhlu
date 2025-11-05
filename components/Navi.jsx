import { View, Text, Pressable } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

const Navi = () => {
    return (
        <View className="p-2 flex-row justify-evenly bg-sky-300">
            <Pressable className="rounded-lg p-2 flex-row justify-evenly bg-white">
                <Ionicons name="home" color="black" size={20}/>
            </Pressable>

            <Pressable className="rounded-lg p-2 flex-row justify-evenly bg-white">
                <Ionicons name="list" color="black" size={20}/>
            </Pressable>

            <Pressable className="rounded-lg p-2 flex-row justify-evenly bg-white">
                <Ionicons name="calendar" color="black" size={20}/>
            </Pressable>

            <Pressable className="rounded-lg p-2 flex-row justify-evenly bg-white">
                <Ionicons name="checkbox" color="black" size={20}/>
            </Pressable>

            <Pressable className="rounded-lg p-2 flex-row justify-evenly bg-white">
                <Ionicons name="stats-chart" color="purple" size={20}/>
            </Pressable>
        </View>
    )
}

export default Navi;