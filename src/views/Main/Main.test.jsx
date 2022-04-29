import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Main from './Main'

describe('Main', () => {
    it('Main should display a list of characters and have the option to search characters', async () => {
    render(
        <Main />
    );
    await waitForElementToBeRemoved(screen.findByText(/loading/i));
    
    const characterList = await screen.findByRole('list');
    expect(characterList.children.length).toEqual(20);
  });
});


// test does not pass