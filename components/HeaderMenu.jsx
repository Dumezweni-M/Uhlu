import React, { useState } from "react";
import { Menu, Divider } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HeaderMenu = ( ) => {
    const [visible, setVisible] = useState(false);
    const navigation = useNavigation();

  return (
    <View>
      <Menu 
        visible={visible}
        onDismiss={() => setVisible(false)}
        anchor={
          <Ionicons
            name="menu"
            size={26}
            color="black"
            style={{ marginRight: 10 }}
            onPress={() => setVisible(true)}
          />
        }
          contentStyle={{
          backgroundColor: "white",
          borderRadius: 2,             
          paddingVertical: 0,           
          elevation: 3,
          color: "white"                 
        }}
      >

      {/* <Divider /> */}
      <Menu.Item title="Home" leadingIcon="home" onPress={() => navigation.navigate("Home")} />
        <Divider />
        <Menu.Item title="Complete" leadingIcon="information" onPress={() => navigation.navigate("Completed")} />
        <Divider />
        <Menu.Item title="About" leadingIcon="information" onPress={() => navigation.navigate("About")} />
      </Menu>
    </View>
  );
};

export default HeaderMenu;
