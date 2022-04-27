export async function fetchCharacters() {
    const resp = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=20');
    const data = await resp.json();
    return data;
}