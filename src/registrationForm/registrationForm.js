import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import './styles.css'

export default function RegistrationForm() {
const [name, setName] = useState('')
//   const [password, setPassword] = useState('')
const {register, errors, handleSubmit, watch} = useForm()
const password = useRef({})
password.current = watch("password", "");
const [repeatPassword, setRepeatPassword] = useState('')
const [registration, setRegistration] = useState('')
const onSubmit = async (e) => console.log(e)
const onError = (errors, e) => console.log(errors, e)
  
    return (
      <form onSubmit={e => e.preventDefault()}>
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
                name="password"
                placeholder="Password"
                ref={register({
                    required: "You must specify a password",
                    minLength: {
                        value: 6,
                    message: "Password must have at least 8 characters"
          }
        })}
             />
        {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
            6 to 72 characters, must include a number
        </div>
        <div>
            <input
                type="password"
                name="password2"
                placeholder="Repeat Password"
                ref={register({
                    validate: value =>
                      value === password.current || "The passwords do not match"
                  })}
                />
                {errors.password2 && <p>{errors.password2.message}</p>}
        </div>
        <div>
            <input 
                value="Cancel"
                type="reset" />
            <input 
                value="Save" 
                type="submit" 
                onClick={handleSubmit(onSubmit)} />
        </div>
      </form>
    )
}