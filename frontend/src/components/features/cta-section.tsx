"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AnimatedButton } from "./animated-button"
import { Sparkles } from "lucide-react"
import { AuthDialog } from "@/components/auth/auth-dialog"
import { useAuth } from "@/lib/providers/auth-provider"
import { useRouter } from "next/navigation"

export function CTASection() {
  const [authDialogOpen, setAuthDialogOpen] = useState(false)
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  const handleGetStarted = () => {
    if (isAuthenticated) {
      router.push("/learn")
    } else {
      setAuthDialogOpen(true)
    }
  }
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-4"
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
          </motion.div>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Start Your German Journey?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of learners mastering German through interactive stories and AI-powered conversations.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <AnimatedButton size="lg" delay={0.5} onClick={handleGetStarted}>
              Get Started Free
            </AnimatedButton>
            <AnimatedButton size="lg" variant="outline" delay={0.6}>
              Learn More
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
      <AuthDialog
        open={authDialogOpen}
        onOpenChange={setAuthDialogOpen}
        initialMode="register"
      />
    </section>
  )
}

