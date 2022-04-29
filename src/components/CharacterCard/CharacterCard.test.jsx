import { render, screen } from '@testing-library/react';
import CharacterCard from './CharacterCard';
import { characterData } from '../../services/characterData'


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