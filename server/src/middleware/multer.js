// For File Uploads
import multer from "multer";

const storage = multer.diskStorage({
  destination: "/uploads",
  filename: (req, file, cb) => {
    const uploadTime = new Date.now();
    const fileName = file.originalname
    return cb(null, `${uploadTime}-${fileName}`);
  },
});

const upload = multer({ 
    storage: storage,
    limits: {fileSize: 2*1024*1024}
});

export default upload