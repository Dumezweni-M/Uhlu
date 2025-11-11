import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, Pressable } from "react-native";

const Tabs = ( ) => {
    const navigation = useNavigation();

    return (
        <View className="flex-row justify-evenly items-center gap-x-1 px-2 scroll w-full pt-2 pb-2 bg-white">


            <Pressable onPress={() => navigation.navigate("Home")} className="border p-2 rounded bg-white items-center justify-center">
                <Ionicons name="home-outline" size={20}/>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Home")} className="border p-2 rounded bg-white items-center justify-center">
                    <Ionicons name="cart-outline" size={20}/>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Completed")} className="border  p-2 rounded bg-white items-center justify-center">
                <Ionicons name="checkmark" size={20}/>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Stats")} className="border p-2 rounded bg-white items-center justify-center">
                    <Ionicons name="stats-chart" size={20}/>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("About")} className="border p-2 rounded bg-white items-center justify-center">
                    <Ionicons name="information" size={20}/>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Home")} className="border p-2 rounded bg-white items-center justify-center">
                    <Ionicons name="settings-outline" size={20}/>
            </Pressable>

        </View>
    )
}

export default Tabs;