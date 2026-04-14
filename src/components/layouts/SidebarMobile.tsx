"use client"

import { X } from "lucide-react"
import Sidebar from "./Sidebar"

export default function SidebarMobile({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (v: boolean) => void
}) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div className="w-64 bg-background h-full p-4">
        <button onClick={() => setOpen(false)}>
          <X />
        </button>

        <Sidebar />
      </div>
    </div>
  )
}