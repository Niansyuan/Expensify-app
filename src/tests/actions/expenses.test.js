import {addExpenses,editExpenses,removeExpenses} from '../../actions/expenses';

test('should setup remove expense action object',()=>{
    const action=removeExpenses({id:'abc123'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSES',
        id:'abc123'
    })
})

test('should setup edit expense action object',()=>{
    const action=editExpenses('abc123',{note:'new note update'})
    expect(action).toEqual({
        type:'EDIT_EXPENSES',
        id:'abc123',
        updates:{note:'new note update'}
    })
})

test('should setup add expense action object',()=>{
    const expenseData=({
        description:'Rent',
        note:'note message',
        amount:1000,
        createAt:10000000
    })
    const action=addExpenses(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSES',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })
})

test('should setup add expense action with no argument',()=>{
    const action=addExpenses()
    expect(action).toEqual({
        type:'ADD_EXPENSES',
        expense:{
            id:expect.any(String),
            description:'',
            note:'',
            amount:0,
            createAt:0
        }
    })
})