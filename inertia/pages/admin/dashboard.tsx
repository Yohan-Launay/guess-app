import LayoutAdmin from '~/layouts/admin'

export default function Dashboard({}: { user: string }) {
  return (
    <LayoutAdmin>
      <div>
        <h1>Dashboard</h1>
        {/*{user.email && <p>Bienvenue {user.email}</p>}*/}
      </div>
    </LayoutAdmin>
  )
}
