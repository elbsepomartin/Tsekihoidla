import AddTransaction from '../../Components/AddTransaction';
import {ADD_TRANSACTION, DELETE_TRANSACTION} from '../actions/types';

const initialstate = {
    transactions: [],
};

export default (state = initialstate, {type, payload}) => {
    switch(type){
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [payload, ...state.transactions],
            };

        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction.id !== payload,
                ),
            };
        default:
            return state;
    }
};