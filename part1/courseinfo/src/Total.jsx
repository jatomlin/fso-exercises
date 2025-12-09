const Total = (props) => {
  const sum = props.parts.reduce(
    (accumulator, currentValue) => 
        accumulator + currentValue.exercises, 0
);
  return (
    <p>Number of exercises {sum}</p>
  )
}

export default Total