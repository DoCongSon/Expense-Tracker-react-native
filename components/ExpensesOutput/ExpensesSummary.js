import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../constants/styles';

const ExpensesSummary = ({ periodName, expenses }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: globalStyles.colors.primary100,
  },
  period: {
    fontSize: 20,
    color: globalStyles.colors.primary400,
  },
  sum: {
    fontSize: 22,
    fontWeight: 'bold',
    color: globalStyles.colors.primary500,
  },
});

export default ExpensesSummary;
