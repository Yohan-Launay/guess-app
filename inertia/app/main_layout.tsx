// MainLayout.jsx

import { Link, useForm } from '@inertiajs/react'
// import { HttpContext } from '@adonisjs/core/http'

// @ts-ignore
export default function MainLayout({ children }) {
  const { post } = useForm({})
  const handleLogout = () => {
    post('/logout') // Envoie une requête POST à la route de déconnexion
  }

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/guess">Game</Link>
            </li>
            <li>
              <Link href="/">Classement</Link>
            </li>
          </ul>
          <ul>
            <li>
              <button onClick={handleLogout}>Déconnexion</button>
            </li>
            <li>
              <Link href="/login">Connexion</Link>
            </li>
            <li>
              <Link href="/register">Inscription</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
