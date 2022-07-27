import axios from 'axios';

const firebase = 'https://react-navite-cources-default-rtdb.asia-southeast1.firebasedatabase.app';

const storeExpense = async (expenseData) => {
  const response = await axios.post(`${firebase}/expenses.json`, expenseData);
  const id = response.data.name;
  return id;
};

const fetchExpenses = async () => {
  const response = await axios.get(`${firebase}/expenses.json`);
  const result = [];
  for (const key in response.data) {
    const Expenses = {
      id: key,
      amount: +response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    result.push(Expenses);
  }
  return result;
};

const deleteExpense = (id) => {
  axios.delete(`${firebase}/expenses/${id}.json`);
};

const updateExpense = (id, expenseData) => {
  axios.put(`${firebase}/expenses/${id}.json`, expenseData);
};

export { storeExpense, fetchExpenses, deleteExpense, updateExpense };
