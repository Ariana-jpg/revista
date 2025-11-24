import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

function RegistrarCuenta() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Función para crear usuario
    const registrar = (e) => {
        e.preventDefault() // evita que se recargue la página
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('✅ Usuario registrado:', userCredential.user)
                alert('Cuenta creada con éxito 💖')
            })
            .catch((error) => {
                console.error('❌ Error al registrar:', error.message)
                alert('Error: ' + error.message)
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-100 font-sans">
            <div className="bg-white p-8 rounded-3xl shadow-lg w-80 border border-pink-200">
                <h2 className="text-2xl text-center font-bold text-pink-500 mb-6">
                    🌸 Registrar Cuenta 🌸
                </h2>

                <form className="space-y-4" onSubmit={registrar}>
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

                    <button
                        type="submit"
                        className="w-full bg-pink-400 text-white py-2 rounded-xl hover:bg-pink-500 transition"
                    >
                        Crear cuenta
                    </button>
                </form>

                <p className="mt-6 text-center text-xs text-pink-400">
                    Hecho con 💖 y React
                </p>
            </div>
        </div>
    )
}

export default RegistrarCuenta
