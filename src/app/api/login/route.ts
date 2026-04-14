import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { SignJWT } from "jose"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    return NextResponse.json({ error: "User not found" })
  }

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) {
    return NextResponse.json({ error: "Wrong password" })
  }

  // 🔥 create JWT
  const token = await new SignJWT({
    id: user.id,
    role: user.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1d")
    .sign(new TextEncoder().encode(process.env.JWT_SECRET))

  // 🔥 set cookie
  const res = NextResponse.json({ success: true })

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: true,
    path: "/",
  })

  return res
}