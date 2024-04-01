import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async index({ inertia }: HttpContext) {
    const user = { name: 'julien' }

    return inertia.render('home', { user })
  }
}
