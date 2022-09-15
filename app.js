import express from 'express';
import path from 'path';
const __dirname = path.resolve();

const app = express();
app.set('port', process.env.PORT || 3005);

app.use('/', (req, res, next) => {
  console.log('all request');
  next();
});

app.get(
  '/',
  (req, res, next) => {
    console.log('GET');
    next();
  },
  (req, res) => {
    throw new Error('error go to the middleware');
  }
);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});
app.listen(app.get('port'), () => {
  console.log(app.get('port'));
});
