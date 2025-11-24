import Header from "../components/Header";
import PageWrapper from "../components/PageWrapper";
import { Text, View, Pressable } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import Tabs from "../components/Tabs";
import NoteModal from "../components/NoteModal";
import { useState, useCallback } from "react";
import FetchNotes from "../components/NotesFetch";

const Notes = () => {
        const [ refreshFlag, setRefreshFlag ] = useState(false);
        const [ showModal, setShowModal ] = useState(false)
        // const [ editItem, setEditItem ] = useState(null);
        // const [ showEditModal, setShowEditModal ] = useState(false)
    
        // const openEditModal = (item) => {
        // setEditItem(item);
        // setShowEditModal(true);
        // };
    
        // const closeEditModal = () => setShowEditModal(false);
    
        const triggerRefresh = useCallback(() => {
            setRefreshFlag((prev) => !prev);
        }, [])
    
        const toggleModal = () => {
            setShowModal(prev => !prev)
        }

        const handleNoteAdded = () => {
        triggerRefresh(); 
    }


    return (
        <PageWrapper>
            <Header/>
            <View className="flex-1 border">
                {/* Page Title */}
                <View className="border-b border-gray-400 px-4 pt-2 pb-2 mb-4 w-[100%] flex-row items-center">
                    <Ionicons name="document-outline" size={30} color="black"/>
                    <Text className="ml-2 text-2xl text-gray-500 font-bold">Notes</Text>
                </View>
                <FetchNotes refresh={refreshFlag}/>
            </View>
            

            {/* Toggle Modal View*/}
            <Pressable title="Toggle" onPress={toggleModal} className="bg-black p-2 rounded-full bottom-[9%] right-[44%]  absolute shadow-lg" >
                <Ionicons name="add" size={30} color="white"/>
            </Pressable>

            <NoteModal visible={showModal} onClose={toggleModal} onAdded={handleNoteAdded} triggerRefresh={triggerRefresh}/>
            
            <Tabs/>
        </PageWrapper>
    )
}

export default Notes;