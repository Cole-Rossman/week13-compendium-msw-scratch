import React from 'react'
import cardstyle from './CharacterCard.css'


export default function CharacterCard({ character, image, quote }) {
  return (
    <div key={ character } className={cardstyle.card}>
      <img alt='name' src={image} />
      <h3>{character}</h3>
      <p>"{quote}"</p>
    </div>
  )
}
