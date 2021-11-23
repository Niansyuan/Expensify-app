import { startAddExpenses, addExpenses, editExpenses, removeExpenses } from '../../actions/expenses';
import expenses from '../fixture/expenses';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import { child, get, ref } from '@firebase/database';

const creatMockStore = configureStore([thunk])

test('should setup remove expense action object', () => {
    const action = removeExpenses({ id: 'abc123' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSES',
        id: 'abc123'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpenses('abc123', { note: 'new note update' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSES',
        id: 'abc123',
        updates: { note: 'new note update' }
    })
})

test('should setup add expense action object', () => {
    const action = addExpenses(expenses[1])
    expect(action).toEqual({
        type: 'ADD_EXPENSES',
        expense: expenses[1]
    })
})

test('should add expense to database and store', (done) => {
    const store = creatMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 550,
        note: 'last one was broken',
        createAt: 10000
    }
    store.dispatch(startAddExpenses(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSES',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        const dbref = ref(database);
        return get(child(dbref, `expenses/${actions[0].expense.id}`));
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
})

test('should add expense with default to database and store', (done) => {
    const store = creatMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createAt: 0
    }
    store.dispatch(startAddExpenses({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSES',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        })
        const dbref = ref(database);
        return get(child(dbref, `expenses/${actions[0].expense.id}`));
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    })
})

// test('should setup add expense action with no argument',()=>{
//     const action=addExpenses()
//     expect(action).toEqual({
//         type:'ADD_EXPENSES',
//         expense:{
//             id:expect.any(String),
//             description:'',
//             note:'',
//             amount:0,
//             createAt:0
//         }
//     })
// })