import { useSQLiteContext, SQLiteProvider } from "expo-sqlite";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";


import Home from "./pages/Home";
import List from "./components/ListFetch";
import About from "./pages/About";
import SplashSrcn from "./pages/Splash";
import Completed from "./pages/Completed";




const Stack = createNativeStackNavigator();


export default function App() {
  return (
       <SQLiteProvider
          databaseName="Uhlu.db"
          onInit={ async (db) => {
            await db.execAsync(`
              CREATE TABLE IF NOT EXISTS list (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                item TEXT NOT NULL,
                due TEXT,
                isComplete INTEGER DEFAULT 0,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
              );
            `);
          }}
          options={{useNewConnection: false}}
          >
      <PaperProvider>
        <NavigationContainer>
          <StatusBar hidden={true} />
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Completed" component={Completed} />
            <Stack.Screen name="SplashScrn" component={SplashSrcn} />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
   </SQLiteProvider>
  );
}


