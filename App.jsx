import { useSQLiteContext, SQLiteProvider } from "expo-sqlite";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";


import Home from "./pages/Home";
import About from "./pages/About";
import SplashSrcn from "./pages/Splash";
import Work from "./pages/Work";
import ModalView from "./components/Modal";
import Completed from "./pages/Completed";
import AllTasks from "./pages/AllTasks";
import Daily from "./pages/Daily";




const Stack = createNativeStackNavigator();


export default function App() {
  return (
       <SQLiteProvider
          databaseName="Uhlu.db"
            onInit={async (db) => {
            await db.execAsync(`
              CREATE TABLE IF NOT EXISTS list (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                item TEXT NOT NULL,
                due TEXT,
                category TEXT,
                isComplete INTEGER DEFAULT 0,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
              );
            `);

            // Migration for existing installs
            try {
              // await db.execAsync(`ALTER TABLE list ADD COLUMN category TEXT;`);
              await db.execAsync(`ALTER TABLE list ADD COLUMN lastReset INTEGER DEFAULT 0;`);

            } catch (err) {
              // Column probably already exists — safe to ignore
            }

          }}
          options={{ useNewConnection: false }}
        >

      <PaperProvider>
        <NavigationContainer>
          <StatusBar hidden={true} />
          <Stack.Navigator initialRouteName="Daily" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AllTasks" component={AllTasks}/>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SplashScrn" component={SplashSrcn} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Work" component={Work} />
            <Stack.Screen name="ModalView" component={ModalView}/>
            <Stack.Screen name="Completed" component={Completed}/>
            <Stack.Screen name="Daily" component={Daily}/>
            
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
   </SQLiteProvider>
  );
}


