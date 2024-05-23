import express from 'express';

const app = express();
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World !')
})

app.post('/api/uploadFile', (req, res) => {
    res.send('Upload file ok !')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

