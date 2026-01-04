"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ReactNode, ComponentProps } from "react"
import { VariantProps } from "class-variance-authority"

interface AnimatedButtonProps extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  children: ReactNode
  delay?: number
  asChild?: boolean
}

export function AnimatedButton({ children, delay = 0, ...props }: AnimatedButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button {...props}>{children}</Button>
    </motion.div>
  )
}

