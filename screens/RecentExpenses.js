import React, { useContext, useEffect, useState } from 'react';
import ExpensesOutput from '../components/ExpensesOutput';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';
import { ExpensesContext } from '../store/Expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const ExpensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      try {
        const data = await fetchExpenses();
        ExpensesCtx.setExpenses(data);
      } catch (error) {
        setError({ title: "Couldn't fetch expenses", message: error.message });
      }
      setIsFetching(false);
    };
    getData();
  }, []);

  const recentExpenses = ExpensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  if (error && !isFetching) {
    return <ErrorOverlay message={error.message} title={error.title} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput
      expensesPeriod='Last 7 days'
      expenses={recentExpenses}
      feedback='No Expenses registered for the last 7 days'
    />
  );
};

export default RecentExpenses;
