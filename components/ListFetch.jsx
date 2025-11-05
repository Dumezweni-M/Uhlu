import { useEffect, useState, useCallback } from "react";
import { Pressable, Text, View } from "react-native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { FlashList } from "@shopify/flash-list";
import { useFocusEffect } from "@react-navigation/native";
import Ionicons from "@react-native-vector-icons/ionicons";
import RadioButton from "./RadioButton";


const List = () => {
    const [ list, setList] = useState([]);
    const db = useSQLiteContext(); 

    const LoadList = async () => {
        try {
            const results = await db.getAllAsync(`SELECT * FROM list ORDER BY createdAt DESC`);
            setList(results);
        } catch (error){
            console.error("Couldnt Fetch List", error)
        }
    }

    const sortedList = list.sort((a, b) => a.isComplete - b.isComplete);


  useFocusEffect(
    useCallback(() => {
      LoadList();
    }, [])
  );

    return (
        
        <>
                    <FlashList
                    data={sortedList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                    <View className="border-b border-gray-300 rounded py-2 px-3  w-[96%] ml-2 mb-1 flex-row justify-between items-center bg-white">
                        <View className="flex-row space-x-4 items-center">
        
                    {/* Radio button for isComplete */}
                    <RadioButton
                    isChecked={item.isComplete === 1} 
                    onToggle={async () => {
                        try {
                        await db.runAsync(
                            `UPDATE list SET isComplete = ? WHERE id = ?`,
                            [item.isComplete === 1 ? 0 : 1, item.id]
                        );
                        LoadList();
                        } catch (err) {
                        console.error('Failed to toggle task', err);
                        }
                    }}
                    />
        
                    <Text className={` ${item.isComplete === 1 ? 'font-normal line-through text-gray-500' : 'font-normal'}`}>
                        {item.item}
                    </Text>
                    <Text className={` ${item.isComplete === 1 ? 'font-normal line-through text-gray-500' : 'font-normal'}`}>
                        {item.due}
                    </Text>
                </View>
        
                {/* Trash icon for deletion */}
                <Ionicons
                    name="trash"
                    color="black"
                    size={18}
                    onPress={async () => {
                    try {
                        await db.runAsync(`DELETE FROM list WHERE id = ?`, [item.id]);
                        LoadList(); // refresh after deletion
                    } catch (err) {
                        console.error('Failed to delete task', err);
                    }
                    }}
                />
                </View>
            )}
            ListEmptyComponent={
                <View className="border m-2 flex items-center">
                    <Text className="text-2xl text-gray-500 font-bold">No Items in List</Text>
                </View>
            }
            />
        </>
                
    );
};

export default List;