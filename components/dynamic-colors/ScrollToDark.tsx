"use client"

import { ReactNode, useRef } from "react"
import { circInOut, useScroll, useTransform } from "motion/react"

import useDynamicColor from "@/components/dynamic-colors/useDynamicColor"

// Use this:
// https://tailwindcss.com/docs/theme#referencing-in-javascript
// Ex: <motion.div animate={{ backgroundColor: "var(--color-blue-500)" }} />

// const LIGHT_BACKGROUND = fullConfig.theme.colors.white
// const DEEP_BLUE = fullConfig.theme.colors.blue[800]
// const MIDNIGHT_BLUE = fullConfig.theme.colors.blue[900]
// const WHITE = fullConfig.theme.colors.white
// const BLUE_200 = fullConfig.theme.colors.blue[200]
// const BLUE_100 = fullConfig.theme.colors.blue[100]
// const GRAY_100 = fullConfig.theme.colors.gray[100]

type ScrollToDarkProps = {
  children?: ReactNode
  className?: string
}

export default function ScrollToDark({
  children,
  className,
}: ScrollToDarkProps) {
  const targetRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    // https://motion.dev/docs/react-use-scroll#offset
    offset: ["start 0.66", "end 0.33"],
  })

  const darkPercentage = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0],
    { ease: circInOut }, // works well to slowly animate towards the point where bg-color and text-color meet and then quickly go over it
  )

  useDynamicColor({
    cssVariableName: "--background-color-dynamic",
    start: "var(--color-slate-200)",
    end: "var(--color-slate-900)",
    percentage: darkPercentage,
  })
  useDynamicColor({
    cssVariableName: "--body-color-dynamic",
    start: "var(--color-slate-900)",
    end: "var(--color-slate-100)",
    percentage: darkPercentage,
  })
  useDynamicColor({
    cssVariableName: "--background-color-card-dynamic",
    start: "var(--color-white",
    end: "var(--color-slate-200)",
    percentage: darkPercentage,
  })
  useDynamicColor({
    cssVariableName: "--border-color-card-dynamic",
    start: "var(--color-gray-100)",
    end: "var(--color-slate-100)",
    percentage: darkPercentage,
  })

  return (
    <div ref={targetRef} className={className}>
      {children}
    </div>
  )
}
