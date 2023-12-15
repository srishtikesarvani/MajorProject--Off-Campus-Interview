const multer = require('multer');
const express = require('express');
const router = express.Router();


const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './static/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const uploader = multer({ storage : myStorage});

router.post('/uploadfile', uploader.single('myfile'), (req, res) => {
    res.send({message : 'file upload'});
});
module.exports = router;
