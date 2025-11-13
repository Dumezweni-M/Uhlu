// app-pages/Home.jsx
import React, { useCallback } from "react";
import { View, Text, Pressable, ImageBackground, Button } from "react-native";
import { useState, useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";
import PageWrapper from "../components/PageWrapper";
import AddItem from "../components/AddItem";
import List from "../components/ListFetch";
import Tabs from "../components/Tabs";
import ModalView from "../components/Modal";
import Ionicons from "@react-native-vector-icons/ionicons";
import Header from "../components/Header";


const AllTasks = ({ navigation }) => {
    const [ refreshFlag, setRefreshFlag ] = useState(false);
    const [ showModal, setShowModal ] = useState(false)
    const triggerRefresh = useCallback(() => {
        setRefreshFlag((prev) => !prev);
    }, [])

    const toggleModal = (() => {
        setShowModal(prev => !prev)
    })



    return (    
    //     <ImageBackground
    //   source={require("../assets/alexander-tsang-qcoHZzJAdhM-unsplash.jpg")}
    //   style={{ flex: 1, width: "100%", height: "100%" }}
    //   resizeMode="cover"
    // >
        <PageWrapper>
            <Header/>
                <View className="border-b border-gray-400 px-4 pt-2 pb-2 w-[100%] flex-row items-center bg-none">
                    <Ionicons name="eye-outline" size={30} color="black"/>
                    <Text className="ml-2 text-2xl text-gray-500 font-bold">Overview</Text>
                </View>
                
                {/* Show all items list */}
                <List refresh={refreshFlag} />

                {/* Toggle Modal View*/}
                <Pressable title="Toggle" onPress={toggleModal} className="bg-black p-2 rounded-full bottom-[9%] right-[44%]  absolute shadow-lg" >
                    <Ionicons name="add" size={30} color="white"/>
                </Pressable>

                {/* Quick Navigation Tabs */}
                <Tabs/>

                <ModalView visible={showModal} onClose={toggleModal} triggerRefresh={triggerRefresh}/>
        </PageWrapper>
        // </ImageBackground>
    )
}

export default AllTasks;