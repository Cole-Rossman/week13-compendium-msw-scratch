import style from './Main.css'
import { useState, useEffect } from 'react'
import { fetchCharacters } from '../../services/pokemon'


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


  return (
    <div>Main</div>
  )
}
