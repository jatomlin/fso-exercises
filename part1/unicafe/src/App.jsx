import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleAnyClick = () => {
    const newTotal = all + 1
    setAll(newTotal)
    
  }

  const handleGoodClick = () => {
    const newGood = good + 1
    const newTotal = newGood + neutral + bad
    setGood(newGood)
    setTotal(newTotal)
    setAverage((newGood - bad) / newTotal)
    setPositive(newGood * 100.0 / newTotal)
  }

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1
    const newTotal = good + newNeutral + bad
    setNeutral(newNeutral)
    setTotal(newTotal)
    setAverage((good - bad) / newTotal)
    setPositive(good * 100.0 / newTotal)
  }

  const handleBadClick = () => {
    const newBad = bad + 1
    const newTotal = good + neutral + newBad
    setBad(newBad)
    setTotal(newTotal)
    setAverage((good - newBad) / newTotal)
    setPositive(good * 100.0 / newTotal)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

export default App