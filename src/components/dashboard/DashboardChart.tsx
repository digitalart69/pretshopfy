"use client"

import { useEffect, useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"
import axios from "axios"

export default function DashboardChart() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("/api/stats").then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <LineChart width={400} height={200} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="total" />
    </LineChart>
  )
}