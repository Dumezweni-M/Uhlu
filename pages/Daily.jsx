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


const Daily = ({refresh}) => {
    const [ list, setList] = useState([]);
    const db = useSQLiteContext();
    const [ refreshFlag, setRefrehFlag ] = useState(false);
    const [ showList, setShowList] = useState(true)
    const triggerRefesh = useCallback(() => {
        setRefrehFlag((prev) => !prev);
    }, [])

    const LoadList = async () => {
        try {
            const results = await db.getAllAsync(
                `SELECT * FROM list WHERE category = "daily"`
            );
            setList(results);
        } catch (error){
            console.error("Couldnt Fetch List", error)
        }
    };

    const sortedList = list.sort((a, b) => a.isComplete - b.isComplete);

  useEffect(() => {
    LoadList()
  }, [refresh, refreshFlag]);

  useEffect(() => {
    const resetInterval = setInterval(async () => {
        try {
            const now = Date.now();
            // const oneMinute = 60 * 1000; // Testing
            const oneDay = 24 * 60 * 60 * 1000; // Production

            // Reset only if more than 1 minute has passed
            const tasks = await db.getAllAsync(`SELECT * FROM list WHERE category = 'daily'`);

            tasks.forEach(async (task) => {
                if (!task.lastReset || now - task.lastReset >= oneDay) {
                    await db.runAsync(
                        `UPDATE list SET isComplete = 0, lastReset = ? WHERE id = ?`,
                        [now, task.id]
                    );
                }
            });

            LoadList();
        } catch (err) {
            console.log("Failed to reset daily tasks:", err);
        }
    }, 5000); // Check every 5 seconds

    return () => clearInterval(resetInterval);
}, []);

    return (
        
    <PageWrapper>
    <Header />
    <AddItem onAdded={triggerRefesh} />

    {/* Middle Scrollable Area */}
    <View className="flex-1">

    {/* Toggle header */}
    <Pressable
      onPress={() => setShowList(prev => !prev)}
      className="border-b border-gray-400 px-4 pt-2 pb-2 mb-4 w-[100%] flex-row items-center"
    >
      <Ionicons name="repeat-outline" size={30} color="black" />
      <Text className="ml-2 text-2xl text-gray-500 font-bold">
        Daily                                                        {showList ? "▼" : "▲"}
      </Text>
    </Pressable>

    {/* Collapsible list */}
    {showList && (
      <FlashList
        data={sortedList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="border-b border-gray-300 rounded py-2 px-4 w-[96%] ml-2 mb-1 flex-row justify-between items-center bg-white">

            <View className="flex-row space-x-2 items-center">
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
                    console.error("Failed to toggle task", err);
                  }
                }}
              />

              <View className="w-[90%]">
                <Text
                  className={`${
                    item.isComplete === 1
                      ? "font-bold line-through text-gray-500 w-[80%]"
                      : "font-bold w-[80%] text-gray-900"
                  }`}
                >
                  {item.item}
                </Text>
              </View>
            </View>

            <Ionicons
              name="trash-outline"
              color="black"
              size={18}
              onPress={async () => {
                try {
                  await db.runAsync(`DELETE FROM list WHERE id = ?`, [item.id]);
                  LoadList();
                } catch (err) {
                  console.error("Failed to delete task", err);
                }
              }}
            />
          </View>
        )}
      />
    )}
    </View>

    <Tabs />
  </PageWrapper>
                
    );
};

export default Daily;