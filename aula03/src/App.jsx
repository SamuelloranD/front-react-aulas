import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import EstouComSono from './components/EstouComSono'

const App = () => {
  return (
    <div>
      <EstouConseguindoAprenderReact estouConseguindo = {false}/>
      <EstouComSono sono = {false}/>
    </div>
  )
}

export default App