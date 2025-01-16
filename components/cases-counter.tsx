'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Gavel } from 'lucide-react'

export default function CasesCounter() {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await fetch('http://utopia.pylex.xyz:9349/')
        const casesCount = await response.text()
        setCount(parseInt(casesCount))
      } catch (error) {
        console.error('Failed to fetch cases:', error)
      }
    }

    fetchCases()
    const interval = setInterval(fetchCases, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      ref={ref}
      className="text-center glassmorphism p-8 rounded-lg inline-block"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <motion.div 
        className="flex items-center justify-center mb-4"
        animate={{ rotate: [0, -30, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Gavel size={48} className="text-blue-400" />
      </motion.div>
      <motion.p 
        className="text-7xl font-bold mb-2"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        {count}+
      </motion.p>
      <p className="text-2xl">Cases Resolved</p>
    </motion.div>
  )
}
