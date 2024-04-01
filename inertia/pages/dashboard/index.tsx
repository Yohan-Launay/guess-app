import { useForm } from '@inertiajs/react'

export default function Dashboard() {
  const { post } = useForm({})
  const handleLogout = () => {
    post('/logout') // Envoie une requête POST à la route de déconnexion
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Déconnexion</button>
    </div>
  )
}
