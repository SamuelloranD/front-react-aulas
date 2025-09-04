import React from 'react'
import Adicao from './components/Adicao'
import Divisao from './components/Divisao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <Adicao num1={2} num2={3}/>
      <Divisao num1={16} num2={8}/>
      <Subtracao num1={3} num2={1}/>
      <Multiplicacao num1={3} num2={2}/>
      <PrecisoEstudar nomeDaTecnologia="React"/>
    </div>
  )
}

export default App