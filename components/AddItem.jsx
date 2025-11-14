import { useState, useEffect } from "react";
import { View, TextInput, Pressable, Text, Modal } from 'react-native'
import { useSQLiteContext } from "expo-sqlite";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation } from '@react-navigation/native'
import { Picker } from "@react-native-picker/picker";
import { useRoute } from "@react-navigation/native";



const AddItem = ({ onAdded }) => {
    const [ task, setTask ] = useState ('');
    const [ category, setCategory ] = useState('')
    const db = useSQLiteContext();
    const navigation = useNavigation();
    const route = useRoute();

    const [value, setValue] = useState("")
    
    // Set Category Based on screen name
    useEffect(() => {
    const routeName = route.name?.toLowerCase();
        if (["daily", "home", "work"].includes(routeName)) {
        setCategory(routeName);
        } else {
        setCategory("misc");
        }
    }, [route.name]);

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
            <View className="w-[100%] items-center justify-between font-bold p-1 mb-1 flex-row flex-wrap shadow-md ">
                <TextInput className="pl-4 border border-gray-300 rounded-md w-[85%] bg-white"
                placeholder={`Add ${category} task`}
                value={task}
                onChangeText={ setTask }
                returnKeyType="done"
                onSubmitEditing={handleSubmit}
                ></TextInput>

                <Pressable onPress={handleSubmit} className="px-2 py-2 mr-1 rounded-full bg-gray-800 border-4 border-white shadow-md">
                    <Ionicons name="add" color="white" size={20}/>
                </Pressable>
            </View>
    )
}
export default AddItem;