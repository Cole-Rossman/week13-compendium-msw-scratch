import style from './Main.css'
import { useState, useEffect } from 'react'
import { fetchCharacters, fetchSearchedCharacters } from '../../services/pokemon'
import mainstyle from './Main.css'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import SearchBar from '../../components/SearchBar/SearchBar'

export default function Main() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');

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

    const searchHandler = async () => {
      setLoading(true);
      const searchData = await fetchSearchedCharacters(search);
      setCharacters(searchData);
      setLoading(false);
      setSearch('');
    }

    if (loading) return <h1>Loading...</h1>

  return (
    <div className={mainstyle.main}>
      {error && <p>{error}</p>}
      <SearchBar query={search} setQuery={setSearch} callBack={searchHandler} />
      <ul className={style.characterlist}>
        {/* adding i(index) parameter will make it so that same keys will be unique. if no ids are present to use for key */}
        {characters.map((character, i) => (
          <CharacterCard key={character.character + i} {...character}/>
        ))}
      </ul>
    </div>
  )
}
