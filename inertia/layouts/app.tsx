// MainLayout.jsx

import { Link, useForm, usePage } from '@inertiajs/react'

interface LayoutAppProps {
  children: React.ReactNode
}

export default function LayoutApp(props: LayoutAppProps) {
  const { children } = props
  const { post } = useForm({})
  const handleLogout = () => {
    post('/logout')
  }

  const { user } = usePage().props

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
            {user ? (
              <>
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <li>
                <Link href="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <div>{children}</div>
    </main>
  )
}
