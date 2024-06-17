import React from 'react';
import express, { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import App from './App';
import path from 'path';

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('*', (req: Request, res: Response) => {
  const appString = renderToString(<App />);
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR with TypeScript</title>
      </head>
      <body>
        <div id="root">${appString}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});