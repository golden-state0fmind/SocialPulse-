import React, { useState, useEffect } from 'react';
import UserModel from '../models/user';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';


export default function AddEvent({navigation}) {
    const [userName, setUserName] = useState(null);
    const [message, setMessage] = useState(null);

    function handleFetch() {
        UserModel.create({ userName, message })
            .then(data => {
                setUserName("");
                setMessage("");
            })
    };

    useEffect(() => {
        handleFetch
    },[handleFetch])

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.container}>
                <Text style={styles.headerText} >
                    Let's get you started with a username and creating your first event. Fill out the below fields.
                </Text>
                <TextInput
                    style={styles.textUserName}
                    placeholder='UserName'
                    onChangeText={(userName) => { setUserName(userName.trim()) }}
                    value={userName}
                    numberOfLines={10}
                    multiline={true}
                    blurOnSubmit={true}
                    autoCorrect
                />
                <TextInput
                    style={styles.textMessage}
                    placeholder='Describe your event'
                    onChangeText={(message) => { setMessage(message) }}
                    value={message}
                    numberOfLines={10}
                    multiline={true}
                    textAlignVertical={"top"}
                    blurOnSubmit={true}
                    autoCorrect
                />
                <TouchableOpacity onPress={handleFetch} >
                    <Text style={styles.text} >Submit Event</Text>
                </TouchableOpacity>
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
    textUserName: {
        height: 50,
        width: 300,
        borderColor: '#b19cd9',
        borderStyle: 'solid',
        borderWidth: 3,
        padding: 6,
        margin: 2,
        backgroundColor: '#ffff',
        borderRadius:14,
    },
    text: {
        margin: 5,
        color: '#ffff',
        padding: 5,
        fontSize: 25,
        letterSpacing: 1,
        backgroundColor: '#000000c0',
        color: '#77dd77',
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
