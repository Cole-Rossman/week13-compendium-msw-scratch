import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Main from './Main'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { characterData, homer } from '../../services/characterData'

export const server = setupServer(
  rest.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=20', (req, res, ctx) => res(ctx.json([ characterData ])) 
  ), 
) 

beforeAll(() => {
  jest.setTimeout(30000); 
  return server.listen()});

afterAll(() => server.close());

describe('Main', () => {
  it('main should display a list of characters and have the option to search characters', async () => {
    render(
      <Main />
    );
    screen.getByText(/loading/i);
    
    await waitFor(() => {
    screen.getByText('Cole Rossman');
    }, { timeout: 8000 })
    
  const characterList = screen.getByRole('list');
    expect(characterList.children.length).toEqual(1);

    const searchCharacter = screen.getByPlaceholderText('search characters');
    userEvent.type(searchCharacter, 'hom');

    server.use(
      rest.get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=20&character=hom`, (req, res, ctx) => res(ctx.json([ homer ])) 
      )
    )
    const searchButton = screen.getByRole('button', { name: /search/i });
    userEvent.click(searchButton);
    screen.getByText(/loading/i)

    await waitFor(() => {
      const query = screen.getAllByText(/homer/i);
      expect(query[0]).toBeInTheDocument();
    }, { timeout: 8000 })
  
  }, 30000);
});