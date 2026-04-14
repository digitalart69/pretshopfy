import { prisma } from "../../../../lib/prisma"
import { NextResponse } from "next/server"

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json()

  const data = await prisma.employee.update({
    where: { id: params.id },
    data: body,
  })

  return NextResponse.json(data)
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await prisma.employee.delete({
    where: { id: params.id },
  })

  return NextResponse.json({ success: true })
}