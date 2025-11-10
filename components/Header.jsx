import Ionicons from "@react-native-vector-icons/ionicons";
import { View, Text, Pressable, ImageBackground } from "react-native";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
    return (
        <View className="p-2 flex-row items-center justify-between">
            <View className="flex-row w-1/3 h-full">
                <Text className=" text-4xl "> Uhlu</Text>
            </View>
                <HeaderMenu/>
        </View>
    )
}

export default Header;