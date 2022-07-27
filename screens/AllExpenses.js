import React, { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput';
import { ExpensesContext } from '../store/Expenses-context';

const AllExpenses = () => {
  const ExpensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput expensesPeriod='Total' expenses={ExpensesCtx.expenses} feedback='No registered Expenses found!' />
  );
};

export default AllExpenses;
