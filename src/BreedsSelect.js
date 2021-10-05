/* eslint-disable react/prop-types */
// DO NOT DELETE
import React from 'react'

export const BreedsSelect = props => {
  const { breeds, selectedBreed, useSelectedBreed, dogsUrl, setDogsUrl } = props

  const onChangeBreedSelect = e => {
    useSelectedBreed(e.target.value)
  }

  const onClickViewImg = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then(res => res.json())
      .then(result => {
        setDogsUrl(result['message'])
      })
  }

  return (
    <div>
      <div className="breeds_select">
        <label htmlFor="breeds">Breeds List</label>
        <select
          id="breeds"
          value={selectedBreed}
          onChange={onChangeBreedSelect}
        >
          {breeds.map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <button className="btn" onClick={onClickViewImg}>
          表示
        </button>
      </div>
      <div className="img_list">
        {dogsUrl.map((url, index) => (
          <img className="img_item" key={index} src={url} />
        ))}
      </div>
    </div>
  )
}
