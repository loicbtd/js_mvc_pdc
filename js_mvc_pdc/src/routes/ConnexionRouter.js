import ConnexionController from 'controller/ConnexionController'
import { Router } from 'express'

const ConnexionRouter = Router()

ConnexionRouter.get('/', (req, res, next) => {
  const controller = new ConnexionController()
  controller.naviguer(req, res)
})

export default ConnexionRouter
