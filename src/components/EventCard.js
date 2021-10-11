import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { Card } from 'react-native-paper';
import Modal from '../components/Modal';

export default function EventCard({navigation, route, ...props}) {
    const image = require('../assets/event.jpg')
    return (
        <Card style={styles.cardContainer} >
            <Card.Cover source={image} />
            <Text style={styles.userName} >👤 {props.username}</Text>
            <Text style={styles.userName} >💬  {props.message}</Text>
            <TouchableOpacity onPress={props.onPress} >
                <Text style={styles.editTextStyle}> Edit Event ✏️ </Text>
            </TouchableOpacity>
            <Text style={styles.userName} > {props.id}</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        borderColor: '#b19cd9',
        borderWidth: 1,
        margin: 15,
        width: 300
    },
    userName: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 5
    },
    message: {
        color: 'black',
        fontSize: 13,
        padding: 5
    },
    editTextStyle: {
        color: "#b19cd9",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        margin: 10,
    },
    deleteText: {
        margin: 5,
        color: '#D0342c',
        padding: 5,
        fontSize: 20,
        letterSpacing: 1,
        backgroundColor: '#000000c0',
        borderRadius: 16,
        overflow:'hidden'
    },
});