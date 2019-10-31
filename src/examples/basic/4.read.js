const personQuery = 'https://example.storest.com/people/3'
const personResponse = await fetch(personQuery)
const person = personResponse.json()

console.log(person)

{
  id: 3,
  name: 'Paul',
  location: 'London'
}