"use client"

import { ReactNode, useRef } from "react"
import { circInOut, useScroll, useTransform } from "motion/react"

import useDynamicColor from "@/components/dynamic-colors/useDynamicColor"

// Use this:
// https://tailwindcss.com/docs/theme#referencing-in-javascript

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
    start: "#fff",
    end: "#0a0a0a",
    percentage: darkPercentage,
  })
  useDynamicColor({
    cssVariableName: "--body-color-dynamic",
    start: "#171717",
    end: "#ededed",
    percentage: darkPercentage,
  })
  useDynamicColor({
    cssVariableName: "--color-card-dynamic",
    start: "#f9a8d4",
    end: "#4b5563",
    percentage: darkPercentage,
  })

  return (
    <div ref={targetRef} className={className}>
      {children}
    </div>
  )
}
