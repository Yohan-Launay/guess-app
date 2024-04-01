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

//router.on('/').renderInertia('home', { version: 6 })

router.get('/', [ArtistsController, 'index'])
