import Ionicons from "@react-native-vector-icons/ionicons";
import { View, Text, Pressable, ImageBackground } from "react-native";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
    return (
        <View className="p-2 flex-row items-center justify-between">
            <HeaderMenu/>
            <View className="flex-row w-1/3 h-full">
                {/* <ImageBackground
                    source={require("../assets/Uhlu-logo.png")}
                    style={{ flex: 1, width: "100%", height: "100%", padding: "1%" }}
                    resizeMode=""
                ></ImageBackground> */}
                {/* <Text className=" text-4xl "> Uhlu</Text> */}
            </View>
        </View>
    )
}

export default Header;