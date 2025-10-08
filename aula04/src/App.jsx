import { useState } from 'react'
import './App.css'
import Exercicio1 from './components/Exercicio1'
import Exercicio2 from './components/Exercicio2'
import Campanha from './components/Campanha'
import Dark from './components/Dark'

function App() {

  const dataAtual = new Date()
  const meses = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
  ]
  const mesAtual = meses[dataAtual.getMonth()] //getMonth() vai de 0 a 11, de janeiro a dezembro 

  return (
    <div>
      <Campanha mes={mesAtual}/>
      <Exercicio1/>
      <Dark/>
    </div>
  )
}

export default App
