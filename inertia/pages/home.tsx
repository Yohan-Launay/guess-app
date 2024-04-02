import { Link } from '@inertiajs/react'

export default function Home() {
  return (
    <div>
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>C'est la page d'accueil de votre application.</p>
      <p>
        Vous pouvez accéder à la page du jeu en suivant ce lien :{' '}
        <Link href="/guess">Jouer au jeu</Link>
      </p>
    </div>
  )
}
