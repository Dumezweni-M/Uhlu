import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, Modal } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import Ionicons from "@react-native-vector-icons/ionicons";
import CategorySelector from "./CategorySelector";
import DatePicker from "./DatePicker";

const EditModal = ({ visible, onClose, taskData, onUpdated }) => {
  const db = useSQLiteContext();
  const [task, setTask] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isImportant, setIsImportant ] = useState(false)
  const [dueDate, setDueDate ] = useState(null)

  // Populate state whenever modal opens with a new taskData
  useEffect(() => {
    if (taskData) {
      setTask(taskData.item || "");
      setSelectedCategory(taskData.category || null);
      setIsImportant(taskData.important === 1);
      if (taskData.due) {
                // Convert SQLite YYYY-MM-DD string to Date object
          setDueDate(new Date(taskData.due)); 
      } else {
          setDueDate(null); //Set null if no due date exists
      }
    }
  }, [taskData]);

  const handleUpdate = async () => {
    if (!task.trim()) return;
    const importantValue = isImportant ? 1 : 0;
    const formattedDueDate = dueDate ? dueDate.toISOString().split('T')[0] : null;
    try {
      await db.runAsync(
        `UPDATE list SET item = ?, category = ?, important= ?, due = ? WHERE id = ?`,
        [task, selectedCategory, importantValue, formattedDueDate, taskData.id]
      );
      onUpdated?.(); // trigger parent refresh
      onClose?.();
    } catch (err) {
      console.error("Failed to update task", err);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View className="flex-1 justify-center items-center bg-black/50 p-4">
        <View className="bg-white w-full p-8 rounded">

            {/* Edit Task Modal Heading */}
            <View className="border-gray-400 px-4 pt-2 pb-2 mb-6 w-[100%] flex-row items-center bg-none">
                <Ionicons name="eye-outline" size={30} color="black"/>
                <Text className="ml-2 text-2xl text-gray-500 font-bold">Edit Details</Text>
            </View>

            {/* Category Selector */}
            <Text className="text-lg mb-2 text-gray-500 font-bold">Change category</Text>
            <CategorySelector
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              isImportant={isImportant}
              setIsImportant={setIsImportant}
            />

            {/* Task Entry Editing */}
            <Text className="text-lg mb-2 text-gray-500 font-bold">Edit Task</Text>
            <TextInput
                placeholder="Task title"
                value={task}
                onChangeText={setTask}
                returnKeyType="done"
                onSubmitEditing={handleUpdate}
                className="border p-2 rounded mb-4 w-full"
            />

            {/* Change selected due date */}
            <DatePicker 
            date={dueDate || new Date()} 
            onDateChange={setDueDate} 
            isSet={!!dueDate} 
          />


          <View className="flex-row justify-evenly mt-8">
            <Pressable
              onPress={onClose}
              className="items-center border p-1 rounded w-1/4"
            >
              <Ionicons name="trash-outline" size={20} />
              <Text className="text-center">Cancel</Text>
            </Pressable>

            <Pressable
              onPress={handleUpdate}
              className="items-center border p-1 rounded w-1/4"
            >
              <Ionicons name="checkmark-outline" size={20} />
              <Text className="text-center">Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;
