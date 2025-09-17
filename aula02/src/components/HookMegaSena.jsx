import React, { useState } from 'react'

const HookMegaSena = () => {
  const [numero, setNumero] = useState(null)          // último número sorteado
  const [numeros, setNumeros] = useState([])          // array com os números sorteados

  function sortearNumero() {
    if (numeros.length >= 6) {
      alert("Já temos 6 números sorteados!")
      return
    }

    const novoNumero = Math.floor(Math.random() * 60) + 1
    setNumero(novoNumero)
    setNumeros([...numeros, novoNumero])
  }

  return (
    <div>
      <h1>Sorteador da Mega em React!</h1>
      <button onClick={sortearNumero}>Sortear Número</button>

      {numero && <h2>Último Número sorteado: {numero}</h2>}
      <h3>
        Sorteados: {numeros.join(" - ")}
      </h3>
    </div>
  )
}

export default HookMegaSena
