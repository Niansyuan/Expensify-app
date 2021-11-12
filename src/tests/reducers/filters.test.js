import filtersReducer from "../../reducers/filters";
import moment from 'moment'

test('should setup default filter value',()=>{
    const state=filtersReducer(undefined,{type:'@@INIT'}) //@@INIT is in the dev-tool 
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('should set sortBy to amount',()=>{
    const state=filtersReducer(undefined,{type:'SORT_BY_AMOUNT'})
    expect(state).toEqual({
        text:'',
        sortBy:'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('should set sortBy to date',()=>{
    const currentState={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const action={type:'SORT_BY_DATE'}
    const state=filtersReducer(currentState,action)
    expect(state.sortBy).toBe('date')
})

test('should set startDate filter',()=>{
   const startDate=moment();
   const action={
       type:'SET_START_DATE',
       startDate
    
    }
    const state=filtersReducer(undefined,action)
    expect(state.startDate).toEqual(startDate)
})

test('should set startDate filter',()=>{
    const endDate=moment();
    const action={
        type:'SET_END_DATE',
        endDate
     
     }
     const state=filtersReducer(undefined,action)
     expect(state.endDate).toEqual(endDate)
 })