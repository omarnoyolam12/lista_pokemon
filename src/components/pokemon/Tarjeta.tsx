import { FC } from "react";
import { useRouter } from "next/router";
import { Grid, Card, Row, Text } from "@nextui-org/react";

import { SmallPokemon } from "../../../interfaces";

interface Tarjeta {
    pokemon: SmallPokemon
}

const Tarjeta: FC<Tarjeta> = ({pokemon}) => {

    const {id, img, name, url} = pokemon;

    const router = useRouter();

    const handleClick = () => {
        router.push(`/pokemon/${id}`)
    }

    return (
        <Grid xs={6} sm={4} md={3} xl={2}>
            <Card 
                isHoverable 
                isPressable
                onClick={handleClick}
            >
                <Card.Body css={{
                    padding: "$10",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center'
                    
                }}>
                    <Card.Image
                        src={img}
                        width='100%'
                        height={200}
                        alt={`${pokemon.name}`}
                    />
                </Card.Body>

                <Card.Footer>
                    <Row justify="space-between">
                        <Text transform="capitalize">
                            {name}
                        </Text>
                        
                        <Text>
                            #{id}
                        </Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}

export default Tarjeta