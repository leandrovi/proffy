import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => response.json({ ok: true }))

app.listen(3333, () => {
  console.log('\n***** 🚀 Server started on port 3333 *****\n')
});