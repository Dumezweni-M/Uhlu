
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Platform } from "react-native";
import { View } from "react-native";
import Header from "../components/Header"

const PageWrapper = ({children}) => {
    return (
        <SafeAreaView className="flex-1 w-full h-full rounded-full">
            <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === "ios" ? "padding" : "height" }>
                <View className="flex-1">
                    {/* <Header/> */}
                    { children }
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )   
}
export default PageWrapper;