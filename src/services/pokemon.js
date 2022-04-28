export async function fetchCharacters() {
    const resp = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=20');
    const data = await resp.json();
    return data;
}

export async function fetchSearchedCharacters(search) {
    const params = new URLSearchParams();
    if (search) params.set('character', search);
    
    const resp = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=20&${params.toString()}`);
    const data = await resp.json();
    return data;
    
}