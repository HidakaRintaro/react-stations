/* eslint-disable react-hooks/exhaustive-deps */
// DO NOT DELETE
import React, { useEffect, useState } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, useSelectedBreed] = useState('')

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        return res.json()
      })
      .then(result => {
        setBreeds(Object.keys(result['message']))
      })
  }, [])

  return (
    <BreedsSelect
      breeds={breeds}
      selectedBreed={selectedBreed}
      useSelectedBreed={useSelectedBreed}
    />
  )
}
