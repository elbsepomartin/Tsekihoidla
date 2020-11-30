import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Container, Content} from 'native-base';

function Settings() {

    return (
        <Container>
            <Content>
                <View style = {{...styles.item}}>
                    <Text style = {{fontSize: 24}}>Autorid:</Text>
                    <Text style = {{fontSize: 16}}>Sepo-Martin Elb & Eleri Viks</Text>
                    <Text></Text>
                    <Text style = {{fontSize: 16}}>Tšekihoidla &copy;2020</Text>
                </View>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        padding: 20
    }
})

export default Settings;