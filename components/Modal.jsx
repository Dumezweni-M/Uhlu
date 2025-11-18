// components/TaskModal.jsx
import { useState, useCallback } from "react";
import { View, Text, TextInput, Pressable, Modal } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import CategorySelector from "./CategorySelector";
import Ionicons from "@react-native-vector-icons/ionicons";



const TaskModal = ({ visible, onClose, onAdded, triggerRefresh }) => {
  const [task, setTask] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [ isImportant, setIsImportant ] = useState(false)
  const db = useSQLiteContext();


  const handleSubmit = async () => {
    if (!task) return;

    const importantValue = isImportant ? 1 : 0;
    try {
      await db.runAsync(
        `INSERT INTO list (item, category, important) VALUES (?, ?, ?)`,
        [task, selectedCategory, importantValue]
      );
      setTask("");
      setSelectedCategory(null);
      setIsImportant(false)
      onAdded?.();
      triggerRefresh?.();
      onClose?.();
    } catch (err) {
      console.error("Failed to add task", err);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View className="flex-1 justify-center items-center bg-black/50 p-4">
        <View className="bg-white w-full px-6 py-12 rounded">

          <Text className="text-lg text-gray-500 font-bold mb-2">Select category</Text>
          <CategorySelector
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            isImportant={isImportant}
            setIsImportant={setIsImportant}
          />

          <Text className="text-lg text-gray-500 font-bold mb-2">Enter list Item</Text>
          <TextInput
            placeholder="Task"
            value={task}
            onChangeText={setTask}
            returnKeyType="done"
            onSubmitEditing={handleSubmit}
            className="border p-2 rounded mb-8 w-full"
          />
   
     

        <View className="flex-row justify-evenly ">

            {/* Styled Modal Cancel Button */}
            <Pressable onPress={onClose} className="items-center border p-1 rounded w-1/4">
            <Ionicons name="close" size={21} />
            <Text className="text-center">Cancel</Text>
            </Pressable>

            <Pressable onPress={handleSubmit} className="items-center border p-1 rounded w-1/4">
            <Ionicons name="checkmark" size={20} />
            <Text className="text-center">Save</Text>
            </Pressable>
        </View>
          
        </View>
      </View>
    </Modal>
  );
};

export default TaskModal;
