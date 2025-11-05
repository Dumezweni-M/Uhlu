import { useState } from "react";
import { View, TextInput, Pressable, Text } from 'react-native'
import { useSQLiteContext } from "expo-sqlite";
import Ionicons from "@react-native-vector-icons/ionicons";



const AddItem = ({onAdd}) => {
    const [ task, setTask ] = useState ('');
    const db = useSQLiteContext();
   
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
        <View className="w-[100%] items-center font-bold p-2 flex-row bg-sky-300">
            <TextInput className="m-2 pl-4 rounded-md w-4/5 bg-white"
            placeholder="Add Task Item"
            value={task}
            onChangeText={ setTask }
            ></TextInput>



            <Pressable onPress={handleSubmit} className="p-2 rounded-full bg-white">
                <Ionicons name="add" color="black" size={20}/>
            </Pressable>
        </View>
    )
}


export default AddItem;