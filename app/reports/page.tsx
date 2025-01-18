"use client"

import { useState } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { AnimateIn } from '../../components/animate-in'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export const metadata = {
  title: 'Report Statistics',
}

const ReportsPage = () => {
  const [data] = useState([
    { name: "Spam", value: 1 },
    { name: "Harassment", value: 3 },
    { name: "Scam", value: 5 },
    { name: "NSFW Content", value: 9 },
    { name: "Hate Speech", value: 2 },
  ])

  const sortedData = [...data].sort((a, b) => b.value - a.value)
  const topReason = sortedData[0]

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <AnimateIn from="bottom">
          <h1 className="text-4xl font-bold mb-8 text-gradient">Report Statistics</h1>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Top 5 Reasons for Reports</CardTitle>
              <CardDescription>
                Overview of the most common reasons for user reports
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ChartContainer
                config={{
                  value: {
                    label: "Number of Reports",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sortedData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value" fill="var(--color-value)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
          <div className="mt-8 p-6 bg-gradient rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Top Reason for Reports</h2>
            <p className="text-xl">
              The most reported issue is <span className="font-bold text-yellow-300">{topReason.name}</span> with{" "}
              <span className="font-bold text-yellow-300">{topReason.value}</span> reports.
            </p>
          </div>
        </AnimateIn>
      </main>
      <Footer />
    </div>
  )
}

export default ReportsPage

