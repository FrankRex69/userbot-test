import express from 'express';

import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
const upload = multer({ storage })

const app = express();
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World !')
})

app.post('/api/upload', upload.single('file'), (req, res) => {
    res.json(req.file)
    // res.send('Upload file ok !!!')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

