import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {


  // Lifting the state: get the state from Expense form here

  const onNewExpenseSubmitted = (newExpenseData) => {
    const newExpenseSubmitted = {
      ...newExpenseData
    }
    console.log('newExpenseSubmitted = ' , newExpenseSubmitted)
  }

  return (
    <div className='new-expense'>
      {/* To lift the state up, this will be called inside a function in the ExpenseForm component */}
      <ExpenseForm onNewExpenseSubmitted={onNewExpenseSubmitted} />
    </div>
  );
};

export default NewExpense;
