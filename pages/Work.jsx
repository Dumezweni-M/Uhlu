// app-pages/Home.jsx
import React, { useCallback } from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import { useState, useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";
import PageWrapper from "../components/PageWrapper";
import AddItem from "../components/AddItem";
import List from "../components/ListFetch";
import HeaderMenu from "../components/HeaderMenu";
import Tabs from "../components/Tabs";
import Ionicons from "@react-native-vector-icons/ionicons";
import { Divider } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";


const Work = ({ navigation }) => {
    const [ refreshFlag, setRefrehFlag ] = useState(false);

    const triggerRefesh = useCallback(() => {
        setRefrehFlag((prev) => !prev);
    }, [])

    return (    

        <PageWrapper>
                <View className="flex-1 bg-white justify-evenly items-center flex-row flex-wrap">
                    <Text className="py-2 w-full text-center text-4xl my-10 font-bold px-2">
                        WORK TASKS
                    </Text>
                </View>
                <Tabs/>
        </PageWrapper>
    )
}

export default Work;