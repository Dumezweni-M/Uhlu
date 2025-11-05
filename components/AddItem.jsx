import { useState } from "react";
import { View, TextInput, Pressable, Text } from 'react-native'
import { useSQLiteContext } from "expo-sqlite";



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
        <View className="w-[100%] items-center font-bold p-2 flex-row">
            <TextInput className="border m-2 rounded-md w-3/4"
            placeholder="Add Task Item"
            value={task}
            onChangeText={ setTask }
            ></TextInput>



            <Pressable onPress={handleSubmit} className="border p-2 rounded-md">
                <Text className="">Add Item</Text>
            </Pressable>
        </View>
    )
}


export default AddItem;