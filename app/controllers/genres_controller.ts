import type { HttpContext } from '@adonisjs/core/http'
import Genre from '#models/genre'
import { createGenreValidator, updateGenreValidator } from '#validators/genre_validator'

export default class GenresController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Genre.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createGenreValidator)
    await Genre.create(payload)

    return response.status(201).json({ message: 'Genre créé !' })
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return Genre.query().where('id', params.id).preload('artists').firstOrFail()
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const payload = await request.validateUsing(updateGenreValidator)
    const genre = await Genre.findOrFail(params.id)

    await genre
      .merge({
        name: payload.name,
      })
      .save()

    return response.status(201).json({ message: 'Genre update !' })
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const genre = await Genre.findOrFail(params.id)
    await genre.related('artists').detach()
    await genre.delete()
    return response.status(201).json({ message: 'Genre delete !' })
  }
}
