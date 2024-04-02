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

router.get('/', [HomeController, 'index'])

// Home artist page
router.get('/guess', [ArtistsController, 'index'])

// Login and logout
router.get('/login', async ({ inertia }) => {
  return inertia.render('auth/login')
})
router.post('login', [SessionController, 'store'])

router.post('logout', async ({ auth, response }) => {
  await auth.use('web').logout()
  response.redirect('/login')
})

// Dashboard
router
  .get('dashboard', ({ auth, inertia }) => {
    const user = auth.getUserOrFail()
    return inertia.render('admin/dashboard', { user })
  })
  .use(
    middleware.auth({
      guards: ['web'],
    })
  )
