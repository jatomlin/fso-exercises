import { useState } from 'react'

import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Vanessa Sol', number: '415-867-5349' },
    { name: 'Arlo Guthrie', number: '320-333-4349' },
    { name: 'Mike Smith', number: '663-792-5545' },
    { name: 'Jess Arlington', number: '510-745-3463' },   
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  
  const addEntry = (event) => {
    event.preventDefault()
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook!`)
    }
    else {
      const entryObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(entryObject))
    }
    setNewName('')
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNameFilter(event.target.value)
  }
  
  const filteredPersons = persons.filter(
    (person) => person.name.includes(nameFilter)
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm filter={nameFilter} handler={handleFilterChange} />
      <h3>Add new...</h3>
      <PersonForm
        name={newName}
        onNameChange={handleNameChange}
        number={newNumber}
        onNumberChange={handleNumberChange}
        onSubmit={addEntry}
      />
      <h2>Numbers</h2>
      <PersonList persons={filteredPersons} /> 
    </div>
  )
}

export default App
