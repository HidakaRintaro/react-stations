// DO NOT DELETE
import React, { useState } from 'react'
import { DogImage } from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )
  const [loading, setLoading] = useState(false)

  const onImgChange = () => {
    setLoading(true)
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(result => setDogUrl(result['message']))
      .finally(() => {
        setLoading(false)
      })

    // ここでのsetLoadingの使い方がわからなかった
    // const res = await fetch('https://dog.ceo/api/breeds/image/random')
    // const data = await res.json()
    // setDogUrl(data['message'])
  }
  return (
    <main className="main">
      <p className="sentence">犬の画像を表示するサイトです</p>
      <div className="content">
        {loading ? (
          <div id="loading" className="loading">
            <div className="circle"></div>
          </div>
        ) : (
          <DogImage url={dogUrl} />
        )}
        <br />
        <button className="btn" onClick={onImgChange}>
          更新
        </button>
      </div>
    </main>
  )
}
