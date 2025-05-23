import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Clock } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-sm border border-gray-200 sm:p-8">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex items-center space-x-2">
            <Clock className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-gray-700">TimeTrack</h1>
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-gray-700">Welcome back</h2>
          <p className="text-sm text-gray-600">Sign in to your account to continue</p>
        </div>

        <div className="space-y-6">
          <form action="/dashboard">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="name@company.com" required className="w-full bg-white" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-700">
                    Password
                  </Label>
                  <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" placeholder="••••••••" required className="w-full bg-white" />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
