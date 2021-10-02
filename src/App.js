// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
  return (
    <div>
      <header>
        <h1>Dog アプリ</h1>
      </header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} />
      <br />
      <button onClick={() => setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg")}>更新</button>
    </div>
  )
}
