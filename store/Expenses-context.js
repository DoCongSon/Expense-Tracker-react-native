import React, { useReducer, createContext } from 'react';

const ExpensesContext = createContext({
  expenses: [],
  setExpenses: (expenses) => {},
  addExpenses: (expense) => {},
  removeExpenses: (id) => {},
  updateExpenses: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload.reverse();
    case 'ADD':
      return [action.payload, ...state];
    case 'DELETE':
      return state.filter((item) => item.id !== action.payload);
    case 'UPDATE':
      const index = state.findIndex((item) => item.id === action.payload.id);
      const expenses = state[index];
      const expensesUpdate = { ...expenses, ...action.payload.expensesData };
      const newState = [...state];
      newState[index] = expensesUpdate;
      return newState;
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  const setExpenses = (expenses) => {
    dispatch({ type: 'SET', payload: expenses });
  };

  const addExpenses = (expensesData) => {
    dispatch({ type: 'ADD', payload: expensesData });
  };

  const updateExpenses = (id, expensesData) => {
    dispatch({ type: 'UPDATE', payload: { expensesData, id } });
  };

  const deleteExpenses = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const value = {
    expenses: expensesState,
    setExpenses,
    addExpenses,
    updateExpenses,
    deleteExpenses,
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
};

export { ExpensesContext };
export default ExpensesContextProvider;
