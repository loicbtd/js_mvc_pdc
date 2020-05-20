import { Router } from 'express'

const IndexRouter = Router()
  
IndexRouter.get('/', (req, res, next) => {
  console.log(req)
})

export default IndexRouter

