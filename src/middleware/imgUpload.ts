import multer from "multer";
export let memoryUpload = multer({ storage: multer.memoryStorage() });
let storage = multer.diskStorage({
  destination: (req, file, callback) => { 
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    let fileext = file.mimetype.split("/")[1];
    callback(null, file.fieldname + "-" + Date.now() + "." + fileext);
  },
});
export const localUpload=multer({storage:storage})
