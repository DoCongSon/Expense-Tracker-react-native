import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../constants/styles';
import { getFormatDate } from '../../util/date';
import { useNavigation } from '@react-navigation/native';

const ExpensesItem = ({ id, description, amount, date }) => {
  const navigation = useNavigation();
  const handlerPressExpensesItem = () => {
    navigation.navigate('ManageExpense', {
      expenseID: id,
    });
  };

  return (
    <Pressable
      onPress={handlerPressExpensesItem}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}>
      <View>
        <Text style={[styles.textBase, styles.description]}>{description}</Text>
        <Text style={styles.textBase}>{getFormatDate(date)}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={[styles.textBase, styles.amount]}>{amount.toFixed(2)}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  container: {
    backgroundColor: globalStyles.colors.primary200,
    padding: 12,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  textBase: {
    color: globalStyles.colors.primary500,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: globalStyles.colors.accent200,
    minWidth: 80,
  },
  amount: {
    fontWeight: 'bold',
  },
});

export default ExpensesItem;
