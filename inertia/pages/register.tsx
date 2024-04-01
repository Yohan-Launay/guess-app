// import { useForm } from '@inertiajs/react'
// import { useState } from 'react'
//
// export default function Register() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     password_confirmation: '',
//   })
//
//   const { post } = useForm()
//
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(formData)
//     post('/register', formData)
//   }
//
//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData({ ...formData, [name]: value })
//   }
//
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" name="password" value={formData.password} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Password Confirmation:</label>
//         <input
//           type="password"
//           name="password_confirmation"
//           value={formData.password_confirmation}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   )
// }
