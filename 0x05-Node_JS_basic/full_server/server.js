// full_server/server.js
import express from 'express';
import routes from './routes';

const app = express();
const PORT = 1245;

// Use routes defined in routes/index.js
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
