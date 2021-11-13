import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const AddItem = ({ addItem, text, setText }) => {
    // const [text, setText] = useState("");
    return (
        <View>
            <TextInput placeholder="Add Item..." style={styles.input} value={text} onChangeText={(e) => setText(e)} />
            <TouchableOpacity style={styles.btn} onPress={() => addItem()}>
                <Text style={styles.btnText}><FontAwesome name="plus" size={20} color="darkslateblue" />Add Item</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: "#c2bad8",
        padding: 9,
        fontSize: 16
    },
    btnText: {
        color: "darkslateblue",
        fontSize: 20,
        textAlign: "center",
    },
})

export default AddItem;
