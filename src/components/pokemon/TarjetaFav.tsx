import { FC } from "react";
import { useRouter } from "next/router";
import { Grid, Card } from "@nextui-org/react";

interface Props {
    pokemon: number
}

const TarjetaFav: FC<Props>  = ({pokemon}) => {

    const router = useRouter();

    const verPokemon = () => {
        router.push(`/pokemon/${pokemon}`)
    }

    return (
        <Grid xs={6} sm={4} md={3} xl={2}>
            <Card 
                isHoverable 
                isPressable
                css={{
                    padding: "$10",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center'
                }}
                onClick={verPokemon}
            >
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon}.svg`}
                    width='100%'
                    height={200}
                />
            </Card>
        </Grid>
    )
}

export default TarjetaFav