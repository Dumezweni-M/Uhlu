// components/TaskModal.jsx
import { useState, useCallback } from "react";
import { View, Text, TextInput, Pressable, Modal } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import CategorySelector from "./CategorySelector";
import Ionicons from "@react-native-vector-icons/ionicons";
import DatePicker from "./DatePicker";




const TaskModal = ({ visible, onClose, onAdded, triggerRefresh }) => {
  const [task, setTask] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isImportant, setIsImportant] = useState(false)
  const [dueDate, setDueDate] = useState(null);
  const db = useSQLiteContext();


  const handleSubmit = async () => {
    if (!task) return;
    const formattedDueDate = dueDate ? dueDate.toISOString().split('T')[0] : null;
    try {
      await db.runAsync(
        `INSERT INTO list (item, category, due) VALUES (?, ?, ?)`,
        [task, selectedCategory, formattedDueDate]
      );
      setTask("");
      setSelectedCategory(null);
      setDueDate(null);
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

          {/* Task category selector */}
          <CategorySelector
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            isImportant={isImportant}
            setIsImportant={setIsImportant}
          />

          {/* Set task */}
          <TextInput
            placeholder="Task"
            value={task}
            onChangeText={setTask}
            returnKeyType="done"
            onSubmitEditing={handleSubmit}
            className="border p-2 rounded mb-8 w-full"
          />
   
          <DatePicker 
            date={dueDate || new Date()} 
            onDateChange={setDueDate} 
            isSet={!!dueDate} 
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
