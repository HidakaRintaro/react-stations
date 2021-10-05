/* eslint-disable react/prop-types */
// DO NOT DELETE
import React from 'react'

export const BreedsSelect = props => {
  const { breeds, selectedBreed, useSelectedBreed } = props

  const onChangeBreedSelect = e => {
    useSelectedBreed(e.target.value)
  }

  return (
    <div className="breeds_select">
      <label htmlFor="breeds">Breeds List</label>
      <select id="breeds" value={selectedBreed} onChange={onChangeBreedSelect}>
        {breeds.map((breed, index) => (
          <option key={index} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  )
}
