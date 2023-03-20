import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

const getPokemonInfo = async (pokemon: string) => {

    try {
        
        const {data} = await pokeApi<Pokemon>(`/pokemon/${pokemon}`);

        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }

    } catch (error) {
        console.log('No existe el pokemon');
        return null;
    }

}

export default getPokemonInfo;