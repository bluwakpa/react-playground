import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './styles.css'

export default function RegistrationForm() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [registration, setRegistration] = useState('')
  const {register, handleSubmit} = useForm()
  const onSubmit = (data, e) => console.log(data, e)
  const onError = (errors, e) => console.log(errors, e)
  
  
    return (
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <h2>Register</h2>
        <div>
            <input 
                type="text"
                required
                minLength="5"
                value={name} 
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
             />
        </div>
        <div>
            <input
                type="password"
                required
                minLength="6"
                maxLength="72"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
             />
        </div>
        <div>
            6 to 72 characters, must include a number
        </div>
        <div>
            <input
                type="password"
                required
                minLength="6"
                maxLength="72"
                value={repeatPassword}
                placeholder="Repeat Password"
                onChange={(e) => setRepeatPassword(e.target.value)} />
        </div>
        <div>
            <button type="reset">
                Cancel
            </button>
            <button type="submit">
                Save
            </button>
        </div>
      </form>

    )
}