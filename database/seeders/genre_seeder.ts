import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Genre from '#models/genre'

export default class extends BaseSeeder {
  async run() {
    await Genre.createMany([
      {
        name: 'Alternative rock',
      },
      {
        name: 'Nu metal',
      },
      {
        name: 'Rap rock',
      },
      {
        name: 'Heavy metal',
      },
      {
        name: 'Grunge',
      },
      {
        name: 'Hard rock',
      },
      {
        name: 'Punk rock',
      },
      {
        name: 'Progressive rock',
      },
      {
        name: 'Indie rock',
      },
    ])
  }
}
