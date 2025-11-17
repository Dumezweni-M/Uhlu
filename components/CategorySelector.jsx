import { View, Text, Pressable } from "react-native";

const CategorySelector = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ["daily", "home", "work", "misc"];

  return (
    <View className="flex-row flex-wrap mb-4">
        {/* <Text className="w-full pb-2">Select Category</Text> */}
      {categories.map((cat) => (
        <Pressable
          key={cat}
          onPress={() => setSelectedCategory(cat)}
          className={`px-4 py-2 mr-2 mb-2 rounded border ${
            selectedCategory === cat
              ? "bg-gray-500 border-gray-500"
              : "bg-white border-gray-400"
          }`}
        >
          <Text
            className={`font-bold ${
              selectedCategory === cat ? "text-white" : "text-gray-800"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default CategorySelector;
