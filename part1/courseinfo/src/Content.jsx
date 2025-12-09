import Part from './Part.jsx'

const Content = (props) => {
  return (
    <div>
      {/*props.parts.map((part) => (<Part part={part} />))*/}
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

export default Content
