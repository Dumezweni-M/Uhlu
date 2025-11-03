import { useState } from "react";
import { View, TextInput, Pressable, Text } from 'react-native'
import { useSQLiteContext } from "expo-sqlite";


const AddItem = () => {
    const [ form, setForm ] = useState ({
        item: '',
        due: '',
        isComplete: ''
    });

    const db = useSQLiteContext();

    const handleSubmit = async () => {
        try {
            await db.runAsync(
                `INSERT INTO list (item, due, isComplete) VALUES (?, ?, ?)`,
                [form.item, form.due, form.isComplete]
            );
    
            setForm({
                item: '',
                due: '',
                isComplete: ''
            });
        } catch (error) {
            console.error("Error on INSERT attempt", error )
        }
    }
    return (
        <View className="text-3xl font-bold text-blue-500 mb-4">
            <TextInput 
            placeholder="Add Task Item"
            value={form.item}
            onChangeText={(text) => setForm({ item: text})}
            ></TextInput>
            <TextInput
            placeholder="Add Task Item"
            value={form.due}
            onChangeText={(text) => setForm({ due: text})}
            ></TextInput>
            <TextInput
            placeholder="Add Task Item"
            value={form.isComplete}
            onChangeText={(text) => setForm({ isComplete: text})}
            ></TextInput>

            <Pressable onPress={handleSubmit} className="border">
                <Text>Add Item</Text>
            </Pressable>
        </View>
    )
}


export default AddItem;