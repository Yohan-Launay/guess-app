import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Artist from '#models/artist'

export default class extends BaseSeeder {
  async run() {
    await Artist.createMany([
      {
        name: 'Linkin Park',
        origin: 'USA',
        yearsActive: '1996 - 2017',
        nbAlbumStudio: 10,
        imgPath: 'exemple.png',
      },
      {
        name: 'Metallica',
        origin: 'USA',
        yearsActive: '1981 - Present',
        nbAlbumStudio: 10,
        imgPath: 'metallica.png',
      },
      {
        name: 'Queen',
        origin: 'UK',
        yearsActive: '1970 - 1991',
        nbAlbumStudio: 15,
        imgPath: 'queen.png',
      },
      {
        name: 'Led Zeppelin',
        origin: 'UK',
        yearsActive: '1968 - 1980',
        nbAlbumStudio: 9,
        imgPath: 'led-zeppelin.png',
      },
      {
        name: 'Nirvana',
        origin: 'USA',
        yearsActive: '1987 - 1994',
        nbAlbumStudio: 3,
        imgPath: 'nirvana.png',
      },
      {
        name: 'The Beatles',
        origin: 'UK',
        yearsActive: '1960 - 1970',
        nbAlbumStudio: 12,
        imgPath: 'the-beatles.png',
      },
      {
        name: 'Pink Floyd',
        origin: 'UK',
        yearsActive: '1965 - 1995',
        nbAlbumStudio: 15,
        imgPath: 'pink-floyd.png',
      },
      {
        name: 'AC/DC',
        origin: 'Australia',
        yearsActive: '1973 - Present',
        nbAlbumStudio: 17,
        imgPath: 'acdc.png',
      },
      {
        name: 'The Rolling Stones',
        origin: 'UK',
        yearsActive: '1962 - Present',
        nbAlbumStudio: 25,
        imgPath: 'rolling-stones.png',
      },
      {
        name: 'Bob Dylan',
        origin: 'USA',
        yearsActive: '1961 - Present',
        nbAlbumStudio: 39,
        imgPath: 'bob-dylan.png',
      },
    ])
  }
}
