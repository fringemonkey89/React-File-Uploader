const express = require('express')
const fileUpload = require('express-fileupload')

const app = express();
app.use(fileUpload())

//endpoint
app.post('/upload', (req, res) => {
    if(req.file === null) {
        return res.status(400).json({ msg: 'no file upload'})
    }

    const file = req.files.file;

    file.mv(`${__dirname}/client/public/upload/${file.name}`, err => {
        if(err) {
            console.error(err);
            return res.status(500).send(err)
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
    })
})

app.listen(5000, () => 
console.log('server is listening to port 5000')
)