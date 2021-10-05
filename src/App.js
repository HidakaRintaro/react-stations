// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  const onImgChange = async () => {
    // fetch('https://dog.ceo/api/breeds/image/random')
    //   .then(res => {
    //     console.log(res)
    //     const data = res.json()
    //     console.log(data)
    //     return data
    //   })
    //   .then(result => {
    //     console.log(result)
    //     setDogUrl(result['message'])
    //   })

    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    setDogUrl(data['message'])

    // 大体同義
    // p.then(value => {
    //   // value を使った処理
    // })
    //
    // const value = await p
    // // valueを使った処理
  }

  return (
    <div>
      <header className="header">
        <h1>Dog アプリ</h1>
      </header>
      <main className="main">
        <p className="sentence">犬の画像を表示するサイトです</p>
        <div className="content">
          <img className="img_size" src={dogUrl} />
          <br />
          <button className="btn" onClick={onImgChange}>
            更新
          </button>
        </div>
      </main>
    </div>
  )
}
