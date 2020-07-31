import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary'; 

// should render summary with one item 
test('should render summary with one item', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={234} />);
    expect(wrapper).toMatchSnapshot();
})

// should render summary with multiple items
test('should render summary with multiple items', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={12} expensesTotal={12345} />);
    expect(wrapper).toMatchSnapshot();
}) 