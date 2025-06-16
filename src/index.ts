import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (_, res) => {
  res.send('Welcome to BlackjackAI!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

import { BlackjackGameState } from './types';

app.post('/suggest', (req, res) => {
  const gameState: BlackjackGameState = req.body;

  // TODO: Replace this with a real AI call
  const suggestion = {
    action: 'hit', // Placeholder
    reason: 'You have 15 and dealer shows King. High risk to stand.',
    winProbability: 0.42,
  };

  res.json(suggestion);
});

