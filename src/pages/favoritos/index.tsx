import { useState, useEffect } from "react";

import { Layout } from "@/components/layouts";
import { NoFavoritos, Favoritos as Favorites } from "@/components/ui";

import { pokemons } from "@/utils";

const Favoritos = () => {

    const [favoritos, setFavoritos] = useState<number[]>([]);

    useEffect(() => {
        setFavoritos(pokemons());        
    }, [])
    

    return (
        <Layout
            titulo="Favoritos"
        >
            {favoritos.length === 0 ?
                <NoFavoritos/>
                :
                <Favorites
                    pokemons={favoritos}
                />
            }
            
        </Layout>
    )
}

export default Favoritos