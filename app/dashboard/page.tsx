import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, History, BarChart3 } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-gray-700">Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <p className="text-sm text-gray-600">Today: {new Date().toLocaleDateString()}</p>
          </div>
          <Button asChild>
            <Link href="/clock">Clock In/Out</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <Card className="bg-gray-50 border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Status</CardTitle>
            <Clock className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-700">Clocked Out</div>
            <p className="text-xs text-gray-600">Last activity: Yesterday, 5:30 PM</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-50 border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hours This Week</CardTitle>
            <BarChart3 className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-700">32.5 hrs</div>
            <p className="text-xs text-gray-600">+2.5 hours from last week</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-50 border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
            <History className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-700">23 entries</div>
            <p className="text-xs text-gray-600">This month</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card className="bg-gray-50 border-gray-200">
          <CardHeader>
            <CardTitle>Recent Time Entries</CardTitle>
            <CardDescription>Your clock in/out activity for the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: "Monday, Apr 22", clockIn: "9:00 AM", clockOut: "5:30 PM", hours: "8.5" },
                { date: "Tuesday, Apr 23", clockIn: "8:45 AM", clockOut: "5:15 PM", hours: "8.5" },
                { date: "Wednesday, Apr 24", clockIn: "9:15 AM", clockOut: "6:00 PM", hours: "8.75" },
                { date: "Thursday, Apr 25", clockIn: "8:30 AM", clockOut: "4:45 PM", hours: "8.25" },
                { date: "Friday, Apr 26", clockIn: "9:00 AM", clockOut: "5:00 PM", hours: "8.0" },
              ].map((entry, i) => (
                <div key={i} className="flex items-center justify-between border-b border-gray-200 pb-2 last:border-0">
                  <div>
                    <p className="font-medium text-gray-700">{entry.date}</p>
                    <p className="text-sm text-gray-600">
                      {entry.clockIn} - {entry.clockOut}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-700">{entry.hours} hrs</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
