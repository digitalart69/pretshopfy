"use client"

import { useState } from "react"
import { useEmployees, useDeleteEmployee } from "../../hooks/useEmployee"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function EmployeeTable() {
  const { data = [] } = useEmployees()
  const { mutate } = useDeleteEmployee()

  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)

  const pageSize = 5

  const filtered = data.filter((emp: any) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  )

  const paginated = filtered.slice(
    (page - 1) * pageSize,
    page * pageSize
  )

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full border rounded">
        <thead>
          <tr className="bg-muted">
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {paginated.map((emp: any) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.role}</td>
              <td>
                <Button
                  variant="destructive"
                  onClick={() => mutate(emp.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex gap-2">
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </Button>
        <Button onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </div>
    </div>
  )
}