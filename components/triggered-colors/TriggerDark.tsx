"use client"

import { ReactNode, useEffect, useRef } from "react"
import { useInView } from "motion/react"

type ScrollToDarkProps = {
  children?: ReactNode
  className?: string
}

export default function TriggerDark({
  children,
  className,
}: ScrollToDarkProps) {
  const targetRef = useRef<HTMLDivElement | null>(null)

  const isInView = useInView(targetRef, {
    margin: "-66% 0px -33% 0px",
  })

  console.log(isInView)

  useEffect(() => {
    if (isInView) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isInView])

  return (
    <div ref={targetRef} className={className}>
      {children}
    </div>
  )
}
