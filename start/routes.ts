/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const ArtistsController = () => import('#controllers/artists_controller')
import { middleware } from '#start/kernel'
const HomeController = () => import('#controllers/home_controller')
const SessionController = () => import('#controllers/session_controller')

router.group(() => {
  // Home page and guess
  router.get('/', [HomeController, 'index'])
  router.get('/guess', [ArtistsController, 'index'])
})

router
  .group(() => {
    // Admin dashboard
    router.get('dashboard', ({ auth, inertia }) => {
      const user = auth.getUserOrFail()
      console.log(user)
      return inertia.render('admin/dashboard', { user })
    })
  })
  .use(
    middleware.auth({
      guards: ['web'],
    })
  )

router.group(() => {
  router.get('/login', async ({ inertia }) => {
    return inertia.render('auth/login')
  })
  router.post('login', [SessionController, 'store'])

  router.post('logout', async ({ auth, response }) => {
    await auth.use('web').logout()
    response.redirect('/login')
  })
})
