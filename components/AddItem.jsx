import { useState } from "react";
import { View, TextInput, Pressable, Text, Modal } from 'react-native'
import { useSQLiteContext } from "expo-sqlite";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation } from '@react-navigation/native'
import { Picker } from "@react-native-picker/picker";



const AddItem = ({ onAdded }) => {
    const [ task, setTask ] = useState ('');
    const [ category, setCategory ] = useState('')
    const db = useSQLiteContext();
    const navigation = useNavigation();

    const [value, setValue] = useState("")

    const handleSubmit = async () => {
        if (!task.trim()) {
        // Optional: show message or vibration
        console.log("Input is empty");
        return;
        }
        try {
            await db.runAsync(`INSERT INTO list (item, category) VALUES (?, ?)`, [task, category]);
            setTask('');
            onAdded && onAdded();
        } catch (error) {
            console.error("Error on INSERT attempt", error )
        }
    }

    return (
            <View className="w-[100%] items-center justify-between font-bold p-2 mb-1 flex-row flex-wrap shadow-md bg-gray-400">
                <TextInput className="pl-4 border border-gray-300 rounded-md w-[85%] bg-white"
                placeholder="Add Task Item"
                value={task}
                onChangeText={ setTask }
                ></TextInput>



                <Pressable onPress={handleSubmit} className="px-2 py-2 mr-1 rounded-full bg-gray-800 border-4 border-white shadow-md">
                    <Ionicons name="add" color="white" size={20}/>
                </Pressable>
            </View>
    )
}
export default AddItem;