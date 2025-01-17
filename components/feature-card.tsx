"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden glassmorphism hover:bg-accent/50 transition-colors duration-300">
        <CardContent className="p-6">
          {icon && (
            <div className="mb-4 text-blue-400">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-semibold mb-4 text-gradient">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

