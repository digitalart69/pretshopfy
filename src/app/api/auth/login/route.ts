import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST(req: Request) {
  const body = await req.json()

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  })

  if (!user) {
    return new Response("User not found", { status: 404 })
  }

  const valid = await bcrypt.compare(body.password, user.password)

  if (!valid) {
    return new Response("Wrong password", { status: 401 })
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: "1d" }
  )

  return new Response(JSON.stringify({ token }), {
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": `token=${token}; Path=/; HttpOnly`,
    },
  })
}