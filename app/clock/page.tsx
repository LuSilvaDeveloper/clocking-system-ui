import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Clock, MapPin } from "lucide-react"

export default function ClockPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-gray-700">Clock In/Out</h1>
        <div className="text-sm text-gray-600">
          {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center">
        <Card className="w-full max-w-md bg-gray-50 border-gray-200">
          <CardHeader className="text-center">
            <CardTitle>Time Tracking</CardTitle>
            <CardDescription>Track your work hours by clocking in and out</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="text-6xl font-bold tracking-tighter text-gray-700">
                {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="mr-1 h-4 w-4" />
                <span>Office Location</span>
              </div>
              <div className="rounded-full bg-primary/10 p-6">
                <Clock className="h-12 w-12 text-primary" />
              </div>
              <div className="text-xl font-semibold text-gray-700">Currently Clocked Out</div>
              <div className="text-sm text-gray-600">Last activity: Yesterday, 5:30 PM</div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Button size="lg" className="w-full">
                Clock In
              </Button>
              <Button size="lg" variant="outline" className="w-full border-gray-300 text-gray-700" disabled>
                Clock Out
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 w-full max-w-md bg-gray-50 border-gray-200">
          <CardHeader>
            <CardTitle>Today's Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">No activity recorded today</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
