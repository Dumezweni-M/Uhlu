import { useState } from "react";
import { View, TextInput, Pressable, Text } from 'react-native'
import { useSQLiteContext } from "expo-sqlite";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation } from '@react-navigation/native'



const AddItem = ({onAdd}) => {
    const [ task, setTask ] = useState ('');
    const db = useSQLiteContext();
    const navigation = useNavigation();

    const handleSubmit = async () => {
        try {
            await db.runAsync(`INSERT INTO list (item) VALUES (?)`, [task]);
            setTask('');
            if (onAdd) onAdd();
        
       
            
        } catch (error) {
            console.error("Error on INSERT attempt", error )
        }
    }
    return (
        <View className="w-[100%] items-center justify-between font-bold p-2 flex-row flex-wrap">
            <TextInput className="m-2 pl-4 border border-gray-400 rounded-md w-4/5 bg-white"
            placeholder="Add Task Item"
            value={task}
            onChangeText={ setTask }
            ></TextInput>

            <Pressable onPress={handleSubmit} className="px-2 py-2 mr-1 rounded-full bg-black shadow-md">
                <Ionicons name="add" color="white" size={20}/>
            </Pressable>
        </View>
    )
}


export default AddItem;