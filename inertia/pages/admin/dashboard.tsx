export default function Dashboard({ user }: { user: string | null }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {user.email && <p>Bienvenue {user.email}</p>}
    </div>
  )
}
