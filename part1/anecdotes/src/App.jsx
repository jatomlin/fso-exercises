import { useState } from 'react'

const Anecdote = (props) => {
  return (
    <div>
      <p>{props.anecdotes[props.selected]}</p>
      <p>has {props.votes[props.selected]} votes</p>
    </div>
  )
}

const MostUpvotedAnecdote = (props) => {
  if (props.votes[props.selected] === 0)
  {
    return (
      <p>No votes yet...vote for your favorites!</p>
    )
  }
  else
  {
    return (
      <Anecdote anecdotes={props.anecdotes} votes={props.votes} selected={props.selected} />
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const anecdoteCount = anecdotes.length
 
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdoteCount).fill(0))
  const [mostUpvoted, setMostUpvoted] = useState(0)

  const handleVoteClick = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    if (copyVotes[selected] > votes[mostUpvoted])
      setMostUpvoted(selected)
    setVotes(copyVotes)
  }

  const handleNewClick = () => {
    const newSelection = Math.floor(Math.random() * anecdoteCount)
    setSelected(newSelection)
  }

  return (
    <div>
      <h1>Random anecdote</h1>
      <Anecdote anecdotes={anecdotes} votes={votes} selected={selected} />
      
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleNewClick}>new anecdote</button>
      
      <h1>Anecdote with the most votes</h1>
      <MostUpvotedAnecdote anecdotes={anecdotes} votes={votes} selected={mostUpvoted} />
    </div>
  )
}

export default App