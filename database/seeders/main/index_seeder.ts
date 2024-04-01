import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  private async seed(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run()
  }
  async run() {
    await this.seed(await import('../artist_seeder.js'))
    await this.seed(await import('../genre_seeder.js'))
    await this.seed(await import('../label_seeder.js'))
    await this.seed(await import('../user_seeder.js'))
  }
}
