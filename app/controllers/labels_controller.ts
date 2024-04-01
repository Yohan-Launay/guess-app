import type { HttpContext } from '@adonisjs/core/http'
import Label from '#models/label'
import { createLabelValidator, updateLabelValidator } from '#validators/label_validator'

export default class LabelsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Label.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createLabelValidator)
    await Label.create(payload)

    return response.status(201).json({ message: 'Label créé !' })
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return Label.query().where('id', params.id).preload('artists').firstOrFail()
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const payload = await request.validateUsing(updateLabelValidator)
    const label = await Label.findOrFail(params.id)

    await label
      .merge({
        name: payload.name,
      })
      .save()

    return response.status(201).json({ message: 'Label update !' })
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const label = await Label.findOrFail(params.id)
    await label.related('artists').detach()
    await label.delete()
    return response.status(201).json({ message: 'Label delete !' })
  }
}
