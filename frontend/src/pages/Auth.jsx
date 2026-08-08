import { useState } from 'react'

function Auth() {
    const [form, setForm] = useState('Signup')
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Form Submitted')
    }
    return (
        <>
            <div className="flex flex-col min-h-screen items-center justify-center gap-3">
                <span className="flex gap-2">
                    <button
                        className={`p-2 border-2 rounded-2xl ${form === 'Signup' ? 'bg-blue-500 text-white' : ''}`}
                        onClick={() => setForm('Signup')}
                    >
                        Signup Form
                    </button>
                    <button
                        className={`p-2 border-2 rounded-2xl ${form === 'Login' ? 'bg-blue-500 text-white' : ''}`}
                        onClick={() => setForm('Login')}
                    >
                        Login Form
                    </button>
                </span>
                
                {form === 'Signup' ?
                    <form className="border-2 rounded-xl w-72 p-5 flex flex-col gap-3 shadow-lg" onSubmit={handleSubmit}>
                        {form === 'Signup'}

                        <input className="border-2 shadow-sm rounded-md p-1.5" placeholder="Username" type="text" />
                        <input className="border-2 shadow-sm rounded-md p-1.5" placeholder="Email" type="email" />
                        <input className="border-2 shadow-sm rounded-md p-1.5" placeholder="Password" type="password" />
                        <button className = "border-2 w-fit self-center p-1 rounded-md" type="submit">
                            Submit
                        </button>
                    </form>
                    : 
                    <form className="border-2 rounded-xl w-72 p-5 flex flex-col gap-3 shadow-lg" onSubmit={handleSubmit}>
                        {form === 'Login'}
                        <input className="border-2 shadow-sm rounded-md p-1.5" placeholder="Email" type="email" />
                        <input className="border-2 shadow-sm rounded-md p-1.5" placeholder="Password" type="password" />
                        <button className = "border-2 w-fit self-center p-1 rounded-md" type="submit">
                            Submit
                        </button>
                    </form>
                }

                

                
            </div>
        </>
    )
}

export default Auth
