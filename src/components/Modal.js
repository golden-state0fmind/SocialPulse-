import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Alert, TextInput } from 'react-native';
import UserModel from '../models/user';

export default function ModalCard({
    style = {},
    source={},
    ...props
}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [message, setMessage] = useState(props.message);
    const [id, setId] = useState(props.description);
    
    function updateMessage() {
        UserModel
            .update({
                message,
                id,
                ...props
            })
            .then((data) => {
                console.log
            });
    };
    //Renders all the events being fetched
    useEffect(() => {
        updateMessage()
    }, []);
    
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Event Description:{props.id}</Text>
                        <TextInput
                            style={styles.modalTextInput}
                            onChangeText={(message) => { setMessage(message) }}
                            value={message}
                            numberOfLines={10}
                            multiline={true}
                            textAlignVertical={"top"}
                            blurOnSubmit={true}
                            autoCorrect
                        />
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                updateMessage()
                                setModalVisible(!modalVisible)
                            }}
                        >
                            <Text style={styles.textStyle}>{props.delete}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(true)}
            ><Text style={styles.textStyle}> Edit Event ✏️ </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: '#303436',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        margin:10,
        backgroundColor: '#000000c0',
    },
    textStyle: {
        color: "#b19cd9",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        margin: 10,
    },
    modalText: {
        color: '#b19cd9',
        marginBottom: 15,
        textAlign: "center",
        fontSize:22
    },
    modalTextId: {
        color: '#b19cd9',
        marginBottom: 15,
        textAlign: "center",
        fontSize:16
    },
    modalTextInput: {
        height: 150,
        width: 250,
        backgroundColor: 'white',
        padding: 10,
        flexWrap: 'wrap'
    }
});