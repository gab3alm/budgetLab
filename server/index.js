import {} from 'dotenv/config';
import express from 'express';
import path from 'path';

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res)=>{
  res.send("Hello there!");
});

app.listen(process.env.API_PORT, ()=>{
  console.log(`Backend running in port ${process.env.API_PORT}`);
});