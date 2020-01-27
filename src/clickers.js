import React, { useState } from 'react'

function Clickers() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <span data-testid="count">{count}</span>
    </div>
  )
}

export default Clickers
