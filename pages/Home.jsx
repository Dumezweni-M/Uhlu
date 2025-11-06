// app-pages/Home.jsx
import React, { useCallback } from "react";
import { View, Text, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";
import PageWrapper from "../components/PageWrapper";
import AddItem from "../components/AddItem";
import List from "../components/ListFetch";


const Home = ({ navigation }) => {
    const [ refreshFlag, setRefrehFlag ] = useState(false);

    const triggerRefesh = useCallback(() => {
        setRefrehFlag((prev) => !prev);
    }, [])

    return (
        <PageWrapper>
                <AddItem onAdded={triggerRefesh} />
                <List refresh={refreshFlag} />
        </PageWrapper>
    )
}

export default Home;