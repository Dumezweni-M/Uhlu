import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, Pressable } from "react-native";

const Tabs = ( ) => {
    const navigation = useNavigation();

    return (
        <View className="flex-row justify-evenly items-center gap-x-1 px-2 scroll w-full pt-2 pb-2 bg-white">


            <Pressable onPress={() => navigation.navigate("AllTasks")} className="w-1/6 border p-1 rounded bg-white items-center justify-center">
                    <Ionicons name="list-outline" size={20}/>
                    <Text>All</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Daily")} className="w-1/6 border p-1 rounded bg-white items-center justify-center">
                <Ionicons name="repeat-outline" size={20}/>
                <Text>Daily</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Home")} className="w-1/6 border p-1 rounded bg-white items-center justify-center">
                    <Ionicons name="cart-outline" size={20}/>
                    <Text>Home</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Work")} className="w-1/6 border p-1 rounded bg-white items-center justify-center">
                    <Ionicons name="briefcase-outline" size={20}/>
                    <Text>Work</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Completed")} className="w-1/6 border  p-1 rounded bg-white items-center justify-center">
                    <Ionicons name="checkmark" size={20}/>
                    <Text>Done</Text>
            </Pressable>



        </View>
    )
}

export default Tabs;