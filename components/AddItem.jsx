import { useState } from "react";
import { View, TextInput, Pressable, Text } from 'react-native'
import { useSQLiteContext } from "expo-sqlite";
import { useNavigation } from "@react-navigation/native";


const AddItem = () => {
    const [ task, setTask ] = useState ('');
    const db = useSQLiteContext();
    const navigation = useNavigation();

    const handleSubmit = async () => {
        try {
            await db.runAsync(
                `INSERT INTO list (item) VALUES (?)`,
                [task.item]
            );
    
            setTask('');
            navigation.navigate("Home");
            
        } catch (error) {
            console.error("Error on INSERT attempt", error )
        }
    }
    return (
        <View className="w-[100%] items-center font-bold p-2 flex-row">
            <TextInput className="border m-2 rounded-md w-3/4"
            placeholder="Add Task Item"
            value={task.item}
            onChangeText={(text) => setTask({ item: text})}
            ></TextInput>



            <Pressable onPress={handleSubmit} className="border p-2 rounded-md">
                <Text className="">Add Item</Text>
            </Pressable>
        </View>
    )
}


export default AddItem;