"use client"

import { createContext, ReactNode, useState } from "react"
import { motion, MotionValue } from "motion/react"

type DynamicColorsContextValue = {
  colors: Record<string, MotionValue<string>>
  isEnabled: boolean
  addColor: (cssVariable: string, value: MotionValue<string>) => void
}

export const DynamicColorsContext = createContext<DynamicColorsContextValue>({
  isEnabled: false,
  colors: {},
  addColor: (_cssVariable: string, _value: MotionValue<string>) => {},
})

type DynamicColorsProviderProps = {
  children: ReactNode
  className?: string
}

export default function DynamicColorsProvider({
  children,
  className,
}: DynamicColorsProviderProps) {
  const [colors, setColors] = useState<Record<string, MotionValue>>({})

  function addColor(name: string, value: MotionValue<string>) {
    if (colors[name]) {
      return
    }
    setColors((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <DynamicColorsContext.Provider
      value={{
        colors,
        isEnabled: true,
        addColor,
      }}
    >
      <motion.div style={colors} className={className}>
        {children}
      </motion.div>
    </DynamicColorsContext.Provider>
  )
}
