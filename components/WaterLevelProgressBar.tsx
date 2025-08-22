'use client'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface WaterLevelProgressBarProps {
  progress: number
  size?: number
}

export default function WaterLevelProgressBar({
  progress,
  size = 120,
}: WaterLevelProgressBarProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [waveOffset, setWaveOffset] = useState(0)

  useEffect(() => {
    const animateWave = () => {
      setWaveOffset((prevOffset) => (prevOffset + 1) % size) // Adjust speed as needed
    }
    const interval = setInterval(animateWave, 50) // Adjust interval for smoothness
    return () => clearInterval(interval)
  }, [size])

  const waveHeight = size * 0.05 // Adjust wave height
  const waveLength = size * 0.5 // Adjust wave length

  // Calculate the y position for the water level
  const waterLevelY = size - (size * progress) / 100

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg ref={svgRef} width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background circle */}
        <circle cx={size / 2} cy={size / 2} r={size / 2 - 5} fill="#E0E0E0" className="dark:fill-gray-700" />

        {/* Clip path for the water effect */}
        <defs>
          <clipPath id="waterClip">
            <circle cx={size / 2} cy={size / 2} r={size / 2 - 5} />
          </clipPath>
        </defs>

        {/* Water layer */}
        <g clipPath="url(#waterClip)">
          <rect
            x="0"
            y={waterLevelY}
            width={size}
            height={size - waterLevelY}
            fill="#10B981" // Blue color for water
          />
          {/* Wave path */}
          <motion.path
            d={`M0,${waterLevelY + waveHeight} 
                C${waveLength / 4},${waterLevelY} ${waveLength * 3 / 4},${waterLevelY + waveHeight * 2} ${waveLength},${waterLevelY + waveHeight} 
                S${waveLength * 7 / 4},${waterLevelY - waveHeight} ${waveLength * 2},${waterLevelY + waveHeight}
                L${size},${waterLevelY + waveHeight}
                L${size},${size}
                L0,${size}
                Z`}
            fill="#34D399" // Lighter blue for wave
            animate={{ x: -waveOffset }}
            transition={{ ease: "linear", duration: 0.05, repeat: Infinity }}
          />
        </g>
      </svg>
      <motion.span
        className="absolute text-xl font-bold text-gray-800 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {progress}%
      </motion.span>
    </div>
  )
}
