"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useTheme } from './theme-provider'
import { Moon, Sun, Shield } from 'lucide-react'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-background/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Shield size={32} className="text-blue-400" />
          <span className="text-2xl font-bold text-gradient">Discord Justice</span>
        </Link>
        <nav className="flex items-center gap-6">
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link href="#about" className="hover:text-blue-400 transition-colors">Mission</Link></li>
            <li><Link href="#features" className="hover:text-blue-400 transition-colors">Protection</Link></li>
          </ul>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </nav>
      </div>
    </header>
  )
}

