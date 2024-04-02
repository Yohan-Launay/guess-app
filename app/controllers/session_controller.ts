import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class SessionController {
  async index({ inertia }: HttpContext) {
    return inertia.render('login')
  }

  async store({ request, auth, response, inertia }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    try {
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)
      response.redirect('/dashboard')
    } catch (error) {
      return inertia.render('auth/login', { error: 'Email ou mot de passe incorrect' })
    }
  }
}
