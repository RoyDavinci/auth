import { type Request, type Response, Router } from 'express'
import { body, validationResult } from 'express-validator'

const signUpRouter = Router()

signUpRouter.post(
  '/api/auth/signup',
  [body('email').isEmail().withMessage('must be valid email')],
  (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(422).send({ body: {} })
    }
    res.status(200).send({ message: '' })
  }
)

export default signUpRouter
