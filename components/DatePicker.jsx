// DatePicker.jsx
import React, { useState } from "react";
import { View, Text, Pressable, Platform, Modal } from "react-native"; 
import Ionicons from "@react-native-vector-icons/ionicons";
import { Calendar } from 'react-native-calendars'; 


// Accepts date (can be null) and the setter function
const DatePicker = ({ date, onDateChange }) => {
    const [showPicker, setShowPicker] = useState(false);

    // Function to clear the date (kept from previous version)
    const clearDate = () => {
        onDateChange(null);
        setShowPicker(false); // Close modal after clearing
    };
    
    // Handler for the new Calendar component
    const handleDayPress = (day) => {
        // 'day' object contains 'dateString' (e.g., '2025-11-20')
        // We convert it to a Date object, forcing local parsing to prevent timezone errors
        const newDate = new Date(day.dateString + 'T00:00:00Z');
        
        onDateChange(newDate);
        setShowPicker(false); // Close the modal
    };
    
    // Determine the text to display (You can keep your old toLocaleDateString, but I'll use a simpler version here)
    const displayDateText = date 
        ? date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        })
        : "Optional";

    // Format the currently selected date for the Calendar's 'markedDates' prop
    // NOTE: The markedDates object defines the *visual* style of the selected day.
    const markedDate = date 
        ? { 
            [date.toISOString().split('T')[0]]: { 
                selected: true, 
                selectedColor: 'black', // 👈 Setting selected color here
                // Setting borderRadius for the selected day button/dot
                selectedDotStyle: { 
                    borderRadius: 8, // 👈 Equivalent to NativeWind 'rounded-md'
                    height: 36,      // Adjust height/width for non-circular shape
                    width: 36,
                    padding: 0
                } 
            } 
        }
        : {};


    return (
        <View className="mb-4">

            <View className="flex-row items-center w-full">
                {/* Pressable to open the picker (remains the same) */}
                <Pressable
                    onPress={() => setShowPicker(true)}
                    className="flex-row justify-between items-center border border-gray-600 p-2 rounded bg-white flex-1 "
                >
                    <Text className={`text-base ${date ? 'text-gray-600 text-sm' : 'text-gray-500 italic'}`}>
                        {displayDateText} 
                    </Text>
                    <Ionicons name="calendar-outline" size={20} color="gray" />
                </Pressable>

            </View>


            {/* 🌟 CUSTOM CALENDAR MODAL 🌟 */}
            <Modal visible={showPicker} transparent animationType="fade">
                <View className="flex-1 justify-center items-center bg-black/10 px-10 rounded-lg">
                    <View className="bg-white w-full rounded-xl shadow-xl">
                        
                        <Calendar
                            onDayPress={handleDayPress}
                            markedDates={markedDate}
                            
                            theme={{
                                // Main Theme Styles
                                todayTextColor: 'black',
                                selectedDayBackgroundColor: 'black', // 👈 Global selected day background color (less effective than markedDates)
                                selectedDayTextColor: '#ffffff',
                                arrowColor: 'black', // Changed arrow to black
                                
                                // Specific Stylesheet Modifications
                                'stylesheet.calendar.header': {
                                    dayHeader: {
                                        marginTop: 2,
                                        marginRight: 2,
                                        marginBottom: 5,
                                        width: 30,
                                        textAlign: 'center',
                                        fontSize: 13,
                                        color: 'black'
                                    }
                                }
                            }}
                        />

                        {/* Close Button */}
                        <Pressable 
                            onPress={() => setShowPicker(false)}
                            className="p-3 items-center"
                        >
                            <View className="border rounded-full p-2 mb-1 items-center justify-center">
                                <Ionicons name="close-outline" color="black" size={30}/>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default DatePicker;