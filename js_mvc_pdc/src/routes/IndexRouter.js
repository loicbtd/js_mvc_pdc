import { Router } from 'express'

const IndexRouter = Router()
  
IndexRouter.get('/', (req, res, next) => {
  res.send()
})

export default IndexRouter

