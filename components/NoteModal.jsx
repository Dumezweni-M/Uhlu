import { useState, useCallback } from "react";
import { View, Text, TextInput, Pressable, Modal } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import Ionicons from "@react-native-vector-icons/ionicons";

const NoteModal = ({ visible, onClose, onAdded }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [note, setNote] = useState("");
  const db = useSQLiteContext();


  const handleSubmit = async () => {
    if (!noteTitle.trim()) { 
        alert("Title Required 🙂");
        return; 
    }
    if (!noteTitle.trim() && !note.trim()) return;
    try {
      await db.runAsync(
        `INSERT INTO Notes (title, content) VALUES (?, ?)`,
        [noteTitle, note ]
      );
      setNoteTitle("");
      setNote("");
      onAdded();
      onClose();
    } catch (err) {
      console.error("Failed to add Note", err);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View className="flex-1 justify-center items-center bg-black/50 p-4">
        <View className="bg-white w-full px-6 py-12 rounded">

          <Text className="text-lg text-gray-500 font-bold mb-2">1. Note Title</Text>
          {/* Set task */}
          <TextInput
            placeholder="Note Title"
            value={noteTitle}
            onChangeText={setNoteTitle}
            className="border border-gray-700 p-2 rounded mb-8 w-full"
          />

          <Text className="text-lg text-gray-500 font-bold mb-2">2. Note</Text>
          {/* Set task */}
          <TextInput
            placeholder="Note"
            value={note}
            multiline={true}
            numberOfLines={10} //increase number of lines
            onChangeText={setNote}
            className="border border-gray-700 p-2 rounded mb-8 w-full"
          />


        <View className="flex-row justify-evenly mt-4 ">

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

export default NoteModal;
