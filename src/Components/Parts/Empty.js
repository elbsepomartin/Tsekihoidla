import React from 'react';
import {View, Text} from 'react-native';

export default function Empty() {
    return (
        <View style={{alignItems: 'center', marginTop: 30}}>
            <Text style={{color: 'gray', fontWeight: '700', fontSize: 20}}>
                Väljaminekud puuduvad
            </Text>
        </View>
    )
}
