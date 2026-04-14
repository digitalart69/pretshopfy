import { getUser } from "@/lib/auth"

export async function GET() {
  try {
    const user = await getUser() // ✅ TANPA PARAMETER

    if (!user) {
      return new Response("Unauthorized", { status: 401 })
    }

    if (user.role !== "ADMIN") {
      return new Response("Forbidden", { status: 403 })
    }

    return Response.json({ success: true })
  } catch (error) {
    return new Response("Server error", { status: 500 })
  }
}