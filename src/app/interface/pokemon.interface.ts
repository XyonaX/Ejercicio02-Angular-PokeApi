export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonListResponse {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
}

export interface PokemonDetails {
    name: string;
    sprites: {
        front_default: string;
        front_shiny: string;
    };
}
