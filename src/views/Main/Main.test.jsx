import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Main from './Main'

describe('Main', () => {
  it('main should display a lit of characters and have the option to search characters', async () => {
    render(
      <Main />
    );
    await screen.findByText(/loading/i);

   waitFor(() => {
    const characterList = screen.getByRole('list');
    expect(characterList.children.length).toEqual(20);

    const searchCharacter = screen.getByPlaceholderText('search characters');
    userEvent.type(searchCharacter, 'hom');

    const searchButton = screen.getByRole('button', { name: /search/i });
    userEvent.click(searchButton);
    screen.getByText(/loading/i)

    const query = screen.getAllByText(/homer/i);
    expect(query[0]).toBeInTheDocument();
    
   }, { timeout: 8000 }) 


  
  });
});