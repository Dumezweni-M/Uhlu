import { useEffect, useState, useCallback } from "react";
import { Pressable, Text, View } from "react-native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import { FlashList } from "@shopify/flash-list";
import { useFocusEffect } from "@react-navigation/native";
import PageWrapper from "./PageWrapper";
import Ionicons from "@react-native-vector-icons/ionicons";
import RadioButton from "./RadioButton";


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
        // <FlashList
        // data={list}
        // keyExtractor={(item) => item.id.toString()}
        // renderItem={({ item }) => (
        //     <View className="border rounded  p-2 mt-1 w-[96%] ml-2 mb-1 flex-row justify-between items-center bg-white">
        //         <View className="flex-row space-x-4 ">
        //             <Pressable className="border rounded-full p-2"/>
        //             <RadioButton/>
        //             <Text className="">{item.item}</Text>
        //         </View>


        //         <Ionicons name="trash" color="black" size={15}/>

        //     </View>
        // )}
        // ListEmptyComponent={<Text>No Items in List</Text>}
        // />

         <FlashList
            data={list}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
            <View className="border-b border-gray-300 rounded py-2 px-3  w-[96%] ml-2 mb-1 flex-row justify-between items-center bg-white">
                <View className="flex-row space-x-4 items-center">

            {/* Radio button for isComplete */}
            <RadioButton
            isChecked={item.isComplete === 1} // assuming 0/1 in SQLite
            onToggle={async () => {
              try {
                await db.runAsync(
                  `UPDATE list SET isComplete = ? WHERE id = ?`,
                  [item.isComplete === 1 ? 0 : 1, item.id]
                );
                LoadList(); // refresh the list after toggling
              } catch (err) {
                console.error('Failed to toggle task', err);
              }
            }}
            />

            <Text className={` ${item.isComplete === 1 ? 'font-normal line-through text-gray-500' : 'font-bold'}`}>
                {item.item}
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
    ListEmptyComponent={<Text>No Items in List</Text>}
  />
                
    );
};

export default List;