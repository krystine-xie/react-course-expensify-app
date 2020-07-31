import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

// should return 0 if no expenses 
test('should return 0 with no expenses', () => {
    const dummyExpense = []; 
    const result = selectExpensesTotal(dummyExpense); 
    expect(result).toBe(0); 
})

//should correctly add up a single expense
test('should correctly add up a single expense', () => {
    const dummyExpense = [expenses[0]]
    const result = selectExpensesTotal(dummyExpense);
    expect(result).toBe(350);
})

//should correctly add up multiple expenses 
test('should correctly add up multiple expenses', () => {
    const result = selectExpensesTotal(expenses); 
    expect(result).toBe(114350)
})