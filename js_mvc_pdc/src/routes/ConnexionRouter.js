import ConnexionController from 'controller/ConnexionController'
import { Router } from 'express'

const ConnexionRouter = Router()

ConnexionRouter.get((req, res, next) => {
  console.log('ddwwd')
  res.end('Hello')
})

export default ConnexionRouter
