// DatePicker.jsx
import React, { useState } from "react";
import { View, Text, Pressable, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Ionicons from "@react-native-vector-icons/ionicons";


// Accepts date (can be null) and the setter function
const DatePicker = ({ date, onDateChange }) => {
    const [showPicker, setShowPicker] = useState(false);

    const onChange = (event, selectedDate) => {
        // If selectedDate exists, use it; otherwise, use the existing date.
        const currentDate = selectedDate || date; 
        setShowPicker(Platform.OS === 'ios'); 

        // Only update if the user actually chose a date (event.type === 'set') or if it's iOS
        if (event.type === 'set' || Platform.OS === 'ios') {
            onDateChange(currentDate); 
        }
    };
    
    // Function to clear the date
    const clearDate = () => {
        onDateChange(null);
    };

    // Determine the text to display
    const displayDateText = date 
        ? date.toLocaleDateString('en-US') 
        : "Optional"; // Display "Optional" when date is null

    return (
        <View className="mb-4">
            <Text className="text-lg text-gray-500 font-bold mb-2">Select Due Date</Text>

            <View className="flex-row items-center w-full">
                {/* Pressable to open the picker */}
                <Pressable
                    onPress={() => setShowPicker(true)}
                    className="flex-row justify-between items-center border border-gray-300 p-3 rounded bg-white flex-1 mr-2"
                >
                    <Text className={`text-base ${date ? 'text-gray-800' : 'text-gray-500 italic'}`}>
                        {displayDateText} 
                    </Text>
                    <Ionicons name="calendar-outline" size={20} color="gray" />
                </Pressable>

                {/* Clear Button (Only show if a date is selected) */}
                {date && (
                    <Pressable 
                        onPress={clearDate}
                        className="p-3 rounded border border-red-300 bg-red-50"
                    >
                        <Ionicons name="close-circle-outline" size={20} color="red" />
                    </Pressable>
                )}
            </View>


            {showPicker && (
                <DateTimePicker
                    value={date} // Uses the passed-in date
                    mode="date"
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={onChange}
                />
            )}
        </View>
    );
};

export default DatePicker;