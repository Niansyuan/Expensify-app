import React from 'react';
import {shallow} from 'enzyme';
import { ExpensesSummary } from '../../component/ExpensesSummary';
import '../../tests/setupTests'

test('should correctly render expensesSummary with one expense',()=>{
    const wrapper=shallow(<ExpensesSummary expenseCount={1} expenseTotal={350}/>)
    expect(wrapper).toMatchSnapshot();
})

test('should correctly render expensesSummary with multiple expenses',()=>{
    const wrapper=shallow(<ExpensesSummary expenseCount={3} expenseTotal={4700}/>)
    expect(wrapper).toMatchSnapshot();
})