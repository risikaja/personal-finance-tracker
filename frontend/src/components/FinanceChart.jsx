import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const FinanceChart = ({
  income,
  expense,
}) => {
  const data = [
    {
      name: "Income",
      value: income,
    },
    {
      name: "Expense",
      value: expense,
    },
  ];

  const COLORS = [
    "#198754",
    "#dc3545",
  ];

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">

        <h3 className="mb-3">
          Income vs Expenses
        </h3>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={100}
              label
            >
              {data.map(
                (_, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[index]
                    }
                  />
                )
              )}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
};

export default FinanceChart;