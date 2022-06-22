import {useState} from 'react'
import db from '@utils/dbClient'
import {ApiError} from "@supabase/gotrue-js";

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  
  const handleLogin = async (email: string) => {
    try {
      setLoading(true)
      const {error} = await db.auth.signIn({email})
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="card w-96 mx-auto bg-primary-content">
      <div className="card-body items-center">
        
        <h2 className="card-title">Supabase + Next.js</h2>
        <p className="font-mono text-xs">Sign in via magic link with your email below</p>
        <input
          className="input input-bordered"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='card-actions justify-end'>
        <button
          onClick={(e) => {
            e.preventDefault()
            handleLogin(email)
          }}
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? 'Loading' : 'Send magic link'}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            handleLogin(email)
          }}
          className="btn btn-error"
          disabled={loading}
        >
          Go back
        </button>
      </div>
    </div>
  )
}