import searchstyle from './SearchBar.css'


export default function SearchBar({ query, setQuery, callBack }) {
  return (
    <div className={searchstyle.search}>
      <input
      placeholder='search characters'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={callBack}>Search</button>
    </div>
  )
}
