import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import UserModel from '../models/user';

export default function EditEvent({
    navigation,
    route,
    style = {},
    source={},
    ...props
}) {
    //SETSTATE
    const [newMessage, setNewMessage] = useState();
    const { message, id } = route.params;
    //UPDATE
    function updateMessage() {
        UserModel
            .update({message, id})
            .then((data) => {
                console.log(`Successful UPDATE: ${data}`)
            })
            .catch(error => { console.error, error });
    };
    //DELETE
    function deleteMessage() {
        UserModel
            .delete(id)
            .then((data) => {
                console.log(`Deleted: ${data}`)
            })
            .catch(error => { console.error, error });
    };
    //RENDERS

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.container}>
                <Text style={styles.headerText} >
                    Edit Event Details: {id}
                </Text>
                <TextInput
                    style={styles.textMessage}
                    placeholder={`${message}`}
                    onChangeText={(newMessage) => { setNewMessage(newMessage) }}
                    value={newMessage}
                    numberOfLines={10}
                    multiline={true}
                    textAlignVertical={"top"}
                    blurOnSubmit={true}
                    autoCorrect
                />
                <View style={{flexDirection:'row', margin:5}} >
                    <TouchableOpacity onPress={() => {
                        updateMessage()
                        navigation.navigate("Home")
                }} >
                    <Text style={styles.saveText} >Save Changes</Text>
                </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        deleteMessage()
                        navigation.navigate("Home")
                }} >
                    <Text style={styles.deleteText} >Delete Event</Text>
                </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#303030'
    },
    textMessage: {
        height: 200,
        width: 300,
        borderColor: '#b19cd9',
        borderStyle: 'solid',
        borderWidth: 3,
        padding: 6,
        margin: 2,
        backgroundColor: '#ffff',
        borderRadius: 14,
        flexWrap:'wrap'
    },
    saveText: {
        margin: 5,
        color: '#77dd77',
        padding: 5,
        fontSize: 20,
        letterSpacing: 1,
        backgroundColor: '#000000c0',
        borderRadius: 16,
        overflow:'hidden'
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
    headerText: {
        color: '#ffff',
        fontSize: 20,
        letterSpacing: 1,
        bottom: 30,
        marginHorizontal:30
    }
});
