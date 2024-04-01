import type { HttpContext } from '@adonisjs/core/http'
import Artist from '#models/artist'
import { createArtistValidator, updateArtistValidator } from '#validators/artist_validator'
import * as fs from 'node:fs'
import app from '@adonisjs/core/services/app'

export default class ArtistsController {
  /**
   * Display a list of resource
   */
  async index({ inertia }: HttpContext) {
    const artists = await Artist.query().preload('labels').preload('genres')
    return inertia.render('home', { artists })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createArtistValidator)
    await payload.imgPath.move(app.makePath('uploads'))
    await Artist.create({
      name: payload.name,
      origin: payload.origin,
      yearsActive: payload.yearsActive,
      nbAlbumStudio: payload.nbAlbumStudio,
      imgPath: payload.imgPath.fileName,
    })

    return response.status(201).json({ message: 'Artist créé !' })
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return Artist.query().where('id', params.id).preload('labels').preload('genres').firstOrFail()
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ request, response }: HttpContext) {
    const payload = await request.validateUsing(updateArtistValidator)
    const artist = await Artist.findOrFail(request.params().id)

    if (payload.imgPath) {
      fs.unlink(app.makePath('uploads') + '/' + artist.imgPath, (err) => {
        if (err) {
          console.error("Erreur lors de la suppression de l'ancienne image :", err)
        } else {
          console.error('Deleted local image')
        }
      })
      await payload.imgPath.move(app.makePath('uploads'))
      artist.imgPath = '' + payload.imgPath.fileName
    }
    await artist
      .merge({
        name: payload.name,
        origin: payload.origin,
        yearsActive: payload.yearsActive,
        nbAlbumStudio: payload.nbAlbumStudio,
      })
      .save()

    return response.status(201).json({ message: 'Artist update !' })
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const artist = await Artist.findOrFail(params.id)
    await artist.related('labels').detach()
    await artist.related('genres').detach()
    await artist.delete()
    return response.status(201).json({ message: 'Artist delete !' })
  }
}
