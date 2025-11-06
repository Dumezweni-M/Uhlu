import PageWrapper from "../components/PageWrapper";
import { Text, View } from "react-native";

const About = ({ navigation }) => {
    return (
        <PageWrapper>
            <View className="flex-1 h-[94%] border justify-between">

                <Text className="text-lg font-bold my-1 mx-3">Why Uhlu?</Text> 

               <Text className=" w-2/3 border p-2 my-1 mx-3 text-md rounded">
                    Uhlu comes from the Zulu word for "list" — Simple, calm, and intentional. 
                    This app is built to bring clarity, not overwhelm.
               </Text>

                <Text className="border p-2 my-1 mx-3 text-md rounded wrap"> 
                Most task apps are loud, busy, thus requiring time and effort to 
                maintain. Uhlu keeps your tasks simple, personal. 
                Just the things that matter — no clutter.
                </Text>

                <View className="flex w-full p-4 gap-2 items-center justify-center">
                    <View className="border w-2/3 rounded p-2 shadow-md">
                        <Text className="text-xl font-bold my-1 mx-3">Core Ideas</Text> 
                        <Text className="mx-3 text-md rounded">• Slow living productivity</Text>
                        <Text className="mx-3 text-md rounded">• Progress through consistency</Text>
                        <Text className="mx-3 text-md rounded">• Calm design, clear focus</Text>
                    </View>
                    <View className="border w-2/3 rounded p-2 shadow-md">
                        <Text className="text-xl font-bold my-1 mx-3">Current Features</Text> 
                        <Text className="mx-3 text-md rounded">• Create and manage daily tasks</Text>
                        <Text className="mx-3 text-md rounded">• Mark tasks as complete</Text>
                        <Text className="mx-3 text-md rounded">• View completed progress separately</Text>
                    </View>
                    <View className="border w-2/3 rounded p-2 shadow-md">
                        <Text className="text-xl font-bold my-1 mx-3">Future Plans</Text> 
                        <Text className=" mx-3 text-md rounded">• Weekly reflection</Text>
                        <Text className=" mx-3 text-md rounded">• Gentle reminders</Text>
                        <Text className=" mx-3 text-md rounded">• Light personalization & themes</Text>
                        <Text className=" mx-3 text-md rounded">• Speech to Text</Text>
                    </View>
                </View>

                <Text className="border p-2 my-1 mx-3 text-md rounded">
                Version: 1.0.0
                </Text>




              
   

            </View>
        </PageWrapper>
    )
}

export default About;