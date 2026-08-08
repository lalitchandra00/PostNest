import { useState } from 'react'


function Login() {
    const [form, setForm] = useState('Signup')
    return (
        <>
            <div className = "flex min-h-screen items-center justify-center ">
                
                    <span className = "flex gap-2">
                        <button className = "border-2 h-auto w-auto p-2" onClick={() = setForm('Signup')} >Signup Form</button>
                        <button className = "border-2 h-auto w-auto p-2" onClick={() = setForm('Login')} >Login Form</button>
                    </span>
                    <form className = "`${form === 'Signup' ? 'ring-2' } border-2 rounded-xl h-auto w-auto p-2 flex flex-col gap-2 shadow-lg" onSubmit={handleSubmit}>
                    <input className = "border-2 shadow-lg rounded-md p-1.5" label = 'Username' type="text" />
                    <input className = "border-2 shadow-lg rounded-md p-1.5" label = 'Email' type="email" />
                    <input className = "border-2 shadow-lg rounded-md p-1.5" label = 'Password' type="password" />

                    <button type="submit">
                        Submit
                    </button>   
                </form>
            </div>
        </>
    )
}

export default Login

