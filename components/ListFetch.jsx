import { useEffect, useState, useCallback } from "react";
import { Text, View } from "react-native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { FlashList } from "@shopify/flash-list";
import { useFocusEffect } from "@react-navigation/native";
import PageWrapper from "./PageWrapper";


const List = () => {
    const [ list, setList] = useState([]);
    const db = useSQLiteContext(); 

    const LoadList = async () => {
        try {
            const results = await db.getAllAsync(`SELECT * FROM list`);
            setList(results);
        } catch (error){
            console.error("Couldnt Fetch List", error)
        }
    }

  useFocusEffect(
    useCallback(() => {
      LoadList();
    }, [])
  );

    return (
        <FlashList
        data={list}
        estimatedItemSize={50}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View className="border border-gray-500 rounded  p-2 mt-1 w-[96%] ml-2">
               
                <Text className="">{item.item}</Text>
            </View>
        )}
        ListEmptyComponent={<Text>No Items in List</Text>}
        />
                
    );
};

export default List;