import moment from 'moment';
import selectExpense from '../../selectors/expenses'

const expenses=[{
    id:'1',
    description:'Gum',
    note:'',
    amount:100,
    createAt:1000
},{
    id:'2',
    description:'Rent',
    note:'',
    amount:8500,
    createAt:moment(0).subtract(4,'days').valueOf()
},{
    id:'3',
    description:'Phone',
    note:'',
    amount:1200,
    createAt:moment(0).add(4,'days').valueOf()
}]

test('should filter by text value',()=>{
    const filters={
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpense(expenses,filters)
    expect(result).toEqual([ expenses[2],expenses[1] ])
})

test('should filter by text value',()=>{
    const filters={
        text:'e',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpense(expenses,filters)
    expect(result).toEqual([ expenses[1],expenses[2] ])
})

test('should filter by startdate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result=selectExpense(expenses,filters)
    expect(result).toEqual([ expenses[2],expenses[0] ])
})

test('should filter by endDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0)
    }
    const result=selectExpense(expenses,filters)
    expect(result).toEqual([ expenses[0],expenses[1]])
})

test('should filter by date',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpense(expenses,filters)
    expect(result).toEqual([ expenses[2],expenses[0],expenses[1]])
})

test('should filter by amount',()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result=selectExpense(expenses,filters)
    expect(result).toEqual([ expenses[1],expenses[2],expenses[0]])
})