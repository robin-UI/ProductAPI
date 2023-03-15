const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cp) => {
        cp(null, './public/images')
    },
    filename: (req, file, cb) => {
        var ext = file.originalname.substr(file.originalname.lastIndexOf("."));
        cb(null, Date.now() + "--" + file.originalname);
        console.log("Image add to image file");
    }
})

const store = multer({ storage });
module.exports = { store }