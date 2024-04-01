import type { HttpContext } from '@adonisjs/core/http'
import { createRegisterUserValidator } from '#validators/register_user_validator'
import User from '#models/user'
import { createLoginUserValidator } from '#validators/login_user_validator'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createRegisterUserValidator)
    await User.create(payload)

    return response.status(201).json({ message: 'User created !' })
  }

  async login({ auth, request }: HttpContext) {
    const { email, password } = await request.validateUsing(createLoginUserValidator)
    const user = await User.verifyCredentials(email, password)

    return auth.use('web').authenticateAsClient(user)
  }
}
