import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GobalState";
import IncomeTransaction from "./IncomeTransaction";

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-income">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {incomeTransactions.map((incomeTransaction) => (
          <IncomeTransaction incomeTransaction={incomeTransaction} />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
