"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Clock, LayoutDashboard, History, Settings, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Clock In/Out", href: "/clock", icon: Clock },
    { name: "History", href: "/history", icon: History },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Mobile menu button */}
      <div className="flex items-center border-b bg-white p-4 lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
        <div className="ml-4 flex items-center">
          <Clock className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold text-gray-700">TimeTrack</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for desktop */}
        <div className="hidden border-r bg-white lg:block lg:w-64">
          <div className="flex h-full flex-col">
            <div className="flex items-center space-x-2 border-b px-6 py-5">
              <Clock className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-gray-700">TimeTrack</span>
            </div>
            <nav className="flex-1 space-y-1 px-2 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                  )}
                >
                  <item.icon
                    className={cn(
                      "mr-3 h-5 w-5",
                      pathname === item.href ? "text-primary" : "text-gray-500 group-hover:text-gray-700",
                    )}
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="border-t p-4">
              <Button variant="outline" className="w-full justify-start border-gray-200" asChild>
                <Link href="/">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="absolute inset-0 z-40 lg:hidden">
            <div className="fixed inset-0 bg-gray-300/70" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="fixed inset-y-0 left-0 z-40 w-64 bg-white">
              <div className="flex h-full flex-col">
                <div className="flex items-center space-x-2 border-b px-6 py-5">
                  <Clock className="h-6 w-6 text-primary" />
                  <span className="text-lg font-bold text-gray-700">TimeTrack</span>
                </div>
                <nav className="flex-1 space-y-1 px-2 py-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "group flex items-center rounded-md px-3 py-2 text-sm font-medium",
                        pathname === item.href
                          ? "bg-primary/10 text-primary"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon
                        className={cn(
                          "mr-3 h-5 w-5",
                          pathname === item.href ? "text-primary" : "text-gray-500 group-hover:text-gray-700",
                        )}
                      />
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="border-t p-4">
                  <Button variant="outline" className="w-full justify-start border-gray-200" asChild>
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 overflow-auto bg-gray-50">
          <main className="container mx-auto p-4 md:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  )
}

