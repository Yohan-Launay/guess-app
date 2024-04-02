import { useForm } from '@inertiajs/react'

export default function Login({ error }: { error: string | null }) {
  const { data, setData, post } = useForm({
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData(name as 'email' | 'password', value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('data:', data)
    post('/login')
  }

  return (
    <section>
      <a href="/">Retour</a>
      <div id="login">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input type="email" name="email" value={data.email} onChange={handleChange} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" value={data.password} onChange={handleChange} />
          </div>
          {error && (
            <div className="error">
              <p>{error}</p>
            </div>
          )}
          <div className="btn">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </section>
  )
}
