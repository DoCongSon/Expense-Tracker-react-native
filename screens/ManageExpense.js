import React, { useEffect, useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ExpensesForm from '../components/ManageExpenses/ExpensesForm';
import ErrorOverlay from '../components/UI/ErrorOverlay';
import IconButton from '../components/UI/IconButton';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { globalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/Expenses-context';
import { deleteExpense, storeExpense, updateExpense } from '../util/http';

const ManageExpense = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const editedExpenseId = route.params?.expenseID;
  const isEditing = !!editedExpenseId;
  const ExpensesCtx = useContext(ExpensesContext);

  const selectedExpense = ExpensesCtx.expenses.find((expense) => expense.id === editedExpenseId);

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expenses' : 'Add Expenses',
    });
  }, [isEditing, navigation]);

  const handlerDeleteExpense = () => {
    try {
      setIsSubmitting(true);
      deleteExpense(editedExpenseId);
      ExpensesCtx.deleteExpenses(editedExpenseId);
    } catch (error) {
      setError({ title: "Couldn't delete expense - please try again later", message: error.message });
    }
    navigation.goBack();
  };

  const handlerCancel = () => {
    navigation.goBack();
  };

  const handlerConfirm = async (expensesData) => {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        updateExpense(editedExpenseId, expensesData);
        ExpensesCtx.updateExpenses(editedExpenseId, expensesData);
      } else {
        const id = await storeExpense(expensesData);
        ExpensesCtx.addExpenses({ ...expensesData, id: id });
      }
    } catch (error) {
      setError({ title: "Couldn't save data - please try again later", message: error.message });
    }
    navigation.goBack();
  };

  if (error && !isSubmitting) {
    return <ErrorOverlay title={error.title} message={error.message} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>
      <ExpensesForm
        style={styles.form}
        onCancel={handlerCancel}
        onConfirm={handlerConfirm}
        labelButtonConfirm={isEditing ? 'Update' : 'Add'}
        defaultValue={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteButton}>
          <IconButton size={32} icon='trash' color={globalStyles.colors.error400} onPress={handlerDeleteExpense} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: globalStyles.colors.primary50,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color: globalStyles.colors.primary500,
    textTransform: 'uppercase',
  },
  form: {
    marginVertical: 10,
  },
  deleteButton: {
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderColor: globalStyles.colors.primary300,
  },
});

export default ManageExpense;
