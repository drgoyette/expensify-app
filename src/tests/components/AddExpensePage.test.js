import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';


// test('should render AddExpensePage correctly', () => {
//   const onSubmit = jest.fn();
//   const history = { push: jest.fn() };
//   const wrapper = shallow(<AddExpensePage addExpense={onSubmit} history={history} />);
//   expect(wrapper).toMatchSnapshot();
// });

let addExpense, history, wrapper;

// This JEST function runs before EACH of the tests in this file runs.
beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle addExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
