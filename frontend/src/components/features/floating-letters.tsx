"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

const germanLetters = ["Ä", "Ö", "Ü", "ß", "A", "B", "C"]

export function FloatingLetters() {
  const letters = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      letter: germanLetters[Math.floor(Math.random() * germanLetters.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 20 + Math.random() * 15,
      rotation: Math.random() * 360,
    }))
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {letters.map((letter) => (
        <motion.div
          key={letter.id}
          className="absolute text-5xl sm:text-6xl md:text-7xl font-bold opacity-[0.08] text-primary select-none"
          style={{
            left: `${letter.x}%`,
            top: `${letter.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [letter.rotation, letter.rotation + 360],
          }}
          transition={{
            duration: letter.duration,
            delay: letter.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {letter.letter}
        </motion.div>
      ))}
    </div>
  )
}

