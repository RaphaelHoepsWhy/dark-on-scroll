import { MotionValue, useTransform } from "motion/react"
import { useContext, useLayoutEffect } from "react"
import { DynamicColorsContext } from "./DynamicColorsProvider"

type Input = {
  cssVariableName: string
  start: string
  end: string
  percentage: MotionValue<number>
}

export default function useDynamicColor({
  cssVariableName,
  start,
  end,
  percentage,
}: Input) {
  const { addColor, colors } = useContext(DynamicColorsContext)
  const color = useTransform(percentage, [0, 1], [start, end])

  useLayoutEffect(() => {
    if (colors[cssVariableName]) {
      return
    }
    addColor(cssVariableName, color)
  }, [cssVariableName, color, addColor, colors])
}
