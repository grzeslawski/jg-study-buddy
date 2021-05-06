import { rest } from 'msw';
import { students } from 'mocks/data/students';

export const handlers = [
  rest.get('/students/:group', (req, res, ctx) => {
    if (req.params.group) {
      const matchingStudents = students.filter((student) => student.group === req.params.group);
      return res(
        ctx.status(200),
        ctx.json({
          students,
        })
      );
    }
  }),
];
