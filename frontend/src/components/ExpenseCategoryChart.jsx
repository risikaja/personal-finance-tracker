import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const ExpenseCategoryChart = ({
  transactions,
}) => {
  const expenses =
    transactions.filter(
      (t) => t.type === "expense"
    );

  const grouped = {};

  expenses.forEach((expense) => {
    grouped[
      expense.category
    ] =
      (grouped[
        expense.category
      ] || 0) + expense.amount;
  });

  const data =
    Object.keys(grouped).map(
      (category) => ({
        category,
        amount:
          grouped[category],
      })
    );

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#A569BD",
    "#EC7063",
  ];

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">

        <h3 className="mb-3">
          Expenses by Category
        </h3>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <PieChart>

            <Pie
              data={data}
              dataKey="amount"
              nameKey="category"
              outerRadius={100}
              label
            >
              {data.map(
                (_, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index %
                          COLORS.length
                      ]
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

export default ExpenseCategoryChart;