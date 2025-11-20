import { View, Text, Pressable, ImageBackground } from "react-native";
import HeaderMenu from "./HeaderMenu";
import DateTimeDisplay from "./DateTimeDisplay";

const Header = () => {
    return (
        <View className="p-1 flex-row items-center justify-between border-gray-300 border">
            <DateTimeDisplay/>
            <HeaderMenu/>
        </View>
    )
}

export default Header;