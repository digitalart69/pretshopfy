"use client"

import { useEmployees, useDeleteEmployee } from "../../hooks/useEmployee"

export default function EmployeeTable({ onEdit }: any) {
  const { data } = useEmployees()
  const { mutate } = useDeleteEmployee()

  return (
    <table>
      <tbody>
        {data?.map((emp: any) => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.role}</td>
            <td>
              <button onClick={() => onEdit(emp)}>Edit</button>
              <button onClick={() => mutate(emp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}