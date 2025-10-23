import React from "react"
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "./Nav";

const PageWrapper = ({ children }) => {
    return (
        <SafeAreaView className="flex-1 bg-blue-100 border">
            <View className="flex-1 justify-center items-center ">
                { children }   
            </View>
                <Nav className=""/>
        </SafeAreaView>
    )
}

export default PageWrapper;