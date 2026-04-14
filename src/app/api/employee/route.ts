import { prisma } from "../../../lib/prisma"
import { NextResponse } from "next/server"

// GET ALL
export async function GET() {
  const data = await prisma.employee.findMany({
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(data)
}

// CREATE
export async function POST(req: Request) {
  const body = await req.json()

  const employee = await prisma.employee.create({
    data: body,
  })

  return NextResponse.json(employee)
}