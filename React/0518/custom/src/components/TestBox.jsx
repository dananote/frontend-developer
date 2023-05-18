import React from 'react'
import { useMouseLocation } from '../hooks/useMouseLocation'

export default function TestBox() {
    const location = useMouseLocation();

  return (
    <div>TestBox</div>
  )
}
