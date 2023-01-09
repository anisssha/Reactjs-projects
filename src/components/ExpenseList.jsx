import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GobalState";
import ExpenseTransaction from "./ExpenseTransaction";

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {expenseTransactions.map((expenseTransaction) => (
          <ExpenseTransaction expenseTransaction={expenseTransaction} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
