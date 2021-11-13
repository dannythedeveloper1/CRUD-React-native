import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, Alert } from 'react-native';
import { v4 as uuid } from 'uuid';
import AddItem from './components/AddItem';
import Header from './components/Header';
import ListItem from './components/ListItem';

export default function App() {
  const [items, setItems] = useState([
    { id: uuid(), text: "milk" },
    { id: uuid(), text: "Eggs" },
    { id: uuid(), text: "Bread" },
    { id: uuid(), text: "Juice" },
  ]);
  const [text, setText] = useState("");

  const addItem = () => {
    console.log(text);
    if (!text) {
      alert('please enter an item');
      // Alert.alert('Error', 'Please enter an item', { text: 'Ok' })
    } else {
      setItems([{ id: uuid(), text }, ...items]);
    }
    setText("");
  }

  const editItem = (id) => {
    const newItem = items.filter(item => (item.id === id));
    newItem[0].text = text;
    setText("");
  }

  const deleteItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <AddItem addItem={addItem} setText={setText} text={text} />
      <FlatList data={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} editItem={editItem} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
});
