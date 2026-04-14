"use client"

import { useState } from "react"
import EmployeeForm from "../../../components/employee/EmployeeForm"
import EmployeeTable from "../../../components/employee/EmployeeTable"

export default function Page() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="p-6 space-y-6">
      <h1>Employee CRUD</h1>

      <EmployeeForm
        selected={selected}
        onDone={() => setSelected(null)}
      />

      <EmployeeTable onEdit={setSelected} />
    </div>
  )
}