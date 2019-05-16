import React from 'react'

import ImmflyImg from '@assets/images/immfly.png'
import PokemonImg from '@assets/images/pokemon.png'

import style from  './images.scss'

const Images = () => (
  <div className={style.mainContainer}>
    <img src={ImmflyImg} />
    <img src={PokemonImg} />
  </div>
)

export default Images
