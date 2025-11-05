import { View, Text, Pressable } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation } from "@react-navigation/native";


const Navi = () => {

    const navigation = useNavigation();
    return (

        <View className="px-2 py-4 flex-row justify-evenly">

            <Pressable className="rounded-lg p-2 flex-row justify-evenly bg-white" onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home" color="black" size={20}/>
            </Pressable>

            <Pressable className="rounded-lg p-2 flex-row justify-evenly bg-white" onPress={() => navigation.navigate('Calendar')}>
                <Ionicons name="calendar" color="black" size={20}/>
            </Pressable>

            <Pressable className="rounded-lg p-2 flex-row justify-evenly bg-white" onPress={() => navigation.navigate('Completed')}>
                <Ionicons name="checkbox" color="black" size={20}/>
            </Pressable>

            <Pressable className="rounded-lg p-2 flex-row justify-evenly bg-white" onPress={() => navigation.navigate('Stats')}>
                <Ionicons name="stats-chart" color="purple" size={20}/>
            </Pressable>
        </View>
    )
}

export default Navi;