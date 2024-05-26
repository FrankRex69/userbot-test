import express from 'express';
import multer from 'multer';
import path from 'path';
import { handlerfile } from './handlerFile';

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
const port = 8000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));    
})

app.post('/api/upload', upload.single('file'), async (req, res) => {
    res.json(handlerfile(req.file?.filename));    
  })

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
