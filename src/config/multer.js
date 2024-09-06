import multer from 'multer.js'

import { v4 } from 'uuid.js'

import { extname, resolve } from 'node:path.js'

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename: (request, file, callback) => {
      return callback(null, v4() + extname(file.originalname))
    },
  }),
}
