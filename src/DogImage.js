// DO NOT DELETE
import React from 'react'

export const DogImage = props => {
  const { url } = props
  return <img className="img_size" src={url} />
}
