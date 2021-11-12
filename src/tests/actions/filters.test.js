import moment from 'moment';
import {
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByDate,
    sortByAmount
} from '../../actions/filters';

test('should generate set start Date action object',()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    })
})

test('should generate set end Date action object',()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
})

test('should generate set text filter object with text value',()=>{
    const text='something key in';
    const action=setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:text
    })
})

test('should generate set text filter object with default value',()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})

test('should generate action objects for sort by date',()=>{
    const action=sortByDate()
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})

test('should generate action objects for sort by Amount',()=>{
    const action=sortByAmount()
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})