const Icons = {
  Chart: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  ),
  Users: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  Dollar: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  ),
  Trend: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  ),
};

const stats = [
  {
    name: "Total Revenue",
    value: "$45,231.89",
    icon: Icons.Dollar,
    change: "+20.1%",
    trend: "up",
  },
  {
    name: "Active Users",
    value: "2,338",
    icon: Icons.Users,
    change: "+15.1%",
    trend: "up",
  },
  {
    name: "Conversion Rate",
    value: "3.24%",
    icon: Icons.Chart,
    change: "+7.3%",
    trend: "up",
  },
  {
    name: "Growth",
    value: "+12.40%",
    icon: Icons.Trend,
    change: "+2.5%",
    trend: "down",
  },
];

const recentActivity = [
  {
    user: "John Doe",
    action: "Created a new project",
    timestamp: "2 minutes ago",
  },
  {
    user: "Jane Smith",
    action: "Updated dashboard settings",
    timestamp: "1 hour ago",
  },
  {
    user: "Mike Johnson",
    action: "Added new team member",
    timestamp: "3 hours ago",
  },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
              <stat.icon />
            </div>
            <div className="mt-2">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p
                className={`text-xs ${
                  stat.trend === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.change} from last month
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b last:border-0 pb-4 last:pb-0"
              >
                <div>
                  <p className="font-medium">{activity.user}</p>
                  <p className="text-sm text-gray-500">{activity.action}</p>
                </div>
                <span className="text-sm text-gray-400">
                  {activity.timestamp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
