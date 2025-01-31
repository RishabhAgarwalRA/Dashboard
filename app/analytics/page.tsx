export default function Analytics() {
  const metrics = [
    { label: "Total Views", value: "1.2M" },
    { label: "Bounce Rate", value: "42.3%" },
    { label: "Average Time", value: "3m 24s" },
    { label: "Conversion Rate", value: "2.8%" },
  ];

  // Dummy data for the bar chart
  const chartData = [
    { month: "Jan", value: 65 },
    { month: "Feb", value: 85 },
    { month: "Mar", value: 45 },
    { month: "Apr", value: 75 },
    { month: "May", value: 55 },
    { month: "Jun", value: 95 },
    { month: "Jul", value: 65 },
    { month: "Aug", value: 85 },
  ];

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Analytics</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">
              {metric.label}
            </h3>
            <p className="mt-2 text-2xl font-bold">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Monthly Performance</h2>
        <div
          className="relative"
          style={{ height: "300px", padding: "20px 0 40px 0" }}
        >
          <div className="absolute inset-0 flex items-end justify-between px-2 space-x-2">
            {chartData.map((item) => (
              <div
                key={item.month}
                className="relative flex flex-col items-center w-full"
              >
                <div
                  className="bg-blue-600 rounded-t transition-all duration-300"
                  style={{
                    height: `${item.value * 3}px`, // Convert value to pixel height
                    minWidth: "20px",
                    maxWidth: "40px",
                  }}
                >
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-white text-xs">
                    {item.value}%
                  </span>
                </div>
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm text-gray-600"
                  style={{ top: "100%", marginTop: "8px" }}
                >
                  {item.month}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t pt-4">
          <h3 className="text-lg font-semibold mb-3">Top Pages</h3>
          <div className="space-y-4">
            {[
              { page: "/home", value: "12,234" },
              { page: "/products", value: "8,545" },
              { page: "/about", value: "6,234" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{item.page}</span>
                    <span className="text-sm text-gray-500">
                      {item.value} views
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${
                          (parseInt(item.value.replace(/,/g, "")) / 12234) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
