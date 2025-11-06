import Ionicons from "@react-native-vector-icons/ionicons";
import { View, Text, Pressable } from "react-native";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
    return (
        <View className="border-b border-gray-400 p-2 flex-row justify-between">
            <Text className="font-bold text-4xl">[ Uhlu ]</Text>
            <HeaderMenu/>
            {/* <Pressable className="rounded-lg p-2" onPress={() => navigation.navigate('Stats')}>
                <Ionicons name="ellipsis-horizontal" color="purple" size={20}/>
            </Pressable> */}
        </View>
    )
}

export default Header;