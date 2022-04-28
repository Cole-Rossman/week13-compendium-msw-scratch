import style from './Main.css'
import { useState, useEffect } from 'react'
import { fetchCharacters } from '../../services/pokemon'
import mainStyle from './Main.css'
import CharacterCard from '../../components/CharacterCard/CharacterCard'

export default function Main() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
    try {
        const fetchData = async () => {
            const characterData = await fetchCharacters();
            console.log(characterData);
            setCharacters(characterData);
            setLoading(false);
        }
        fetchData();
    } catch (e) {
        setError(e.message)
    }
    }, []);

    if (loading) return <h1>Loading...</h1>

  return (
    <div className={mainStyle.main}>
      {error && <p>{error}</p>}
      <ul className={style.characterlist}>
        {/* adding i(index) parameter will make it so that same keys will be unique. if no ids are present to use for key */}
        {characters.map((character, i) => (
          <CharacterCard key={character.character + i} {...character}/>
        ))}
      </ul>
    </div>
  )
}
