import React from 'react';
import BottomNavigation from './BottomNavigation';
import { View} from 'react-native';

export default function Home() {
    return (
        <View style={{ flex: 1}} >
            <BottomNavigation />
        </View>
    );
};
