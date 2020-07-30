import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate; 
beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setEndDate = jest.fn();
    setStartDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setEndDate={setEndDate}
            setStartDate={setStartDate}
        />
    );
});

test('should render ExpenseListFilter correctly', () => {
     expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilter with altData correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
});

// should handle text change
test('should handle text change', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

// should sort by date
test('should sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {
        target: {
            value: 'date'
        }
    })
});

// should sort by amount 
test('should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: 'amount'
        }
    })
});

// should handle date changes 
test('should handle date change', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})

// should handle date focus changes 
test('should handle focus change', () => {
    const calendarFocused = 'endDate';
     wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
     expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})