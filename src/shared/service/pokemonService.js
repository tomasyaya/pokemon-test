import axios from 'axios';

class PokemonService {
  constructor(){
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_ROUTE
    })
  }

  getPokemon= async () => {
    try {
      const { data } = await this.api.get('/pokemon')
      console.log(data)
      return data
    } catch(err) {
      console.log(err)
    }
  }
}

const pokemonService = new PokemonService();
export default pokemonService;