import React from 'react'

const Linguagens = ({nome, dificuldade}) => {
  return (
    <div>
        <p>Nome da linguagem: {nome}</p>
        <p>Dificuldade: {dificuldade}</p>
    </div>
  )
}

export default Linguagens