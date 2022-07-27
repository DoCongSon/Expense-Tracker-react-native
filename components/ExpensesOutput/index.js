import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { globalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const Feedback = ({ content }) => (
  <View style={styles.feedbackContainer}>
    <Text style={styles.feedbackText}> {content}</Text>
  </View>
);

const ExpensesOutput = ({ expenses, expensesPeriod, feedback }) => {
  let Content = <Feedback content={feedback} />;
  if (expenses.length > 0) {
    Content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {Content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: globalStyles.colors.primary50,
  },
  feedbackContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  feedbackText: {
    color: globalStyles.colors.primary500,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
  },
});

export default ExpensesOutput;
