import Sidebar from "@/components/layouts/Sidebar"
import Navbar from "@/components/layouts/Navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}