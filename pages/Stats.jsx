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


const Stats = ({ navigation }) => {
    const [ refreshFlag, setRefrehFlag ] = useState(false);

    const triggerRefesh = useCallback(() => {
        setRefrehFlag((prev) => !prev);
    }, [])

    return (    

        <PageWrapper>
                <View className="flex-1 bg-white justify-evenly items-center flex-row flex-wrap">
                    <Text className="py-2 w-full text-center text-4xl my-10 font-bold px-2">
                        USER STATS PAGE
                    </Text>

                                <LinearGradient
                                    colors={["#7c3ef9", "#b197fc"]} // your gradient colors
                                    className="p-3 rounded shadow-lg"
                                >
                                <Ionicons name="stats-chart" size={100} color="white" />
                                </LinearGradient>

                                <LinearGradient
                                    colors={["#7c3ef9", "#b197fc"]} // your gradient colors
                                    className="p-3 rounded shadow-lg"
                                >
                                <Ionicons name="trending-up" size={100} color="white" />
                                </LinearGradient>

                                <Pressable onPress={() => navigation.navigate("Stats")} className="p-2 rounded bg-white items-center justify-center">
                                        <Ionicons name="trending-up" size={100}/>
                                        <Text className="text-2xl">Frequent Tasks</Text>
                                </Pressable>
                                <Pressable onPress={() => navigation.navigate("Stats")} className="p-2 rounded bg-white items-center justify-center">
                                        <Ionicons name="stats-chart" size={100}/>
                                        <Text className="text-2xl">Frequent Tasks</Text>
                                </Pressable>
                                <Pressable onPress={() => navigation.navigate("Stats")} className="p-2 rounded bg-white items-center justify-center">
                                        <Ionicons name="analytics" size={100}/>
                                        <Text className="text-2xl">Frequent Tasks</Text>
                                </Pressable>
                                <Pressable onPress={() => navigation.navigate("Stats")} className="p-2 rounded bg-white items-center justify-center">
                                        <Ionicons name="trending-down" size={100}/>
                                        <Text className="text-2xl">Frequent Tasks</Text>
                                </Pressable>


                </View>
                
                <Tabs/>
        </PageWrapper>
    )
}

export default Stats;