import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test('should generate action object with default', () => {
  expect(setTextFilter()).toEqual({ type: 'SET_TEXT_FILTER', text: '' });
});

test('should setup action object supplied text string', () => {
  expect(setTextFilter('hello there')).toEqual({ type: 'SET_TEXT_FILTER', text: 'hello there' });
});

test('should generate action object for sort by date', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate action object for sort by amount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should setup set start Date filter object', () => {
    expect(setStartDate(moment(0))).toEqual({ type: 'SET_START_DATE', startDate: moment(0) });
});

test('should setup set end Date filter object', () => {
  expect(setEndDate(moment(0))).toEqual({ type: 'SET_END_DATE', endDate: moment(0) });
});