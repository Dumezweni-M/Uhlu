import { View, Text } from "react-native";

const Navi = () => {
    return (
        <View className="border p-2 flex-row justify-evenly">
            <Text>Home</Text>
            <Text>Calendar</Text>
            <Text>Notes</Text>
            <Text>Completed</Text>
        </View>
    )
}

export default Navi;