import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

const getPokemonInfo = async (pokemon: string) => {

    const {data} = await pokeApi<Pokemon>(`/pokemon/${pokemon}`);

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }

}

export default getPokemonInfo;