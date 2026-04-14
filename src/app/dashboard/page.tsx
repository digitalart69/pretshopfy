import DashboardChart from "@/components/dashboard/DashboardChart"

export const dynamic = "force-dynamic"
export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <DashboardChart />
    </div>
  )
}
