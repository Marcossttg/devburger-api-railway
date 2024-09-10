import multer from "multer";
import { v4 } from "uuid";
import { extname, resolve } from "path";

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, callback) =>
      callback(null, v4() + extname(file.originalname)),
  }),
};

// import { fileURLToPath } from 'url';
// import { dirname, resolve, extname } from 'path';
// import multer from 'multer';
// import { v4 } from 'uuid';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// export default {
//   storage: multer.diskStorage({
//     destination: resolve(__dirname, '..', '..', 'uploads'),
//     filename: (request, file, callback) => {
//       return callback(null, v4() + extname(file.originalname))
//     },
//   }),
// }

