
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable } from "react-native";
import PageWrapper from "../app-components/PageWrapper";
import { TextInput } from "react-native";
import Nav from "../app-components/Nav";


const List = () => {
  return (
        <PageWrapper>
          <View className="border flex-row">
            <TextInput className="border w-3/4 text-blue-500"/>
          
            <Pressable className="w-1/4 bg-blue-500 px-4 py-2 rounded-xl active:opacity-70">
                <Text className="text-white text-lg">Add</Text>
            </Pressable>
          </View>

        </PageWrapper>
  );
}

export default List;
