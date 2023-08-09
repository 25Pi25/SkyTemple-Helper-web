import '../App.css';
import './components.css';
import { Dispatch, FormEvent, SetStateAction, useEffect, useRef, useState } from 'react';
import { Pokemon, PokemonAssetsData, fetchData } from './util';
import { closestMatch } from 'closest-match';

async function updatePokemonMaybe(e: FormEvent<HTMLInputElement>, data: PokemonAssetsData | undefined, setActivePokemon: Dispatch<SetStateAction<Pokemon | undefined>>) {
    const { value } = e.currentTarget;

    const monsterList = data?.monster
    if (!monsterList) return;
    const closestName = closestMatch(value.toLowerCase(), monsterList.map(({ name }) => name.toLowerCase()))

    setActivePokemon(data.monster.find(({ name }) => name.toLowerCase() == closestName));
}

export default function SpriteDownloader() {
    const pokemonRef = useRef<HTMLInputElement | null>(null);
    const variantRef = useRef<HTMLSelectElement | null>(null);
    const [data, setData] = useState<PokemonAssetsData>();
    const [activePokemon, setActivePokemon] = useState<Pokemon>();

    useEffect(() => void fetchData(setData), []);

    return <div className='app'>
        <div className='main-box full-box'>
            <a href={"/"} className='back-button'>Back</a>
            <h1>Sprite Downloader</h1>

            <div className='horizontal-flex' style={{ width: "70%", justifyContent: "space-between" }}>
                <div className='horizontal-flex'>
                    <p>Pokemon Name:</p>
                    <input type="text" ref={pokemonRef} style={{width: "25%"}} onInput={(e) => void updatePokemonMaybe(e, data, setActivePokemon)} />
                    {activePokemon && `(${activePokemon.name})`}
                </div>
                <div className='horizontal-flex'>
                    <p>Variant Name:</p>
                    <select name="variant" id="variant" ref={variantRef} >
                        {activePokemon?.forms.map(option =>
                            <option value={option.fullName} key={option.fullName}>{option.fullName}</option>)}
                    </select>
                </div>
            </div>
        </div>
    </div>
}