import { View, Text, Pressable } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-800">
      <Text className="text-3xl font-bold text-blue-500 mb-4">
        NativeWind Starter 🎉
      </Text>

      <Pressable className="bg-blue-500 px-4 py-2 rounded-xl active:opacity-70">
        <Text className="text-white text-lg">Press Me</Text>
      </Pressable>
    </View>
  );
}
