import Ionicons from "@react-native-vector-icons/ionicons";
import { View, Text, Pressable } from "react-native";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
    return (
        <View className="border-b border-gray-400 p-2 flex-row justify-between">
            <Text className="font-bold text-4xl">[ Uhlu ]</Text>
            <HeaderMenu/>
        </View>
    )
}

export default Header;