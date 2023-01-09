import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GobalState";
import { useContext } from "react";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
    console.log(income);
  };
  const handelIncomeSubmit = (e) => {
    e.preventDefault();

    if (incomeText != '') {
      const newIncomeTransaction = {
      id: uuidv4(),
      incomeText,
      incomeAmount: incomeAmount * 1,
    };
    addIncome(newIncomeTransaction);
    }

  };
  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
    console.log(expense);
  };
  const handelExpenseSubmit = (e) => {
    e.preventDefault();

    if (expenseText != "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };

      addExpense(newExpenseTransaction);
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handelIncomeSubmit}>
        <div className="input-group income">
          <input
            type="text"
            name="incomeText"
            placeholder="Add income"
            onChange={onChangeIncome}
          />
          <input
            type="number"
            name="incomeAmount"
            placeholder="Add amount"
            onChange={onChangeIncome}
          />
          <input type="Submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={handelExpenseSubmit}>
        <div className="input-group expense">
          <input
            type="text"
            name="expenseText"
            placeholder="Add Expense"
            onChange={onChangeExpense}
          />
          <input
            type="number"
            name="expenseAmount"
            placeholder="Add amount"
            onChange={onChangeExpense}
          />
          <input type="Submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
