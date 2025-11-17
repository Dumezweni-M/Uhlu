import { View, Text, Pressable, ImageBackground } from "react-native";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
    return (
        <View className="p-1 flex-row items-center justify-between border-gray-300 border">
            <View className="flex-row w-1/3 h-full">
                <Text className=" text-4xl "></Text>
            </View>
                <HeaderMenu/>
        </View>
    )
}

export default Header;