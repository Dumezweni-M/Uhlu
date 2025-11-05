import { useSQLiteContext, SQLiteProvider } from "expo-sqlite";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import Home from "./pages/Home";
import Completed from "./pages/Completed";

const Stack = createNativeStackNavigator();


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

      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Completed" component={Completed} />
        </Stack.Navigator>
      </NavigationContainer>
   </SQLiteProvider>
  );
}


