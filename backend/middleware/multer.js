import multer from "multer";

// Configure storage
const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, file.originalname) // Use the original file name
    }
});

// Initialize the upload middleware
const upload = multer({ storage })

export default upload;