import { useEffect, useState, useCallback, useRef } from "react";
import { Pressable, Text, View } from "react-native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { FlashList } from "@shopify/flash-list";
import Ionicons from "@react-native-vector-icons/ionicons";


const FetchNotes = ({refresh, onLongPressItem}) => {
    const [ noteList, setNoteList] = useState([]);
    const db = useSQLiteContext();
    const listRef = useRef(null)
    const [ selectedItemId, setSelectedItemId] = useState(null)

    const toggleDetails = (itemId) => {
    setSelectedItemId(prevId => (prevId === itemId ? null : itemId));}
    
    const LoadNotesList = async () => {
        try {
            const results = await db.getAllAsync(`SELECT * FROM Notes ORDER BY createdAt DESC`);
            setNoteList(results);
        } catch (error){
            console.error("Couldnt Fetch List", error)
        }
    }

useEffect(() => {
  LoadNotesList().then(() => {
    setTimeout(() => {
      listRef.current?.scrollToOffset({ offset: 0, animated: true });
    }, 250); // small delay to ensure DB render
  });
}, [refresh]);


    return (
        
        <>
        <FlashList
            ref={listRef}
            data={noteList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
            <View className="border-b border-gray-300 rounded py-2 px-3  w-[96%] mb-0.5 flex-row justify-between items-center bg-white">
                <View className="flex-row space-x-1 items-center">              

                    <Pressable
                        onPress={() => toggleDetails(item.id)}
                        onLongPress={() => onLongPressItem(item)}
                        delayLongPress={400}
                        className="w-[80%]">
                        <View className="flex-row">
                            <Text className={'font-bold  w-[80%] text-gray-900'}>
                                {item.title}
                            </Text>

                        </View>
                                            {item.content && selectedItemId === item.id && ( 
                                            
                                                <Text className="text-md ml-2 mt-2 rounded w-[140%] p-2  text-gray-700 border">
                                                    Note: {item.content}
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
                        await db.runAsync(`DELETE FROM Notes WHERE id = ?`, [item.id]);
                        LoadNotesList();
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
                    <Text className="text-2xl text-gray-500 font-bold">No Notes in List</Text>
                </View>
            }
            contentContainerStyle={{ paddingBottom: 60 }}
            style={{ flex: 1 }}
            />
        </>
                
    );
};

export default FetchNotes;