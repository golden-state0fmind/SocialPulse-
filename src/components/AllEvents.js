import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import EventCard from '../components/EventCard';
import UserModel from '../models/user';

export default function AllEvents({navigation}) {
    const [events, setEvents] = useState([]);
    //API FETCH to the DB for all the events
    function fetchEvents() {
        UserModel
            .all()
            .then((data) => {
                for (const [key, value] of Object.entries(data)) {
                    events.push(value)
                };
                setEvents(data);
            });
    };
    //Renders all the events being fetched
    useEffect(() => {
        fetchEvents()
    },[]);
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ top: 40}}
        >
            <View style={styles.container} >
                <TouchableOpacity onPress={fetchEvents} >
                    <Text style={styles.text} >Tap for More Events</Text>
                </TouchableOpacity>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    vertical={true} >
                    {events.map((value, index) => (
                        <EventCard
                            key={index}
                            username={value.userName}
                            message={value.message}
                            id={value._id}
                            onPress={() => {
                                navigation.navigate("EditEvent", {
                                    message:value.message,
                                    id:value._id
                                })
                            }}
                        />
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#303030',
        marginBottom: 40,
        flexDirection:'column-reverse',
    },
    text: {
        color: '#77dd77',
        marginBottom: 20,
        fontSize: 16,
        fontWeight: 'bold',
        padding: 5,
        fontSize: 20,
        letterSpacing: 1,
        backgroundColor: '#000000c0',
        borderRadius: 16,
        overflow:'hidden'
    }
});