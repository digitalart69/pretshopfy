"use client"

import { useState } from "react"
import axios from "axios"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    const res = await axios.post("/api/login", {
      email,
      password,
    })

    localStorage.setItem("token", res.data.token)
    window.location.href = "/dashboard"
  }

  return (
    <div className="space-y-3">
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}