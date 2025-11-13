// components/TaskModal.jsx
import { useState, useCallback } from "react";
import { View, Text, TextInput, Pressable, Modal } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import CategorySelector from "./CategorySelector";
import Ionicons from "@react-native-vector-icons/ionicons";



const TaskModal = ({ visible, onClose, onAdded, triggerRefresh }) => {
  const [task, setTask] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const db = useSQLiteContext();


  const handleSubmit = async () => {
    if (!task) return;
    try {
      await db.runAsync(
        `INSERT INTO list (item, category) VALUES (?, ?)`,
        [task, selectedCategory]
      );
      setTask("");
      setSelectedCategory(null);
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
        <View className="bg-white w-full p-4 rounded">
          <TextInput
            placeholder="Task title"
            value={task}
            onChangeText={setTask}
            className="border p-2 rounded mb-8 mt-8 w-full"
          />
          <CategorySelector
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
   
     

        <View className="flex-row justify-evenly mt-8">

            {/* Styled Modal Cancel Button */}
            <Pressable onPress={onClose} className="items-center border p-1 rounded w-1/4">
            <Ionicons name="trash-outline" size={20} />
            <Text className="text-center">Cancel</Text>
            </Pressable>

            <Pressable onPress={handleSubmit} className="items-center border p-1 rounded w-1/4">
            <Ionicons name="checkmark-outline" size={20} />
            <Text className="text-center">Save</Text>
            </Pressable>
        </View>
          
        </View>
      </View>
    </Modal>
  );
};

export default TaskModal;
