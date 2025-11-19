import { useState } from "react";
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
          elevation: 5,
          left: 20,
          top: 10,
          color: "black"                 
        }}
      >

      {/* <Divider /> */}
        <Menu.Item title="Notifications" leadingIcon="inbox" onPress={() => navigation.navigate("About")} />
        <Divider />
        <Menu.Item title="About" leadingIcon="information-outline" onPress={() => navigation.navigate("About")} />
        <Divider />
        <Menu.Item title="Light/Dark" leadingIcon="theme-light-dark" onPress={() => navigation.navigate("Home")} />
        <Divider />
        <Menu.Item title="Privacy" leadingIcon="shield-outline" onPress={() => navigation.navigate("Home")} />
        <Divider />
        <Menu.Item title="Language" leadingIcon="translate" onPress={() => navigation.navigate("Home")} />
        <Divider />
        <Menu.Item title="Contact" leadingIcon="email-outline" onPress={() => navigation.navigate("Home")} />
        <Divider />
        <Menu.Item title="Completed" leadingIcon="check-outline" onPress={() => navigation.navigate("Completed")} />
        <Divider />
      </Menu>
    </View>
  );
};

export default HeaderMenu;
