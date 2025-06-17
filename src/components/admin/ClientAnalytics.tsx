
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Users, UserPlus, UserCheck, Clock } from "lucide-react";
import { useState } from "react";

const ClientAnalytics = () => {
  const [timeRange, setTimeRange] = useState("30");

  const clientGrowthData = [
    { name: "Jan", newClients: 15, returningClients: 45, total: 60 },
    { name: "Feb", newClients: 22, returningClients: 58, total: 80 },
    { name: "Mar", newClients: 18, returningClients: 62, total: 80 },
    { name: "Apr", newClients: 25, returningClients: 65, total: 90 },
    { name: "May", newClients: 30, returningClients: 70, total: 100 },
    { name: "Jun", newClients: 28, returningClients: 72, total: 100 }
  ];

  const servicePopularityData = [
    { service: "Classic Cut", bookings: 85 },
    { service: "Beard Trim", bookings: 65 },
    { service: "Premium Package", bookings: 35 },
    { service: "Hair Wash", bookings: 45 },
    { service: "Hot Towel Shave", bookings: 25 }
  ];

  const topClients = [
    { name: "Ahmed Hassan", visits: 12, totalSpent: 16500, lastVisit: "2 days ago", status: "VIP" },
    { name: "Sarah Mohamed", visits: 8, totalSpent: 11200, lastVisit: "1 week ago", status: "Regular" },
    { name: "David Wilson", visits: 6, totalSpent: 8800, lastVisit: "3 days ago", status: "Regular" },
    { name: "Michael Brown", visits: 10, totalSpent: 14000, lastVisit: "5 days ago", status: "VIP" },
    { name: "Emma Johnson", visits: 5, totalSpent: 7500, lastVisit: "1 week ago", status: "New" }
  ];

  const appointmentData = [
    { time: "9:00", monday: 2, tuesday: 3, wednesday: 2, thursday: 4, friday: 5, saturday: 6 },
    { time: "10:00", monday: 3, tuesday: 4, wednesday: 3, thursday: 5, friday: 6, saturday: 7 },
    { time: "11:00", monday: 4, tuesday: 5, wednesday: 4, thursday: 6, friday: 7, saturday: 8 },
    { time: "12:00", monday: 3, tuesday: 4, wednesday: 3, thursday: 5, friday: 6, saturday: 7 },
    { time: "13:00", monday: 2, tuesday: 3, wednesday: 2, thursday: 4, friday: 5, saturday: 6 },
    { time: "14:00", monday: 4, tuesday: 5, wednesday: 4, thursday: 6, friday: 7, saturday: 8 },
    { time: "15:00", monday: 5, tuesday: 6, wednesday: 5, thursday: 7, friday: 8, saturday: 9 },
    { time: "16:00", monday: 6, tuesday: 7, wednesday: 6, thursday: 8, friday: 9, saturday: 10 },
    { time: "17:00", monday: 4, tuesday: 5, wednesday: 4, thursday: 6, friday: 7, saturday: 8 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Client Analytics</h2>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Last 7 days</SelectItem>
            <SelectItem value="30">Last 30 days</SelectItem>
            <SelectItem value="90">Last 3 months</SelectItem>
            <SelectItem value="365">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Key Client Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+15%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Clients</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Returning Clients</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Visit Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45 min</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2 min</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Client Growth Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Client Growth Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={clientGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="total" stroke="#3B82F6" strokeWidth={3} name="Total Clients" />
              <Line type="monotone" dataKey="newClients" stroke="#10B981" strokeWidth={2} name="New Clients" />
              <Line type="monotone" dataKey="returningClients" stroke="#F59E0B" strokeWidth={2} name="Returning Clients" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Service Popularity */}
        <Card>
          <CardHeader>
            <CardTitle>Most Popular Services</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={servicePopularityData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="service" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="bookings" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Clients */}
        <Card>
          <CardHeader>
            <CardTitle>Top Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topClients.map((client, index) => (
                <div key={client.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{client.name}</span>
                      <Badge variant={client.status === "VIP" ? "default" : client.status === "Regular" ? "secondary" : "outline"}>
                        {client.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500">
                      {client.visits} visits • Last: {client.lastVisit}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-blue-600">{client.totalSpent.toLocaleString()} ETB</div>
                    <div className="text-sm text-gray-500">Total spent</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Appointment Heatmap */}
      <Card>
        <CardHeader>
          <CardTitle>Peak Hours Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="grid grid-cols-8 gap-2 text-sm font-medium text-gray-600">
              <div>Time</div>
              <div className="text-center">Mon</div>
              <div className="text-center">Tue</div>
              <div className="text-center">Wed</div>
              <div className="text-center">Thu</div>
              <div className="text-center">Fri</div>
              <div className="text-center">Sat</div>
              <div className="text-center">Avg</div>
            </div>
            {appointmentData.map((row) => {
              const avg = Math.round((row.monday + row.tuesday + row.wednesday + row.thursday + row.friday + row.saturday) / 6);
              return (
                <div key={row.time} className="grid grid-cols-8 gap-2 text-sm">
                  <div className="font-medium">{row.time}</div>
                  <div className="text-center p-2 rounded" style={{ backgroundColor: `rgba(59, 130, 246, ${row.monday / 10})` }}>
                    {row.monday}
                  </div>
                  <div className="text-center p-2 rounded" style={{ backgroundColor: `rgba(59, 130, 246, ${row.tuesday / 10})` }}>
                    {row.tuesday}
                  </div>
                  <div className="text-center p-2 rounded" style={{ backgroundColor: `rgba(59, 130, 246, ${row.wednesday / 10})` }}>
                    {row.wednesday}
                  </div>
                  <div className="text-center p-2 rounded" style={{ backgroundColor: `rgba(59, 130, 246, ${row.thursday / 10})` }}>
                    {row.thursday}
                  </div>
                  <div className="text-center p-2 rounded" style={{ backgroundColor: `rgba(59, 130, 246, ${row.friday / 10})` }}>
                    {row.friday}
                  </div>
                  <div className="text-center p-2 rounded" style={{ backgroundColor: `rgba(59, 130, 246, ${row.saturday / 10})` }}>
                    {row.saturday}
                  </div>
                  <div className="text-center p-2 rounded font-semibold" style={{ backgroundColor: `rgba(59, 130, 246, ${avg / 10})` }}>
                    {avg}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
            <span>Less busy</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((intensity) => (
                <div
                  key={intensity}
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: `rgba(59, 130, 246, ${intensity / 10})` }}
                />
              ))}
            </div>
            <span>More busy</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientAnalytics;
