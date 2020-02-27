
import * as React from "react"
import { View, Dimensions } from "react-native"
import { DangerZone, Svg } from "expo"
import Animated from "react-native-reanimated"
import { render } from "react-dom"
import { Circle } from "react-native-svg"

const { Animated } = DangerZone
const { Value } = Animated

const { Circle } = Svg
const { width } = Dimensions.get("window")
const size = width - 32
const strokeWidth = 50
const radius = (size - strokeWidth) / 2
const circumference = radius * 2 * Math.PI

interface CircularProgressProps {
    progress: typeof Value
}

export default ({ progress }: CircularProgressProps) => {
    const foo = interpolate(progress,{
        inputRange:[0,1],
        outputRange:[0]
    })
    return (
        <Svg width={size} height={size}>
            <Circle
                stroke="#2162cc"
                fill="none"
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeDasharray={`${circumference} ${circumference}`}
                {...{ strokeWidth }}
            />
        </Svg>
    )
} 