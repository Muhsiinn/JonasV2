"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/lib/providers/theme-provider"
import { useAuth } from "@/lib/providers/auth-provider"
import { Moon, Sun, LogOut, User } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export function Header() {
  const { theme, setTheme } = useTheme()
  const { isAuthenticated, user, logout } = useAuth()
  const router = useRouter()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleLogout = async () => {
    await logout()
    router.push("/")
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          JonasV2
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2"
        >
          {isAuthenticated && user && (
            <div className="flex items-center gap-2 mr-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted">
                <User className="h-4 w-4" />
                <span className="text-sm font-medium">{user.username}</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                aria-label="Logout"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}

