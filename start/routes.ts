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
const SessionController = () => import('#controllers/session_controller')

// Home artist page
router.get('/', [ArtistsController, 'index'])

// Login and logout
router.get('/login', async ({ inertia }) => {
  return inertia.render('login')
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
    return inertia.render('dashboard/index', { user })
  })
  .use(
    middleware.auth({
      guards: ['web'],
    })
  )
