import React from "react";
import App from "./App";

const app = express();

app.get('*', (req, res) => {
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