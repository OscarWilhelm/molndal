import React from 'react'
import { useEffect, useState } from 'react'
import StarwarsAPIservice from '../shared/api/service/StarwarsAPIservice'


export const ItemsView = () => {

  const [starWarsData, setStarWarsData] = useState<any>()
  const [charNo, setCharNo] = useState(1)

  const getDataFromStarWarsAPI = (char_no: number) => {
    StarwarsAPIservice.getStarWarsCharacter(char_no)
      .then(response => setStarWarsData(response))
      .catch(error => console.log(error))
  }

  const nextCharacter = () => {
    setCharNo(charNo + 1)
  }

  const previousCharacter = () => {
    setCharNo(charNo - 1)
  }

  useEffect(() => {
    getDataFromStarWarsAPI(charNo)
  }, [charNo])

  return (
    <div>
      <h1>Name: {starWarsData?.data.name}</h1>
      <h1>Hair Color: {starWarsData?.data.hair_color}</h1>
      <h1>Gender: {starWarsData?.data.gender}</h1>
      <h1>Birth year: {starWarsData?.data.birth_year}</h1>
      <h1>Height: {starWarsData?.data.height}</h1>
      <button onClick={() => previousCharacter()}>Get previous character</button>
      <button onClick={() => nextCharacter()}>Get next character</button>
    </div>
  )
}
