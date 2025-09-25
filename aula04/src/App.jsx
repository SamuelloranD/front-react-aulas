import { useState } from 'react'
import './App.css'
import Exercicio1 from './components/Exercicio1'
import Exercicio2 from './components/Exercicio2'
import Campanha from './components/Campanha'

function App() {
  return (
    <div>
      <Campanha mes='setembro'/>
      <Campanha mes='outubro'/>
      <Campanha mes='novembro'/>
    </div>
  )
}

export default App
