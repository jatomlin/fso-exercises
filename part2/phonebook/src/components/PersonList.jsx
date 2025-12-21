const Person = ({person}) => {
  return <p>{person.name} {person.number}</p>
}

const PersonList = ({persons}) => {
  return (
    <div> 
      {persons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  )
}

export default PersonList
