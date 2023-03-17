import { Container, Text, Image } from "@nextui-org/react";

const NoFavoritos = () => {
    return (
        <Container
            css={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'calc(100vh - 100px)',
                flexDirection: 'column'
            }}
        >
            <Text h1>
                No hay Favoritos
            </Text>

            <Image
                src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'}
                width={250}
                height={250}
                alt='No hay Pokemon'
                css={{
                    opacity: '0.1'
                }}
            />
        </Container>
    )
}

export default NoFavoritos