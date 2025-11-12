// app-pages/Home.jsx
import React, { useCallback } from "react";
import { View, Text, Pressable, ImageBackground, Button } from "react-native";
import { useState, useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";
import PageWrapper from "../components/PageWrapper";
import AddItem from "../components/AddItem";
import List from "../components/ListFetch";
import HeaderMenu from "../components/HeaderMenu";
import Tabs from "../components/Tabs";
import ModalView from "../components/Modal";
import Ionicons from "@react-native-vector-icons/ionicons";


const Home = ({ navigation }) => {
    const [ refreshFlag, setRefrehFlag ] = useState(false);
    const [ showModal, setShowModal ] = useState(false)
    const triggerRefesh = useCallback(() => {
        setRefrehFlag((prev) => !prev);
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
                <AddItem onAdded={triggerRefesh} />
                <List refresh={refreshFlag} />

                {/* Toggle Modal List */}
                <Pressable title="Toggle" onPress={toggleModal} className="bg-sky-600 p-3 rounded-full bottom-[9%] right-[43.5%]  absolute shadow-lg" >
                    <Ionicons name="add" size={30} color="white"/>
                </Pressable>

                {/* Quick Navigation Tabs */}
                <Tabs/>
                <ModalView visible={showModal} onClose={toggleModal}/>
        </PageWrapper>
        // </ImageBackground>
    )
}

export default Home;