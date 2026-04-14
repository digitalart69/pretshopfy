"use client"

import { Menu } from "lucide-react"
import { useState } from "react"
import ThemeToggle from "./ThemeToggle"
import SidebarMobile from "./SidebarMobile"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="h-14 border-b flex items-center justify-between px-6 bg-background">
        <div className="flex items-center gap-2">
          <button onClick={() => setOpen(true)} className="md:hidden">
            <Menu />
          </button>
          <h1 className="font-semibold">Dashboard</h1>
        </div>

        <div className="flex items-center gap-3">
  <ThemeToggle />
  <span className="text-sm text-muted-foreground">
    Admin
  </span>
</div>
      </header>

      <SidebarMobile open={open} setOpen={setOpen} />
    </>
  )
}