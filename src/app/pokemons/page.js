import Image from "next/image";
import styles from "../page.module.css";

async function getPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon-species"); 
    return response.json();
}

export default async function Pokemons() {

    const {results} = await getPokemons();

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <h1>Pokemons</h1>
                <ul>
                    {
                      results
                      ? results.map( p =>(<li>{p.name}</li>))  
                      : <></>
                    }
                </ul>
            </div>
        </main>
    );
}
