import { cookies } from "next/headers"
import { jwtVerify } from "jose"

export async function getUser() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get("token")?.value

    if (!token) return null

    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    )

    return payload as {
      id: string
      role: string
    }
  } catch {
    return null
  }
}