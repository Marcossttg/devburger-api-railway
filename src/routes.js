import { Router } from 'express.js'

import multer from 'multer.js'

import multerConfig from './config/multer.js'

import authMiddleware from './app/middlewares/auth.js'

import UserController from './app/controllers/UserController.js'
import SessionController from './app/controllers/SessionController.js'
import ProductController from './app/controllers/ProductController.js'
import CategoryController from './app/controllers/CategoryController.js'
import OrderController from './app/controllers/OrderController.js'

const upload = multer(multerConfig)

const routes = new Router()

routes.get('/', (request, response) => {
  return response.json({ message: 'Welcome to the DEVBURGER-API-RAILWAY' })
})

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)

// Adicionando routes.use() com middleware para que todas as rotas abaixo.
// Quando chamado, recebe o middleware como autenticação.
routes.use(authMiddleware)

routes.post('/products', upload.single('file'), ProductController.store)
routes.get('/products', ProductController.index)
routes.put('/products/:id', upload.single('file'), ProductController.update)

routes.post('/categories', upload.single('file'), CategoryController.store)
routes.get('/categories', CategoryController.index)
routes.put('/categories/:id', upload.single('file'), CategoryController.update)

routes.post('/orders', OrderController.store)
routes.get('/orders', OrderController.index)
routes.put('/orders/:id', OrderController.update)

export default routes
