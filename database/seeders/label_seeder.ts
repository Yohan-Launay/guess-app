import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Label from '#models/label'

export default class extends BaseSeeder {
  async run() {
    await Label.createMany([
      {
        name: 'Warner',
      },
      {
        name: 'Machine Shop',
      },
      {
        name: 'Roadrunner Records',
      },
      {
        name: 'Atlantic Records',
      },
      {
        name: 'Sony Music Entertainment',
      },
      {
        name: 'EMI',
      },
      {
        name: 'Capitol Records',
      },
      {
        name: 'Island Records',
      },
    ])
  }
}
