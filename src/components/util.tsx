import { Dispatch, SetStateAction } from 'react';

export interface PokemonAssetsData {
    monster: Pokemon[]
}

export interface Pokemon {
    name: string;
    forms: {
        fullName: string;
        sprites: {
            recolorSheetUrl: string | null;
            zipUrl: string | null;
        }[]
        portraits: {
            recolorSheetUrl: string | null;
            sheetUrl: string | null;
        }
    }[]
}

const pokemonAssetsDataQuery = `{
    monster {
        name
        forms {
            fullName
            sprites {
                recolorSheetUrl
                zipUrl
            }
            portraits {
                recolorSheetUrl
                sheetUrl
            }
        }
    }
}`

export async function fetchData(setData: Dispatch<SetStateAction<PokemonAssetsData | undefined>>) {
    try {
        const { data } = await (await fetch('https://spriteserver.pmdcollab.org/graphql', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: pokemonAssetsDataQuery })
        })).json();
        setData(data as PokemonAssetsData);
    } catch {
        console.log('there was an error fetching the data.')
    }
}