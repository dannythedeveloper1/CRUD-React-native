import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const ListItem = ({ item, deleteItem, editItem }) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemVieW}>
                <Text style={styles.listItemText}>{item.text}</Text>
                <View style={styles.listItemIcons}>
                    <AntDesign name="edit" size={24} color="black" style={{ paddingRight: 20 }} onPress={() => editItem(item.id)} />
                    <FontAwesome name="close" size={24} color="firebrick" onPress={() => deleteItem(item.id)} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemVieW: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 18,
    },
    listItemIcons: {
        flexDirection: 'row',
    },
})

export default ListItem;
