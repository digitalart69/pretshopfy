import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const employees = await prisma.employee.findMany()

  const count = employees.length

  return NextResponse.json([
    { name: "Employees", total: count },
  ])
}