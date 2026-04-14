import axios from "axios"
import { Employee } from "../types/employee"

const API = "/api/employee"

export const getEmployees = async (): Promise<Employee[]> => {
  const res = await axios.get(API)
  return res.data
}

export const createEmployee = async (data: Partial<Employee>) => {
  const res = await axios.post(API, data)
  return res.data
}

export const updateEmployee = async (id: string, data: Partial<Employee>) => {
  const res = await axios.put(`${API}/${id}`, data)
  return res.data
}

export const deleteEmployee = async (id: string) => {
  await axios.delete(`${API}/${id}`)
}