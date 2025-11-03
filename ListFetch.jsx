import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useSQLiteContext } from "expo-sqlite";

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

    useEffect(() => {
        LoadList();
    }, []);

    return (
        <FlatList
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View>
                <Text>{item.item}</Text>
                <Text>{item.due}</Text>
                <Text>{item.isComplete}</Text>
            </View>
        )}
        ListEmptyComponent={<Text>No Items in List</Text>}
        />
    );
};

export default List;