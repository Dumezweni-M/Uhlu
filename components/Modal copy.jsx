import { TextInput, Text, View, Pressable, Modal } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons"; 
import Tabs from "./Tabs";
import { useState } from "react";
import { useSQLiteContext } from "expo-sqlite";



const ModalView = ({ visible, onClose }) => {
    // const categories = [ Daily, Home, Work,  ]

    return (
        
              <Modal visible={visible} transparent animationType="slide">
                <View className="flex-1 justify-center items-center bg-black/50">
                <View className="bg-white p-6 rounded-md w-4/5">
                    <Text className="text-lg font-bold mb-4">Add Item</Text>

                    <TextInput placeholder="Add To List" className="border m-2"></TextInput>

                    <View className="flex-row justify-evenly ">
                        <Pressable onPress={onClose} className="items-center border p-1 rounded w-1/4">
                        <Ionicons name="trash-outline" size={20} />
                        <Text className="text-center">Cancel</Text>
                        </Pressable>

                        <Pressable onPress={onClose} className="items-center border p-1 rounded w-1/4">
                        <Ionicons name="checkmark-outline" size={20} />
                        <Text className="text-center">Save</Text>
                        </Pressable>

                        
                    </View>
                </View>
                </View>
            </Modal>
        
    )
}

export default ModalView;