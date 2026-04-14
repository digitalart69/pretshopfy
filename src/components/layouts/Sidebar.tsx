"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Employee",
    href: "/employee",
    icon: Users,
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-background border-r hidden md:flex flex-col">
      {/* Logo */}
      <div className="p-6 font-bold text-lg border-b">
        Admin Panel
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-2 p-2 rounded transition",
                isActive
                  ? "bg-primary text-white"
                  : "hover:bg-muted"
              )}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}