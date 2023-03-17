const toggleFavoritos = (id: number) => {
    
    let favoritos: number[] = JSON.parse(localStorage.getItem('favoritos') || '[]');

    if(favoritos.includes(id)){

        // *Borrar el id del arreglo---------------------------------
        const favoritosActualizado = favoritos.filter(pokeId => pokeId !== id);
        favoritos = favoritosActualizado;
    }
    else{

        // *Añadir el nuevo id al arreglo----------------------------
        favoritos.push(id)
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));

}

const existeEnFavoritos = (id: number): boolean => {
    
    if (typeof window === 'undefined'){
        return false;
    }

    const favoritos: number[] = JSON.parse(localStorage.getItem('favoritos') || '[]');

    return favoritos.includes(id);
    
}

const pokemons = (): number[] => {

    return JSON.parse(localStorage.getItem('favoritos') || '[]');
}



export {
    toggleFavoritos,
    existeEnFavoritos,
    pokemons
}