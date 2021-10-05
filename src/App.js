// DO NOT DELETE

import React from 'react'
import './App.css'
import { DogListContainer } from './DogListContainer'
import { Header } from './Header'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <Header />
      <DogListContainer />
    </div>
  )
}
