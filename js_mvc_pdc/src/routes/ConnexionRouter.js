import {controler, naviguer} from 'controller/ConnexionController'

import { Router } from 'express'

const ConnexionRouter = Router()

ConnexionRouter.get('/', naviguer)
ConnexionRouter.post('/', controler)

export default ConnexionRouter