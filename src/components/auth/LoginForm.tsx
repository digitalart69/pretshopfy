"use client"

import { useState } from "react"
import axios from "axios"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    await axios.post("/api/login", {
      email,
      password,
    })

    // ❌ tidak perlu simpan token lagi
    // karena sudah di cookie

    window.location.href = "/dashboard"
  }

  return (
    <div className="space-y-3">
      <input onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}