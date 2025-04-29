import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Calendar, Download, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HistoryPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-gray-700">Time History</h1>
        <Button variant="outline" size="sm" className="hidden md:flex border-gray-300 text-gray-700">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <Card className="mt-6 bg-gray-50 border-gray-200">
        <CardHeader>
          <CardTitle>Filter Time Entries</CardTitle>
          <CardDescription>View and filter your time tracking history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="date-from">From</Label>
              <div className="relative">
                <Input id="date-from" type="date" className="w-full bg-white" />
                <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-to">To</Label>
              <div className="relative">
                <Input id="date-to" type="date" className="w-full bg-white" />
                <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select defaultValue="all">
                <SelectTrigger id="status" className="bg-white">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Entries</SelectItem>
                  <SelectItem value="clock-in">Clock In</SelectItem>
                  <SelectItem value="clock-out">Clock Out</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="mt-4">
            <Filter className="mr-2 h-4 w-4" />
            Apply Filters
          </Button>
        </CardContent>
      </Card>

      <Card className="mt-6 bg-gray-50 border-gray-200">
        <CardHeader>
          <CardTitle>Time History</CardTitle>
          <CardDescription>Your complete time tracking history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b border-gray-200 bg-gray-100">
                  <th className="h-12 px-4 text-left align-middle font-medium text-gray-700">Date</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-gray-700">Clock In</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-gray-700">Clock Out</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-gray-700">Duration</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {[
                  {
                    date: "Apr 26, 2024",
                    clockIn: "9:00 AM",
                    clockOut: "5:00 PM",
                    duration: "8.0 hrs",
                    status: "Completed",
                  },
                  {
                    date: "Apr 25, 2024",
                    clockIn: "8:30 AM",
                    clockOut: "4:45 PM",
                    duration: "8.25 hrs",
                    status: "Completed",
                  },
                  {
                    date: "Apr 24, 2024",
                    clockIn: "9:15 AM",
                    clockOut: "6:00 PM",
                    duration: "8.75 hrs",
                    status: "Completed",
                  },
                  {
                    date: "Apr 23, 2024",
                    clockIn: "8:45 AM",
                    clockOut: "5:15 PM",
                    duration: "8.5 hrs",
                    status: "Completed",
                  },
                  {
                    date: "Apr 22, 2024",
                    clockIn: "9:00 AM",
                    clockOut: "5:30 PM",
                    duration: "8.5 hrs",
                    status: "Completed",
                  },
                  {
                    date: "Apr 19, 2024",
                    clockIn: "8:30 AM",
                    clockOut: "4:30 PM",
                    duration: "8.0 hrs",
                    status: "Completed",
                  },
                  {
                    date: "Apr 18, 2024",
                    clockIn: "9:00 AM",
                    clockOut: "5:15 PM",
                    duration: "8.25 hrs",
                    status: "Completed",
                  },
                  {
                    date: "Apr 17, 2024",
                    clockIn: "8:45 AM",
                    clockOut: "5:30 PM",
                    duration: "8.75 hrs",
                    status: "Completed",
                  },
                  {
                    date: "Apr 16, 2024",
                    clockIn: "9:15 AM",
                    clockOut: "5:45 PM",
                    duration: "8.5 hrs",
                    status: "Completed",
                  },
                  {
                    date: "Apr 15, 2024",
                    clockIn: "8:30 AM",
                    clockOut: "5:00 PM",
                    duration: "8.5 hrs",
                    status: "Completed",
                  },
                ].map((entry, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-200 transition-colors hover:bg-gray-100 data-[state=selected]:bg-gray-100"
                  >
                    <td className="p-4 align-middle text-gray-700">{entry.date}</td>
                    <td className="p-4 align-middle text-gray-700">{entry.clockIn}</td>
                    <td className="p-4 align-middle text-gray-700">{entry.clockOut}</td>
                    <td className="p-4 align-middle text-gray-700">{entry.duration}</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary">
                        {entry.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}
