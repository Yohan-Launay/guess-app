// MainLayout.jsx

import { Link, useForm } from '@inertiajs/react'

export default function LayoutApp({ children }: { children: React.ReactNode }) {
  const { post } = useForm({})
  const handleLogout = () => {
    post('/logout')
  }

  return (
    <main>
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
      <div>{children}</div>
    </main>
  )
}
