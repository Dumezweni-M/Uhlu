import { useEffect, useState, useCallback } from "react";
import { Pressable, Text, View } from "react-native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { FlashList } from "@shopify/flash-list";
import Ionicons from "@react-native-vector-icons/ionicons";
import RadioButton from "../components/RadioButton";
import PageWrapper from "../components/PageWrapper";
import Tabs from "../components/Tabs";
import AddItem from "../components/AddItem";
import Header from "../components/Header";


const Home = ({refresh}) => {
    const [ list, setList] = useState([]);
    const db = useSQLiteContext(); 
    
    const [ refreshFlag, setRefrehFlag ] = useState(false);
    const triggerRefesh = useCallback(() => {
        setRefrehFlag((prev) => !prev);
    }, [])

    const LoadList = async () => {
        try {
            const results = await db.getAllAsync(`SELECT * FROM list WHERE category = "home" AND isComplete = 0`);
            setList(results);
        } catch (error){
            console.error("Couldnt Fetch List", error)
        }
    }

    const sortedList = list.sort((a, b) => a.isComplete - b.isComplete);

  useEffect(() => {
    LoadList()
  }, [refresh, refreshFlag]);

    return (
        
        <PageWrapper>
            <Header/>
            <AddItem onAdded={triggerRefesh} />
            <View className="border-b border-gray-400 px-4 pt-2 pb-2 mb-4 w-[100%] flex-row items-center">
                <Ionicons name="cart-outline" size={30} color="black"/>
                <Text className="ml-2 text-2xl text-gray-500 font-bold">Household</Text>
            </View>
                    <FlashList
                    data={sortedList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View className="border-b border-gray-300 rounded py-2 px-4  w-[96%] ml-2 mb-1 flex-row justify-between items-center bg-white">
                        <View className="flex-row space-x-2 items-center">
        
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
                    <View className="w-[90%]">
                        <Text className={` ${item.isComplete === 1 ? 'font-bold line-through text-gray-500 w-[80%] ' : 'font-bold w-[80%] text-gray-900'}`}>
                            {item.item}
                        </Text>
                    </View>
                </View>
                
                <View className="flex-row ">

                {/* Trash icon for deletion */}
                <Ionicons
                    name="trash-outline"
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
                </View>
            )}
            ListEmptyComponent={
                <View className="m-2 flex items-center">
                    <Text className="text-2xl text-gray-500 font-bold">No Items in List</Text>
                </View>
            }
            />
            <Tabs/>
        </PageWrapper>
                
    );
};

export default Home;