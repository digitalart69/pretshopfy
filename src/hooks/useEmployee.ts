"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/employeeService"

export const useEmployees = () => {
  return useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  })
}

export const useCreateEmployee = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: createEmployee,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["employees"] }),
  })
}

export const useUpdateEmployee = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: any) => updateEmployee(id, data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["employees"] }),
  })
}

export const useDeleteEmployee = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["employees"] }),
  })
}