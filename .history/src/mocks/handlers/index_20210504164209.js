import { rest } from 'msw';
import { students } from 'mocks/data/students'

export const handlers = [
    rest.get('/students', (req, res, ctx) => {

    })
];