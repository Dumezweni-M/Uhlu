
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Platform } from "react-native";
import { View } from "react-native";

const PageWrapper = ({children}) => {
    return (
        <SafeAreaView className="flex-1 w-full h-full bg-white">
            <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === "ios" ? "padding" : "height" }>
                <View className="flex-1">
                    { children }
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )   
}
export default PageWrapper;