import { useEffect, useState, useCallback, useRef } from "react";
import { Pressable, Text, View } from "react-native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { FlashList } from "@shopify/flash-list";
import Ionicons from "@react-native-vector-icons/ionicons";
import RadioButton from "./RadioButton";


const formatDueDate = (dateString) => {
    if (!dateString) return null;

    // IMPORTANT: Append 'T00:00:00' to force local parsing and prevent timezone shift
    const date = new Date(dateString + 'T00:00:00'); 
    
    // Check if the date is valid before formatting
    if (isNaN(date.getTime())) return dateString; // Return raw string if invalid
    
    // Apply the desired format: 1 Jan 2026
    return date.toLocaleDateString('en-UK', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
};


const List = ({refresh, onLongPressItem}) => {
    const [ list, setList] = useState([]);
    const db = useSQLiteContext();
    const listRef = useRef(null)
    const [ selectedItemId, setSelectedItemId] = useState(null)
    
    const toggleDetails = (itemId) => {
    setSelectedItemId(prevId => (prevId === itemId ? null : itemId));}


    const LoadList = async () => {
        try {
            const results = await db.getAllAsync(`SELECT * FROM list WHERE isComplete = 0 ORDER BY createdAt DESC`);
            setList(results);
        } catch (error){
            console.error("Couldnt Fetch List", error)
        }
    }

useEffect(() => {
  LoadList().then(() => {
    setTimeout(() => {
      listRef.current?.scrollToOffset({ offset: 0, animated: true });
    }, 250); // small delay to ensure DB render
  });
}, [refresh]);


    return (
        
        <>
                    <FlashList
                    ref={listRef}
                    data={list}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                    <View className="border-b border-gray-300 rounded py-2 px-3  w-[96%] mb-0.5 flex-row justify-between items-center bg-white">
                        <View className="flex-row space-x-1 items-center">
        
                        <Text className={`
                        ${item.important === 1 
                            ? 'w-1.5 h-1.5 rounded-full absolute left-[-4] bg-orange-400'
                            : 'hidden'
                        }`}
                        >
                        </Text>
                        <Text className={` ${item.isComplete === 1 ? 'line-through text-gray-300 w-[80%] ' : 'border-gray-300 w-[10%]  max-h-5 text-gray-500  text-xs text-center '}`}>
                            {item.category}
                        </Text>

                    {/* Radio button for toggle isComplete */}
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

                        {/* Hide component if Item not marked as important */}

                    <Pressable
                    onPress={() => toggleDetails(item.id)}
                        onLongPress={() => onLongPressItem(item)}
                        delayLongPress={400}
                        className="w-[80%]">
                        <View className="flex-row">
                            <Text className={` ${item.isComplete === 1 ? 'line-through text-gray-500 w-[80%] ' : 'font-bold  w-[80%] text-gray-900'}`}>
                                {item.item}
                            </Text>

                        </View>

                    {/* Task Item Expanded Details */}
                    {item.due && selectedItemId === item.id && ( 
                    
                        <Text className="text-md ml-2 w-2/6 text-gray-600">
                            Due: {formatDueDate(item.due)}
                        </Text>
                        )}
                    </Pressable>
                </View>
                
                <View className="flex-row ">

                {/* Delete Task */}
                <Ionicons
                    name="trash-outline"
                    color="black"
                    size={18}
                    onPress={async () => {
                    try {
                        await db.runAsync(`DELETE FROM list WHERE id = ?`, [item.id]);
                        LoadList();
                    } catch (err) {
                        console.error('Failed to delete task', err);
                    }
                    }}
                    />
                </View>
                </View>
            )}
            ListEmptyComponent={
                <View className="border m-2 flex items-center">
                    <Text className="text-2xl text-gray-500 font-bold">No Items in List</Text>
                </View>
            }
            contentContainerStyle={{ paddingBottom: 60 }}
            style={{ flex: 1 }}
            />
        </>
                
    );
};

export default List;