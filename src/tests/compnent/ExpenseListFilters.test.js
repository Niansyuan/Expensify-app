import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../component/ExpenseListFilters'
import '../setupTests';
import { filters, altFilters } from '../fixture/filters'
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

let setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    sortByAmount = jest.fn()
    sortByDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
        />)
})

test('should render ExpenseListFilters correctly ', () => {
    expect(wrapper).toMatchSnapshot()
});

test('should render ExpenseListFilters with altFilters correctly ', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
});

test('should handle text change', () => {
    const value='somethig type in'
    wrapper.find('input').simulate('change',{
        target:{value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
});

test('should handle date change', () => {
    const startDate = moment(0).add(8, 'days')
    const endDate = moment(0).add(2, 'months')
    wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledWith(endDate)
});

test('should handle focus change', () => {
    const calendarFocused='endDate'
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
});

test('should sort by date', () => {
    const value='date'
    wrapper.setProps({
        filters:altFilters
    })
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByDate).toHaveBeenCalled()
});

test('should sort by amount', () => {
    const value='amount'
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByAmount).toHaveBeenCalled()
});