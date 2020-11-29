import React from 'react'
import {View, Text, StyleSheet, FlatList, ListView} from 'react-native';
import {Button, Container, CheckBox, Body, Right, ListItem} from 'native-base';
import Animated from 'react-native-reanimated';

/* Parts */
import Empty from './Parts/Empty';

/* Redux */
import {useSelector, useDispatch} from 'react-redux';
import {deleteTransaction} from '../store/actions/transactionActions';
import {LinearGradient} from 'expo-linear-gradient';

function Item({title, price, id}) {
    const dispatch = useDispatch();

    return(
        <View style={{
            marginVertical: 3,
            paddingHorizontal: 30,
            paddingVertical: 15,
        }}>
            <ListItem>
                <CheckBox color="#ff4500" onPress={() => {
                    dispatch(deleteTransaction(id));
                }}/>

                <Body>
                    <Text style={{fontSize: 17, fontWeight: '700', marginLeft: 10}}>
                        {title}
                    </Text>
                </Body>

                <Right>
                    <Text style={{fontFamily: 'sans-serif', fontSize: 14, fontWeight: '400', color: price > 0 ? '#009BFC' : '#FF4500'}}>
                        {price > 0 ? `€${price}` : `-€${Math.abs(price)}`}
                    </Text>
                </Right>
            </ListItem>
        </View>
    )
}

const HomeScreen = ({navigation}) => {
    const {transactions} = useSelector((state) => state.transactions);

    const prices = transactions.map(transaction => transaction.price);
    const totalPrice = prices.reduce((prev, cur) => (prev += cur), 0);

    const expense = prices.filter(price => price < 0)
    .reduce((prev, cur) => (prev += cur), 0) * -1;

    return (
        <Container>
            <Animated.View style = {{flex: 1, alignItems: 'center',}}>

                <LinearGradient 
                    colors={['#FAAD3D', '#EFC90A', '#F1CB0C']} 
                    style = {{...styles.Box}}>
                        <View style={{width: '70%'}}>
                            <Text style={{
                                fontSize: 15,
                                color: '#fff', 
                                fontFamily: 'sans-serif', 
                                fontWeight: '600'
                            }}>Väljaminekud</Text>
                            <Text style = {{
                                fontFamily: 'sans-serif',
                                fontSize: 32,
                                color: '#FFF',
                                fontWeight: '700'
                            }}>{totalPrice}€</Text>
                        </View>

                        <View style={{alignItems: 'flex-end', width: '30%',}}>
                            <View style={{flex: 1}}>
                                <Button light
                                    style={{
                                        padding: 10,
                                        borderWidth: 3,
                                        width: '90%',
                                        height: 75,
                                        borderColor: '#fff',
                                        backgroundColor: '#6CAE75',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 50,
                                    }}
                                            
                                    onPress = {() => {
                                        navigation.navigate('Add');
                                    }}>
                                        
                                    <Text style={{color: '#fff', fontSize: 36, fontWeight: '700', marginRight: 17}}>
                                        +
                                    </Text>
                                </Button>
                            </View>
                        </View>
                    </LinearGradient>

            </Animated.View>

            <View style = {{flex: 1, marginTop: -350}}>
                {transactions.length > 0 ? (
                <FlatList data={transactions} renderItem={({item}) => (
                    <Item title={item.title} price={item.price} id={item.id} />
                )}
                keyExtractor={(item) => item.id.toString()}
                />
                ) : (
                <Empty />
                )}
            </View>

            <View style = {{position: 'absolute', right: 0, bottom: 0}}>
                <Button style = {{backgroundColor: 'rgba(250,250,250,1)', transform: [{ rotate: '90deg'}]}} onPress = {() => {navigation.navigate('Settings')}}>
                    <Text style = {{fontSize: 24, padding: 10}}>...</Text>
                </Button>
            </View>

        </Container>
    )
}

const styles = StyleSheet.create({
    Box: {
        width: '100%',
        height: '25%',
        flexDirection: 'row',
        padding: 22,
    }
})

export default HomeScreen;