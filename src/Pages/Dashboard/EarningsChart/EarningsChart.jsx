import { Ellipsis } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const EarningsChart = () => {
  const data = [
    { month: "Jan", income: 0, expense: 0 },
    { month: "Feb", income: 80000, expense: 70000 },
    { month: "Mar", income: 60000, expense: 55000 },
    { month: "Apr", income: 120000, expense: 105000 },
    { month: "May", income: 110000, expense: 100000 },
    { month: "Jun", income: 195000, expense: 170000 },
    { month: "Jul", income: 140000, expense: 120000 },
    { month: "Aug", income: 50000, expense: 45000 },
    { month: "Sep", income: 145000, expense: 130000 },
    { month: "Oct", income: 70000, expense: 60000 },
    { month: "Nov", income: 155000, expense: 140000 },
    { month: "Dec", income: 160000, expense: 145000 },
  ];
  return (
    <div className="card bg-base-100 shadow-sm pl-3 py-5 pr-8">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-medium">Earnings</h3>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-500"></span>
              <span className="text-sm font-medium">Income</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-100"></span>
              <span className="text-sm font-medium">Expense</span>
            </div>
          </div>
          <div>
            <Ellipsis className="size-5" />
          </div>
        </div>
      </div>
      <div className="h-80 mt-5">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray={"5 5"} stroke="#DFE5EE" />
            <XAxis dataKey="month" fill="#000000" />
            <YAxis
              tickFormatter={(v) => `${v / 1000}K`}
              thick={{
                fill: "#000000",
                fontSize: "12px",
                color: "#000000",
              }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            
            <Line
              type="monotone"
              dataKey="income"
              stroke="#2857FF"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#CECEFF"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EarningsChart;
