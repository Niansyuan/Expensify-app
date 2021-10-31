import uuid from 'uuid'

//ADD_EXPENSES
// const action=(({}={})=>({}))
export const addExpenses=(
    {
        description='',
        note='',
        amount=0,
        createAt=0
    }={}
)=> ({
    type:'ADD_EXPENSES',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createAt
    }
})

//REMOVE_EXPENSES
export const removeExpenses=({id})=>({
    type:'REMOVE_EXPENSES',
    id
})

//EDIT_EXPENSES
export const editExpenses=(id,updates)=>({
    type:'EDIT_EXPENSES',
    id,
    updates
})
