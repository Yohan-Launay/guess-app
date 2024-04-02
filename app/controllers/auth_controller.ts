import { createRegisterUserValidator } from '#validators/register_user_validator'
import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createRegisterUserValidator)
    await User.create(payload)

    console.log('User created !')

    return response.status(201).json({ message: 'User created !' })
  }

  // async login({ request, auth, session, response }: HttpContext) {
  //   const { uid, password } = request.all() // Utilisez uid au lieu de email si c'est le nom du champ dans votre formulaire de login
  //   await auth.attempt(uid, password)
  //
  //   return response.redirect('/admin')
  // }
}
