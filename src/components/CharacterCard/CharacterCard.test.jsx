import { render, screen } from '@testing-library/react';
import CharacterCard from './CharacterCard';

const characterData = {
        quote: "Back in Edinburgh, we had a coal miners strike. All we wanted were hats with a wee light on top. Then one day the mine collapsed. No one made it out alive, not even Willie!",
        character: "Groundskeeper Willie",
        image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FGroundskeeperWillie.png?1497567512063",
        characterDirection: "Right",
}

test('Should render a character information on card', () => {
    render(
        <CharacterCard {...characterData} />
    )
    const { character, quote } = characterData
        // for heading level 3 is h3 and level 4 is h4
    const characterName = screen.getByRole('heading', {level: 3 });
    expect(characterName).toBeInTheDocument();

    const characterImage = screen.getByAltText(/characterimg/i);
    expect(characterImage).toBeInTheDocument();

    const characterQuote = screen.getByRole('heading', { level: 4 });
    expect(characterQuote).toBeInTheDocument();

});


test('Should ensure the user object received as prop in specified order', () => {
    render(
        <CharacterCard {...characterData} />
    )
    expect(characterData).toHaveProperty('image');
    expect(characterData).toHaveProperty('character');
    expect(characterData).toHaveProperty('quote')

});