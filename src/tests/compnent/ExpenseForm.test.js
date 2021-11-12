import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../component/ExpenseForm";
import expenses from "../fixture/expenses";
import "../setupTests"
import { SingleDatePicker } from "react-dates";
import moment from "moment";

test('should render ExpenseForm correctly',()=>{
    const wrapper=shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseForm with Expense data',()=>{
    const wrapper=shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invaild form summission',()=>{
    const wrapper=shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{ }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test('should set description on input change',()=>{
    const value='description fot test';
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('description')).toBe(value);
})

test('should set note on textarea change',()=>{
    const value='note for test';
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change',{
        target:{value}
    });
    expect(wrapper.state('note')).toBe(value);
})

test('should set amount if valid input',()=>{
    const value='12.92';
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('amount')).toBe(value);
})

test('should not set amount if invalid input',()=>{
    const value='12.920';
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });
    expect(wrapper.state('amount')).toBe('');
})

test('should call onSubmit prop for valid form submission',()=>{
    const onSumitSpy=jest.fn();
    const wrapper=shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSumitSpy} />);
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    expect(onSumitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        createAt:expenses[0].createAt,
        note:expenses[0].note
    });
})

test('should set new day onDateChange',()=>{
    const now=moment();
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createAt')).toEqual(now);
})

test('should set calendarFocuse on change',()=>{
    const focused = true;
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toEqual(focused);
})