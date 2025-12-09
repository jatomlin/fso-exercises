const Total = (props) => {
  /*
  const sum = props.parts.reduce(
  (accumulator, currentValue) => 
    accumulator + currentValue.exercises, 0
  );
  */
  return (
    <p>
        Number of exercises {props.parts[0].exercises 
                            + props.parts[1].exercises 
                            + props.parts[2].exercises}
    </p>
  )
}

export default Total