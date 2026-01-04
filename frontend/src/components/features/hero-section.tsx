"use client"

import { useState } from "react"
import { AnimatedButton } from "./animated-button"
import { motion } from "framer-motion"
import { Sparkles, BookOpen, Languages } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { AuthDialog } from "@/components/auth/auth-dialog"
import { useAuth } from "@/lib/providers/auth-provider"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const [authDialogOpen, setAuthDialogOpen] = useState(false)
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  const handleStartLearning = () => {
    if (isAuthenticated) {
      router.push("/learn")
    } else {
      setAuthDialogOpen(true)
    }
  }
  return (
    <section className="relative flex flex-col items-center justify-center space-y-8 py-20 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 -z-10 bg-gradient-to-br  from-primary/10 via-background to-accent/5"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-2"
        >
          <Sparkles className="h-5 w-5 text-primary" />
          <Badge variant="secondary" className="text-sm font-medium">
            AI-Powered Language Learning
          </Badge>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Learn German Through
          <br />
          <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            Interactive Stories
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          Master German naturally by engaging with AI-generated stories. Practice reading, listening, and speaking in context, not in isolation.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col gap-4 sm:flex-row"
      >
        <AnimatedButton size="lg" delay={0.7} onClick={handleStartLearning}>
          Start Learning Free
        </AnimatedButton>
        <AnimatedButton size="lg" variant="outline" delay={0.8}>
          Watch Demo
        </AnimatedButton>
      </motion.div>
      <AuthDialog
        open={authDialogOpen}
        onOpenChange={setAuthDialogOpen}
        initialMode="login"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex items-center gap-8 pt-8 text-sm text-muted-foreground"
      >
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          <span>1000+ Stories</span>
        </div>
        <div className="flex items-center gap-2">
          <Languages className="h-4 w-4" />
          <span>All Levels</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          <span>AI-Powered</span>
        </div>
      </motion.div>
    </section>
  )
}
