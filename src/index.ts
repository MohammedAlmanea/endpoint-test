import express from 'express';

const app = express();
const port = 5000;

//set Endpoint
app.get('/api', (req, res) => {
  res.send('hello,world.');
});

//check for port to avoid already in use error testing
app.listen(port, () => console.log(`Listening on port ${port}!`));
export default app;