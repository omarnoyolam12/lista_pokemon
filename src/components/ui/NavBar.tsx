import Image from "next/image";
import Link from "next/link";
import { useTheme, Text } from "@nextui-org/react";

const NavBar = () => {

    const {theme} = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            background: theme?.colors.gray100.value
        }}>
            <Link href={'/'} className="space-between">

                <Image
                    src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
                    width={70}
                    height={70}
                    alt='Pokemon Imagen'
                />

                <Text color="white" h2>P</Text>
                <Text color="white" h3>okémon</Text>
            </Link>

            <Link href={'/favoritos'}>
                <Text color="white">Favoritos</Text> 
            </Link>
        
        </div>
    )
}

export default NavBar