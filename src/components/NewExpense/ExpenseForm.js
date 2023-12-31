import React, { useState } from 'react';

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [showForm, setShowForm] = useState(false);
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'title') {
            setEnteredTitle(value);
        } else if (identifier === 'date') {
            setEnteredDate(value);
        } else {
            setEnteredAmount(value);
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    const toggleFormHandler = () => {
        setShowForm(!showForm);
    };

    const panel = (
        <div className='new-expense__panel'>
            <button onClick={toggleFormHandler}>Add New Expense</button>
        </div>
    );

    const form = (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={(event) => inputChangeHandler('title', event.target.value)} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={(event) => inputChangeHandler('amount', event.target.value)} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" step="2023-12-31" onChange={(event) => inputChangeHandler('date', event.target.value)} />
                </div>
            </div>
            <div className='new-expense__flex'>
                <div className='new-expense__cancel'>
                    <button onClick={toggleFormHandler}>Cancel</button>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    );

    return (
        <div>
            {showForm ? form : panel}
        </div>
    )
};

export default ExpenseForm;