import {
  ChartLine,
  DollarSign,
  GraduationCap,
  Landmark,
  Users,
} from "lucide-react";
import EarningsChart from "../EarningsChart/EarningsChart";
import CalendarCard from "../CalendarCard/CalendarCard";
import InstituteTable from "../InstituteTable/InstituteTable";
import StudentPieChart from "../StudentPieChart/StudentPieChart";

const DashboardHome = () => {
  const stats = [
    {
      label: "total students",
      icon: Landmark,
      count: 5,
      para: "+2% this month",
      anaIcon: <ChartLine className="size-4" />,
    },
    {
      label: "total institutions",
      icon: GraduationCap,
      count: 8,
      anaIcon: <ChartLine className="size-4" />,
      para: "+12 the last month",
    },
    {
      label: "total staff",
      icon: Users,
      count: 6,
      anaIcon: <ChartLine className="size-4" />,
      para: "5+ new hires",
    },
    {
      label: "total revenue",
      icon: DollarSign,
      count: 5,
      anaIcon: <ChartLine className="size-4" />,
      para: "+2 this month",
    },
  ];
  return (
    <div>
      <div className="space-y-0.5">
        <h2 className="text-3xl font-bold">Dashboard Overview</h2>
        <p className="text-gray-400">
          Welcome to your educational institutions management dashboard
        </p>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <div key={i} className="card shadow-md gap-y-4 p-6">
              <div className="stat-title text-base capitalize text-black font-medium flex items-center justify-between">
                {stat.label}
                <stat.icon className="text-gray-400 size-5" />
              </div>
              <div>
                <div className="stat-value">{stat.count}</div>
                <div className="stat-desc text-[#00A63E] flex items-center gap-1">
                  {stat.anaIcon} 21% more than last month
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center lg:justify-start gap-5 mt-8">
        <EarningsChart />
        <CalendarCard />
      </div>

      <div className="flex flex-col xl:flex-row items-start justify-center lg:justify-start gap-5 mt-8">
        <div className="w-full h-full lg:w-5xl">
          <InstituteTable />
        </div>
        <StudentPieChart />
      </div>
    </div>
  );
};

export default DashboardHome;
