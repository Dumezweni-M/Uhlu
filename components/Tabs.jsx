import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";

const Tabs = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const tabs = [
    { name: "AllTasks", label: "All", icon: "list-outline" },
    { name: "Daily", label: "Cycles", icon: "repeat-outline" },
    { name: "Home", label: "Home", icon: "cart-outline" },
    { name: "Work", label: "Work", icon: "briefcase-outline" },
    { name: "Notes", label: "Notes", icon: "book-outline" },
  ];

  return (
    <View className="flex-row justify-evenly items-center px-2 pt-2 pb-2 bg-white shadow-lg ">
      {tabs.map((tab) => {
        const isActive = route.name === tab.name; // 👈 highlight current tab
        return (
          <Pressable
            key={tab.name}
            onPress={() => navigation.navigate(tab.name)}
            className={`w-1/6 border p-1 rounded items-center justify-center ${
              isActive ? "bg-gray-800 border-gray-800" : "bg-white border-gray-300"
            }`}
          >
            <Ionicons
              name={tab.icon}
              size={20}
              color={isActive ? "white" : "black"}
            />
            <Text className={`${isActive ? "text-white font-bold" : "text-black"}`}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Tabs;