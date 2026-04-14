"use client"

import { useEmployees, useDeleteEmployee } from "../../hooks/useEmployee"
import { Button } from "@/components/ui/button"

type Props = {
  onEdit: (emp: any) => void
}

export default function EmployeeTable({ onEdit }: Props) {
  const { data = [] } = useEmployees()
  const { mutate } = useDeleteEmployee()

  return (
    <div className="space-y-4">
      <table className="w-full border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {data.map((emp: any) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.role}</td>
              <td className="flex gap-2">
                <Button onClick={() => onEdit(emp)}>
                  Edit
                </Button>

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
    </div>
  )
}