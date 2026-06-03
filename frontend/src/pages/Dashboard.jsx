import { useSelector } from "react-redux";

import MainLayout from "../layouts/MainLayout";
import DashboardCard from "../components/DashboardCard";
import TransactionManager from "../components/TransactionManager";

import { useGetTransactionsQuery } from "../store/apis/transactionApi";

import FinanceChart
  from "../components/FinanceChart";

import ExpenseCategoryChart
  from "../components/ExpenseCategoryChart";

const Dashboard = () => {
  const { userInfo } = useSelector(
    (state) => state.user
  );

  const {
    data: transactions = [],
  } = useGetTransactionsQuery();

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance =
    totalIncome - totalExpense;

  return (
    <MainLayout>
      <div className="mb-4">
        <h1>
          Welcome {userInfo?.name}
        </h1>

        <p>
          Personal Finance Dashboard
        </p>
      </div>

      <div className="row g-4 mb-4">

  <div className="col-lg-3 col-md-6">
    <DashboardCard
      title="Current Balance"
      value={balance}
      isCurrency={true}
    />
  </div>

  <div className="col-lg-3 col-md-6">
    <DashboardCard
      title="Total Income"
      value={totalIncome}
      isCurrency={true}
    />
  </div>

  <div className="col-lg-3 col-md-6">
    <DashboardCard
      title="Total Expenses"
      value={totalExpense}
      isCurrency={true}
    />
  </div>

  <div className="col-lg-3 col-md-6">
    <DashboardCard
      title="Transactions"
      value={transactions.length}
      isCurrency={false}
    />
  </div>

</div>

      

      <hr className="my-4" />

      <FinanceChart
        income={totalIncome}
        expense={totalExpense}
      />

      <ExpenseCategoryChart
        transactions={transactions}
      />

      <TransactionManager />
    </MainLayout>
  );
};

export default Dashboard;