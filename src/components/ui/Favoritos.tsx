import { FC } from "react";
import { Grid } from "@nextui-org/react";

import { TarjetaFav } from "../pokemon";

interface Favoritos {
    pokemons: number[]
}

const Favoritos: FC<Favoritos> = ({pokemons}) => {

    return (
        <Grid.Container gap={2} justify='flex-start'>
            {pokemons.map(pokemon => (
                <TarjetaFav
                    key={pokemon}
                    pokemon={pokemon}
                />
            ))}
        </Grid.Container>
    )
}

export default Favoritos