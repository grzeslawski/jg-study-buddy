import { rest } from 'msw';
import { students } from 'mocks/data/students';

export const handlers = [
  rest.get('/students/:group', (req, res, ctx) => {
    const matchingStudents = student.filter((student) => student.group === req.params.group);
    return res(
      ctx.status(200),
      ctx.json({
        students,
      })
    );
  }),
];
