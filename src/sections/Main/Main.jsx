import React from 'react'

import Images from './components/Images'
import pokemonService from '../../shared/service';

const Main = async () => {

const data = await pokemonService.getPokemon()
console.log(data)
return <Images />
}

export default Main
