import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { Grid, Card, Text, Button, Container, Image } from "@nextui-org/react";

import { Pokemon } from "../../../interfaces";
import { pokeApi } from "../../../api";

import { Layout } from "@/components/layouts";
import { wrap } from "module";

interface Props {
    pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {



    return (
        <Layout>
            <Grid.Container 
                css={{
                    marginTop: '5px'
                }}
                gap={2}
            >
                <Grid xs={12} sm={4}>
                    <Card
                        isHoverable
                        css={{
                            padding: '30px'
                        }}
                    >   
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/img/no-image.png'}
                                alt={`Imagen de ${pokemon.name}`}
                                width='100%'
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header
                            css={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexWrap: "wrap"
                            }}
                        >
                            <Text h1 transform="capitalize">
                                {pokemon.name}
                            </Text>

                            <Button
                                color={"gradient"}
                                ghost
                            >
                                Guardar en Favoritos
                            </Button>
                        </Card.Header>

                        <Card.Body>
                            <Text size={30}>
                                Sprites:
                            </Text>

                            <Container display={'flex'}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={`Imagen de ${pokemon.name}`}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={`Imagen de ${pokemon.name}`}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={`Imagen de ${pokemon.name}`}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={`Imagen de ${pokemon.name}`}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                            
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    let pokemones = [];

    for(let n = 1; n <= 151; n++){

        const data = {
            params: {
                id: `${n}`
            }
        }

        pokemones.push(data);

    }

    return {
        paths: pokemones,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    const {id} = params as {id: string};

    const {data} = await pokeApi<Pokemon>(`/pokemon/${id}`);

    return {
        props: {
            pokemon: data
        }
    }
}

export default PokemonPage