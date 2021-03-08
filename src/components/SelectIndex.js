import React, {useState} from "react";
import {
    Switch,
    View,
    Text,
    SafeAreaView,
    StyleSheet
} from "react-native";

const SelectIndex = () => {
    const [switchValue, setSwitchValue] = useState(false);
    const toggleSwitch = (value) => {
        setSwitchValue(value);
    };
    return (
        <View style={{flex:0.05, flexDirection: "row"}}>
            <Text style={{color: "white"}}>
            {
                switchValue ? 'Hadoop' : 'Lucene'
            }
            </Text>
            <Switch
                onValueChange={toggleSwitch}
                value={switchValue}
                />
            </View>
    );
};

export default SelectIndex;