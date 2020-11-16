import React, {useState} from 'react';
import {StyleSheet, Button, View} from 'react-native';
import {Container, Content, Form, Item, Input} from 'native-base';

/* Redux */
import {useDispatch} from 'react-redux';
import {addTransaction} from '../store/actions/transactionActions';

function AddTransaction() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const onSubmit = () => {
        if(!title || !price) {
            return alert("Palun täitke kõik väljad!");
        }

        const id = Math.floor(Math.random() * 600000);

        const newTransaction = {
            id,
            title,
            price: +price,
        };

        dispatch(addTransaction({...newTransaction}));

        return alert("Väljaminek lisatud!");
    };

    return (
        <Container>
            <Content>
                <Form>
                    <Item style = {{...styles.item}}>
                        <Input 
                          placeholder="Pealkiri" 
                           onChangeText={(title) => setTitle(title)}/>
                    </Item>
                    <Item style = {{...styles.item}}>
                        <Input 
                          placeholder="Summa" 
                          keyboardType="number-pad"
                          onChangeText={(price) => setPrice(price)}
                          onSubmitEditing={onSubmit}
                          />
                    </Item>
                    <View style={{width: '21%', alignSelf: 'flex-start', marginLeft: 24, }}>
                        <Button
                            style={{}}
                            title="Salvesta"
                            onPress={onSubmit}>
                        </Button>
                    </View>
                </Form>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 20,
        width: '93%'
    }
})

export default AddTransaction;