import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView } from 'react-native';


export default function LandingScreen({ navigation }) {
    //Have the user start with a username and pass that down to the next screen as parameters
    const [user, setUser] = useState(null);

    const image = require('../assets/splashBackground.jpg');
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.container} >
                <ImageBackground source={image} style={styles.image}>
                    <View style={styles.userNameBox} >
                        <Text style={styles.title}>Social Pulse</Text>
                        <Text style={styles.text}>Checkout the social vibes with nearby events or create your own event. To get started just tap the
                        </Text>
                        <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                            <Text style={{ fontSize: 40 }} > 🎉 </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userNameBox: {
        padding: 5,
        backgroundColor: "#000000c0",
        height: 350,
        alignItems:'center'
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    title: {
        color: "#ffff",
        fontSize: 30,
        padding: 5,
        lineHeight: 84,
        fontWeight: "bold",
    },
    text: {
        color: "#ffff",
        fontSize: 18,
        textAlign: "center",
        lineHeight: 20,
        letterSpacing: 1,
        marginBottom: 20,
    },
    textUserName: {
        height: 50,
        width: 300,
        borderColor: '#b19cd9',
        borderStyle: 'solid',
        borderWidth: 3,
        padding: 6,
        margin: 10,
        backgroundColor: '#ffff',
        borderRadius: 14,
        textAlign:'center'
    },
});