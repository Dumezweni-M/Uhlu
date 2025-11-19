import Header from "../components/Header";
import PageWrapper from "../components/PageWrapper";
import { Text, View, Pressable } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import Tabs from "../components/Tabs";

const Notes = () => {
    return (
        <PageWrapper>
            <Header/>
            <View className="flex-1">
                {/* Page Title */}
                <View className="border-b border-gray-400 px-4 pt-2 pb-2 mb-4 w-[100%] flex-row items-center">
                    <Ionicons name="document-outline" size={30} color="black"/>
                    <Text className="ml-2 text-2xl text-gray-500 font-bold">Notes</Text>
                </View>

                <View className="flex-1 items-center justify-center">
                    <Text className="text-2xl font-bold">
                        THIS PAGE IS UNDER CONSTRUCTION
                    </Text>

                    <View className="flex-row max-w-[80%] justify-center items-center">
                        <Ionicons name="hammer-outline" size={30} color="black"/>
                        {/* <Ionicons name="build-outline" size={100} color="black"/> */}
                    <Text className="text-xl p-8">
                        The "Completed Tasks" page has been moved to the burger-menu (top-right) to make 
                        space for Note taking capabilities.


                    </Text>
                    </View>

                

                    <Ionicons name="construct-outline" size={150} color="black"/>
                    
                    <Text className="text-2xl font-bold mt-8">
                        CHECK BACK SOON
                    </Text>
                </View>

                {/* Notes list */}
            </View>



            <Tabs/>
        </PageWrapper>
    )
}

export default Notes;