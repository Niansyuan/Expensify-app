import { child, get, push, ref, remove } from '@firebase/database';
import database from '../firebase/firebase';

//ADD_EXPENSES
// const action=(({}={})=>({}))
export const addExpenses = (expense) => ({
    type: 'ADD_EXPENSES',
    expense
});

//dispatch addExpenses to change store (add this action after introduce firebase)
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

export const startRemoveExpenses = ({ id }) => {
    return (dispatch) => {
        return remove(ref(database, `expenses/${id}`)).then(() => {
            dispatch(removeExpenses({ id }))
        });
    };
};

//EDIT_EXPENSES
export const editExpenses = (id, updates) => ({
    type: 'EDIT_EXPENSES',
    id,
    updates
})

//SET_EXPENSES (add this action after introduce firebase)
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

//startSetExpenses (add this action after introduce firebase)
export const startSetExpenses = () => {
    return (dispatch) => {
        //fetch all expenseData once
        return get(child(ref(database), 'expenses')).then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            });
            dispatch(setExpenses(expenses));
        });
    };
};