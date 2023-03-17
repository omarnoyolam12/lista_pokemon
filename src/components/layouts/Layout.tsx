import { FC, ReactNode } from "react";

import Head from "next/head";

import { NavBar } from "../ui";

// *Definir el Layout con sus propiedades------------------------------
interface Layout  {
    titulo?: string,
    children: ReactNode
}

const Layout: FC<Layout> = ({children, titulo}) => {
    return (
        <>
            <Head>
                <title>{titulo || 'Pokemon App'}</title>
                <meta name="author" content="Omar Alfredo Noyola Monroy" />
                <meta name="description" content="Información sobre el pokemon" />
                <meta name="keywords" content="XXXX, pokemon, pokedex" />
            </Head>

            <NavBar/>

            <main className="contenedor">
                {children}
            </main>
        </>
    )
}

export default Layout