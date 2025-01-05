import express from 'express';
import path from 'node:path';
import database from './config/connection.js';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;
try {
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

database.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
});
} catch (err) {
  console.error(err);
}
