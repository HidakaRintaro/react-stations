/* eslint-disable react-hooks/exhaustive-deps */
// DO NOT DELETE
import React, { useEffect, useState } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        return res.json()
      })
      .then(result => {
        setBreeds(Object.keys(result['message']))
      })
  }, [])

  return <></>
}
