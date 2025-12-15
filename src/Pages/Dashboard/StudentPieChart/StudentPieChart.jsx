import { EllipsisVertical } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
const data = [
  { name: "Male", value: 58, color: "#2F5BFF" },
  { name: "Female", value: 40, color: "#2EA8FF" },
  { name: "Other", value: 2, color: "#FFA63D" },
];

const renderLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  name,
  fill,
}) => {
  const RADIAN = Math.PI / 180;
  const x = cx + (outerRadius + 25) * Math.cos(-midAngle * RADIAN);
  const y = cy + (outerRadius + 25) * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={fill}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={14}
      fontWeight={600}
    >
      {name} {(percent * 100).toFixed(0)}%
    </text>
  );
};

const CenterText = ({ cx, cy }) => (
  <text
    x={cx}
    y={cy}
    textAnchor="middle"
    dominantBaseline="middle"
    fontSize={28}
    fontWeight={700}
    fill="#111827"
  >
    60
  </text>
);

const StudentPieChart = () => {
  return (
    <div className="bg-white w-full lg:w-1/3 rounded-2xl p-6 shadow-md">
      <div className="mb-4 flex justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Student Pi Chart</h3>
          <p className="text-gray-500">September 2025</p>
        </div>
        <EllipsisVertical className="size-5" />
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={3}
              label={renderLabel}
              labelLine
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>

            <CenterText cx="50%" cy="50%" />

            <Legend verticalAlign="bottom" iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StudentPieChart;
