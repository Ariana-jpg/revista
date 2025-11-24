import { useState } from 'react'
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const provider = new GoogleAuthProvider()

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    // 🔐 Iniciar sesión con email y contraseña
    function iniciarSesion() {
        console.log('Intentando iniciar sesión...')
        console.log('Email:', email)
        console.log('Password:', password)

        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log('✅ Usuario autenticado:', user)
                navigate('/')
            })
            .catch((error) => {
                console.log('❌ Error al iniciar sesión:', error.message)
            })
    }

    // 🌸 Iniciar sesión con Google
    function iniciarConGoogle() {
        const auth = getAuth()
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user
                console.log('✅ Sesión iniciada con Google:', user)
                navigate('/')
            })
            .catch((error) => {
                console.log('❌ Error al iniciar con Google:', error.message)
            })
    }
    function iniciarConGoogle() {
        const auth = getAuth()
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                // The signed-in user info.
                const user = result.user
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log('pan con queso')
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code
                const errorMessage = error.message
                // The email of the user's account used.
                const email = error.customData.email
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error)
                // ...
                console.log('pan quemado')
                console.log(error)
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-100 font-sans">
            <div className="bg-white p-8 rounded-3xl shadow-lg w-80 border border-pink-200">
                <h2 className="text-2xl text-center font-bold text-pink-500 mb-6">
                    🌸 Iniciar Sesión 🌸
                </h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-pink-500 font-medium mb-1">
                            Email:
                        </label>
                        <input
                            type="email"
                            placeholder="Ingresa tu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                    </div>

                    <div>
                        <label className="block text-pink-500 font-medium mb-1">
                            Contraseña:
                        </label>
                        <input
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                    </div>

                    {/* 🔘 Botón para iniciar sesión con email */}
                    <button
                        onClick={iniciarSesion}
                        type="button"
                        className="w-full bg-pink-400 text-white py-2 rounded-xl hover:bg-pink-500 transition"
                    >
                        Iniciar Sesión
                    </button>

                    {/* 🌸 Separador visual */}
                    <div className="flex items-center my-4">
                        <hr className="grow border-pink-200" />
                        <span className="mx-2 text-pink-400 text-sm">o</span>
                        <hr className="grow border-pink-200" />
                    </div>

                    {/* 🔐 Botón para Google */}
                    <button
                        onClick={iniciarConGoogle}
                        type="button"
                        className="w-full flex items-center justify-center gap-2 bg-white border border-pink-300 text-pink-500 py-2 rounded-xl hover:bg-pink-50 transition"
                    >
                        <img
                            src="https://www.svgrepo.com/show/355037/google.svg"
                            alt="Google logo"
                            className="w-5 h-5"
                        />
                        Iniciar con Google
                    </button>
                </form>

                <p className="mt-6 text-center text-xs text-pink-400">
                    Hecho con 💖 y React
                </p>
            </div>
        </div>
    )
}

export default Login
