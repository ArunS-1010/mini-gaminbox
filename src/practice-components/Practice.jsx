import React from 'react'
import { useState } from 'react'

const Practice = () => {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <>
      <h3 className="text-center mt-3"> useState hook </h3>
      <div className="mt-3 d-flex justify-content-center gap-5">
        <div>
          <button className="btn btn-secondary " onClick={decrement}>
            -
          </button>
        </div>
        <div>{count}</div>
        <div>
          <button className="btn btn-secondary " onClick={increment}>
            +
          </button>
        </div>
      </div>
    </>
  )
}

export default Practice
