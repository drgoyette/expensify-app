import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
// console.log('store.getState: ',store.getState());

// store.dispatch(addExpense({ description: 'Water Bill', amount: 4500,   createdAt: 222  }));
// store.dispatch(addExpense({ description: 'Gas Bill',   amount: 2560,   createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent Bill',  amount: 109500, createdAt: 555  }));

const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log('visibleExpenses: ',visibleExpenses);

// Setup Provider - provides store to all components of the application
const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
  
render(jsx, document.getElementById('app'));
