import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Input from './Input';
import Button from '../../components/UI/Button';
import { globalStyles } from '../../constants/styles';

const ExpensesForm = ({ style, onCancel, onConfirm, labelButtonConfirm, defaultValue }) => {
  const [inputs, setInputs] = useState({
    amount: { value: defaultValue ? defaultValue.amount.toString() : '', invalid: true },
    date: { value: defaultValue ? defaultValue.date.toISOString().slice(0, 10) : '', invalid: true },
    description: { value: defaultValue ? defaultValue.description : '', invalid: true },
  });

  const handlerChangeInput = (type, value) => {
    setInputs((pre) => {
      return {
        ...pre,
        [type]: { invalid: true, value: value },
      };
    });
  };

  const handelOnConfirm = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const isInvalidAmount = !Number.isNaN(expenseData.amount) && expenseData.amount > 0;
    const isInvalidDate = expenseData.date.toString() !== 'Invalid Date';
    const isInvalidDescription = expenseData.description.trim().length > 0;

    if (!isInvalidAmount || !isInvalidDate || !isInvalidDescription) {
      // Alert.alert('Invalid Value', 'please check your input values', [{ style: 'destructive', text: 'Ok' }], {
      //   cancelable: true,
      // });
      setInputs((pre) => {
        return {
          amount: { value: pre.amount.value, invalid: isInvalidAmount },
          date: { value: pre.date.value, invalid: isInvalidDate },
          description: { value: pre.description.value, invalid: isInvalidDescription },
        };
      });
      return;
    }
    onConfirm(expenseData);
  };

  const formIsValid = inputs.amount.invalid && inputs.date.invalid && inputs.description.invalid;

  return (
    <View style={style}>
      <View style={styles.rowInputs}>
        <Input
          style={styles.inputRow}
          label='Amount'
          invalid={inputs.amount.invalid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: handlerChangeInput.bind(this, 'amount'),
            value: inputs.amount.value,
          }}
        />
        <Input
          style={styles.inputRow}
          label='Date'
          invalid={inputs.date.invalid}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: handlerChangeInput.bind(this, 'date'),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label='Description'
        invalid={inputs.description.invalid}
        textInputConfig={{
          multiline: true,
          onChangeText: (value) => handlerChangeInput('description', value),
          value: inputs.description.value,
        }}
      />
      {!formIsValid && <Text style={styles.textError}>Invalid value - Please check your entered data.</Text>}
      <View style={styles.buttons}>
        <Button style={styles.button} mode='flat' onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={handelOnConfirm}>
          {labelButtonConfirm}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowInputs: {
    flexDirection: 'row',
  },
  inputRow: {
    flex: 1,
  },
  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 12,
  },
  textError: {
    textAlign: 'center',
    margin: 6,
    color: globalStyles.colors.error400,
  },
});

export default ExpensesForm;
