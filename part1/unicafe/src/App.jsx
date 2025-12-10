import { useState } from 'react'

const StatisticLine = (props) => {
  const { text, value } = props
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props
  const total = good + neutral + bad
  if (total === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  }
  else {
    const average = (good - bad) / total
    const positive = good * 100.0 / total
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="total" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App