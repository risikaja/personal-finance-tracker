import { useSelector } from "react-redux";
import { useGetTransactionsQuery } from "../store/apis/transactionApi";

const Dashboard = () => {
  const { userInfo } = useSelector(
    (state) => state.user
  );

  const { data: transactions = [] } =
    useGetTransactionsQuery();

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance =
    totalIncome - totalExpense;

  return (
    <div>
      <h1>Dashboard</h1>

      <h3>
        Welcome {userInfo?.name}
      </h3>

      <div>
        <h2>Total Income</h2>
        <p>{totalIncome} €</p>
      </div>

      <div>
        <h2>Total Expenses</h2>
        <p>{totalExpense} €</p>
      </div>

      <div>
        <h2>Current Balance</h2>
        <p>{balance} €</p>
      </div>
    </div>
  );
};

export default Dashboard;