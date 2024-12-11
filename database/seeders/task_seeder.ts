import Task from '#models/task'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Task.createMany([
      {
        title: 'Estudar ReactJS',
        description: 'Aprender ReactJS para construir interfaces de usuário',
        userId: 1,
      },
      {
        title: 'Estudar NodeJS',
        description: 'Aprender NodeJS para construir interfaces de usuário',
        userId: 1,
      },
      {
        title: 'Estudar Angular',
        description: 'Aprender Angular para construir interfaces de usuário',
        userId: 2,
      }

    ])
  }
}