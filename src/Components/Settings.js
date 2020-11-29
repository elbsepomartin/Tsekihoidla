import React, {useState} from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
import {Container, Content, Form, Item, Input} from 'native-base';

/* Redux */
import {useSelector, useDispatch} from 'react-redux';
import {deleteTransaction} from '../store/actions/transactionActions';

function Settings() {
    const onSubmit = () => {
        return alert("Väljaminekud kustutatud!");
    }

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