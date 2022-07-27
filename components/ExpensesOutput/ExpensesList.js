import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ExpensesItem from './ExpensesItem';

const renderExpenseItem = ({ item, index }) => <ExpensesItem {...item} />;

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      contentContainerStyle={{ paddingHorizontal: 10 }}
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item, index) => item.id}
    />
  );
};

export default ExpensesList;
