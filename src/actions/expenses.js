import { push, ref } from '@firebase/database';
import database from '../firebase/firebase';

//ADD_EXPENSES
// const action=(({}={})=>({}))
export const addExpenses = (expense) => ({
    type: 'ADD_EXPENSES',
    expense
});

//dispatch addExpenses to change store (add this after using firebase)
export const startAddExpenses = (expenseDate = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createAt = 0
        } = expenseDate;
        const expense = { description, note, amount, createAt }
        const rootRef = ref(database, 'expenses')
        return push(rootRef, expense).then((rootRef) => {
            dispatch(addExpenses({
                id: rootRef.key,
                ...expense
            }));
        });
    };
};

//REMOVE_EXPENSES
export const removeExpenses = ({ id }) => ({
    type: 'REMOVE_EXPENSES',
    id
})

//EDIT_EXPENSES
export const editExpenses = (id, updates) => ({
    type: 'EDIT_EXPENSES',
    id,
    updates
})
