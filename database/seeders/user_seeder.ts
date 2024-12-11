import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
      name: 'Sinval Soares Leite',
      email: 'sinval@gmail.com',
      password: 'secret',
    },
    {
      name: 'Maria Helena',
      email: 'mariahelena@gmail.com',
      password: 'secret',
    }
    ])
  }
}