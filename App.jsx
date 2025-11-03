import { View, Text, Pressable } from "react-native";
import { useSQLiteContext, SQLiteProvider } from "expo-sqlite";
import AddItem from "./AddItem";
import List from "./ListFetch";


export default function App() {
  return (
       <SQLiteProvider
   databaseName="Uhlu.db"
   onInit={ async (db) => {
    await db.execAsync (`
        CREATE TABLE IF NOT EXISTS list (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          item TEXT NOT NULL,
          due TEXT,
          isComplete INTEGER DEFAULT 0
        );
      `)
   }}
   options={{useNewConnection: false}}
   >

    <View className="border">
      <Text>SQLite Provider</Text>
    </View>

    <AddItem/>
    <List/>


    <View className="flex-1 items-center justify-center bg-gray-800">
      <Text className="text-3xl font-bold text-blue-500 mb-4">
        INSTALL SQLITE      </Text>

      <Pressable className="bg-blue-500 px-4 py-2 rounded-xl active:opacity-70">
        <Text className="text-white text-lg">SQLite Install</Text>
      </Pressable>
    </View>
   </SQLiteProvider>
  );
}


