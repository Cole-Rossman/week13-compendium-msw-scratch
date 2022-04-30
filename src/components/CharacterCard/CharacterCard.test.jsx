import { render, screen } from '@testing-library/react';
import CharacterCard from './CharacterCard';
import { characterData, homer } from '../../services/characterData'
import { rest } from 'msw'
import { server } from '../../views/Main/Main.test'

test('Should render a character information on card', () => {
    server.use(
        rest.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=20', (req, res, ctx) => res(ctx.json([ characterData ])))
      ) 
    render(
        <CharacterCard />
    )
        // for heading level 3 is h3 and level 4 is h4
    const characterName = screen.getByRole('heading', {level: 3 });
    expect(characterName).toBeInTheDocument();

    const characterImage = screen.getByAltText(/characterimg/i);
    expect(characterImage).toBeInTheDocument();

    const characterQuote = screen.getByRole('heading', { level: 4 });
    expect(characterQuote).toBeInTheDocument();

});


test('Should ensure the user object received as prop in specified order', () => {
    server.use(
        rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => res(ctx.json([ homer ])))
      ) 
    render(
        <CharacterCard {...homer} />
    )
    expect(homer).toHaveProperty('image');
    expect(homer).toHaveProperty('character');
    expect(homer).toHaveProperty('quote') 

});