// MainLayout.jsx

import { Link } from '@inertiajs/react'

// @ts-ignore
export default function MainLayout({ children }) {
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
              <Link href="/login">Se connecter</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
