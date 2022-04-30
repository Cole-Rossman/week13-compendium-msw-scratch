import '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import fetch from 'cross-fetch'
import { characterData } from './services/characterData'

global.fetch = fetch;

// export const server = setupServer(
//   rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => res(ctx.json([ characterData ]))
//   )
// )

// beforeAll(() => server.listen());

// afterAll(() => server.close());

// global.fetch = (...args) =>
//   import('cross-fetch').then(({ default: fetch }) => fetch(...args));
