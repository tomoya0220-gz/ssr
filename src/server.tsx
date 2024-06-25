import React from 'react';
import express, { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import App from './App';
import path from 'path';
import 'ignore-styles';

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('*', (req: Request, res: Response) => {
  const initialData = { message: 'Hello from server!' };
  console.log('Initial data on server:', initialData);

  const appString = renderToString(<App initialData={initialData} />);
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR with TypeScript</title>
        <script>
          window.__INITIAL_DATA__ = ${JSON.stringify(initialData).replace(/</g, '\\u003c')};
        </script>
      </head>
      <body>
        <div id="root">${appString}</div>
        <script src="/bundle.js"></>
      </body>
    </html>
  `;
  console.log('HTML sent to client:\n', html);
  res.send(html);
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
