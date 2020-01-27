import React, { useState } from 'react'

function Clickers() {
  const [count, setCount] = useState(0)
  const handleUpCount = () => {
    setCount(count + 1)
  }
  const handleDownCount = () => {
    setTimeout(() => {
      setCount(count - 1)
    }, 250)
  }
  return (
    <div>
      <button onClick={handleUpCount}>Up</button>
      <button onClick={handleDownCount}>Down</button>
      <span data-testid="count">{count}</span>
    </div>
  )
}

export default Clickers
