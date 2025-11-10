import { View, Text, ScrollView } from "react-native";

const Tabs = () => {
    return (
        <View className="flex-row justify-evenly items-center gap-x-1 px-2 scroll w-full border-t pt-2">
            <Text className="border border-gray-400 rounded  p-2 w-[18%] text-center flex">All</Text>
            <Text className="border border-gray-400 rounded  p-2 w-[18%] text-center flex">Home</Text>
            <Text className="border border-gray-400 rounded  p-2 w-[18%] text-center flex">Work</Text>
            <Text className="border border-gray-400 rounded  p-2 w-[18%] text-center flex">Misc</Text>
            <Text className="border border-gray-400 rounded  p-2 w-[20%] text-center flex">Completed</Text>
        </View>
    )
}

export default Tabs;