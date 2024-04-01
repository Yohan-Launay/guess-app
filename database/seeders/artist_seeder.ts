import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Artist from '#models/artist'

export default class extends BaseSeeder {
  async run() {
    await Artist.createMany([
      {
        name: 'Linkin Park',
        origin: 'USA',
        yearsStarting: 1996,
        nbAlbumStudio: 10,
        imgPath: 'linkinpark.png',
      },
      {
        name: 'Metallica',
        origin: 'USA',
        yearsStarting: 1981,
        nbAlbumStudio: 10,
        imgPath: 'metallica.png',
      },
      {
        name: 'Queen',
        origin: 'UK',
        yearsStarting: 1970,
        nbAlbumStudio: 15,
        imgPath: 'queen.png',
      },
      {
        name: 'Led Zeppelin',
        origin: 'UK',
        yearsStarting: 1968,
        nbAlbumStudio: 9,
        imgPath: 'led-zeppelin.png',
      },
      {
        name: 'Nirvana',
        origin: 'USA',
        yearsStarting: 1987,
        nbAlbumStudio: 3,
        imgPath: 'nirvana.png',
      },
      {
        name: 'The Beatles',
        origin: 'UK',
        yearsStarting: 1960,
        nbAlbumStudio: 12,
        imgPath: 'the-beatles.png',
      },
      {
        name: 'Pink Floyd',
        origin: 'UK',
        yearsStarting: 1965,
        nbAlbumStudio: 15,
        imgPath: 'pink-floyd.png',
      },
      {
        name: 'AC/DC',
        origin: 'Australia',
        yearsStarting: 1973,
        nbAlbumStudio: 17,
        imgPath: 'acdc.png',
      },
      {
        name: 'The Rolling Stones',
        origin: 'UK',
        yearsStarting: 1962,
        nbAlbumStudio: 25,
        imgPath: 'rolling-stones.png',
      },
      {
        name: 'Bob Dylan',
        origin: 'USA',
        yearsStarting: 1961,
        nbAlbumStudio: 39,
        imgPath: 'bob-dylan.png',
      },
      {
        name: 'The Who',
        origin: 'UK',
        yearsStarting: 1964,
        nbAlbumStudio: 11,
        imgPath: 'the-who.png',
      },
      {
        name: 'The Doors',
        origin: 'USA',
        yearsStarting: 1965,
        nbAlbumStudio: 9,
        imgPath: 'the-doors.png',
      },
      {
        name: "Guns N' Roses",
        origin: 'USA',
        yearsStarting: 1985,
        nbAlbumStudio: 6,
        imgPath: 'guns-n-roses.png',
      },
      {
        name: 'Red Hot Chili Peppers',
        origin: 'USA',
        yearsStarting: 1983,
        nbAlbumStudio: 11,
        imgPath: 'red-hot-chili-peppers.png',
      },
      {
        name: 'Deep Purple',
        origin: 'UK',
        yearsStarting: 1968,
        nbAlbumStudio: 20,
        imgPath: 'deep-purple.png',
      },
      {
        name: 'Foo Fighters',
        origin: 'USA',
        yearsStarting: 1994,
        nbAlbumStudio: 10,
        imgPath: 'foo-fighters.png',
      },
      {
        name: 'U2',
        origin: 'Ireland',
        yearsStarting: 1976,
        nbAlbumStudio: 14,
        imgPath: 'u2.png',
      },
      {
        name: 'Green Day',
        origin: 'USA',
        yearsStarting: 1986,
        nbAlbumStudio: 13,
        imgPath: 'green-day.png',
      },
      {
        name: 'The Cure',
        origin: 'UK',
        yearsStarting: 1976,
        nbAlbumStudio: 13,
        imgPath: 'the-cure.png',
      },
      {
        name: 'Oasis',
        origin: 'UK',
        yearsStarting: 1991,
        nbAlbumStudio: 7,
        imgPath: 'oasis.png',
      },
    ])
  }
}
