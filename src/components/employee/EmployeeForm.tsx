"use client"

import { useForm } from "react-hook-form"
import { useCreateEmployee, useUpdateEmployee } from "../../hooks/useEmployee"

export default function EmployeeForm({ selected, onDone }: any) {
  const { mutate: create } = useCreateEmployee()
  const { mutate: update } = useUpdateEmployee()

  const { register, handleSubmit, reset } = useForm({
    defaultValues: selected || {},
  })

  const onSubmit = (data: any) => {
    if (selected) {
      update(
        { id: selected.id, data },
        { onSuccess: () => onDone() }
      )
    } else {
      create(data, { onSuccess: () => reset() })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Nama" />
      <input {...register("email")} placeholder="Email" />
      <input {...register("role")} placeholder="Role" />

      <button type="submit">
        {selected ? "Update" : "Create"}
      </button>
    </form>
  )
}