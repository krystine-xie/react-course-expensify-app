import React from 'react'; 
import ExpenseDashboardPage from '../../components/ExpenseDashBoardPage'; 
import { shallow } from 'enzyme'; 

test('should render expense dashboard correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />); 
    expect(wrapper).toMatchSnapshot(); 
})
