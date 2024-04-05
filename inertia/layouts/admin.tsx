import { Link } from '@inertiajs/react'

export default function LayoutAdmin({ children }: { children: React.ReactNode }) {
  // console.log('User:', user)
  return (
    <aside>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/guess">Profile</Link>
            </li>
            <li>
              <Link href="/">Settings</Link>
            </li>
            <li>
              <Link href="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/">Logout</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>{children}</div>
    </aside>
  )
}
