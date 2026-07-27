import { useState } from 'react'

export default function SafeCounter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
    setCount((prev) => prev + 1)
  }

  function incrementThree() {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)

    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <p>Libros registrados: {count}</p>
      <button onClick={increment}>+1 libro</button>
      <button onClick={incrementThree}>+3 libros</button>
    </div>
  )
}
