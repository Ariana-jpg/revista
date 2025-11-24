import { useEffect, useRef, useState } from 'react'
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { db } from '../firebase'
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore'
import { motion } from 'framer-motion'

function Comunidad() {
  // usuario
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [foto, setFoto] = useState('')
  const [uid, setUid] = useState('')
  const [cargando, setCargando] = useState(true)

  // editar perfil
  const [nuevoNombre, setNuevoNombre] = useState('')
  const [nuevaFoto, setNuevaFoto] = useState('')

  // posts
  const [contenidoPost, setContenidoPost] = useState('')
  const [posts, setPosts] = useState([])

  // editar post
  const [editandoID, setEditandoID] = useState(null)
  const [nuevoContenido, setNuevoContenido] = useState('')

  // comentarios por post
  const [comentariosPorPost, setComentariosPorPost] = useState({})
  const [inputComentarioPorPost, setInputComentarioPorPost] = useState({})

  const auth = getAuth()
  const comentariosUnsubsRef = useRef({})

  const formatearFecha = (fecha) => {
    if (!fecha) return ''
    if (fecha.toDate) fecha = fecha.toDate()
    return fecha.toLocaleDateString('es-PE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  // detectar usuario
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid)
        setEmail(user.email)
        setNombre(user.displayName || 'Usuario sin nombre')
        setFoto(user.photoURL || '/user.webp')
        setNuevoNombre(user.displayName || '')
        setNuevaFoto(user.photoURL || '')
      } else {
        setUid('')
        setEmail('')
        setNombre('')
        setFoto('')
      }
      setCargando(false)
    })
    return () => unsubscribe && unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // escuchar posts
  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('fecha', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
      setPosts(lista)
    })
    return () => unsubscribe && unsubscribe()
  }, [])

  // escuchar comentarios por post
  useEffect(() => {
    posts.forEach((p) => {
      if (comentariosUnsubsRef.current[p.id]) return

      const q = query(
        collection(db, 'posts', p.id, 'comentarios'),
        orderBy('fecha', 'asc'),
      )
      const unsub = onSnapshot(q, (snap) => {
        const lista = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
        setComentariosPorPost((prev) => ({ ...prev, [p.id]: lista }))
      })

      comentariosUnsubsRef.current[p.id] = unsub
    })

    return () => {
      Object.values(comentariosUnsubsRef.current).forEach((u) => {
        if (typeof u === 'function') u()
      })
    }
  }, [posts])

  // actualizar perfil
  const actualizarPerfil = async () => {
    const user = auth.currentUser
    if (!user) return alert('No hay un usuario activo')

    try {
      await updateProfile(user, {
        displayName: nuevoNombre || user.displayName,
        photoURL: nuevaFoto || user.photoURL,
      })

      alert('Perfil actualizado')
      setNombre(nuevoNombre || user.displayName)
      setFoto(nuevaFoto || user.photoURL)
    } catch (err) {
      console.error(err)
      alert('Error al actualizar: ' + err.message)
    }
  }

  // crear post
  const crearPost = async () => {
    if (contenidoPost.trim() === '') return
    await addDoc(collection(db, 'posts'), {
      contenido: contenidoPost,
      fecha: serverTimestamp(),
      autor: nombre,
      autorFoto: foto,
      autorUid: uid,
      likes: [],
    })
    setContenidoPost('')
  }

  // like
  const toggleLike = async (post) => {
    const ref = doc(db, 'posts', post.id)
    const actuales = post.likes || []
    const nuevos = actuales.includes(uid)
      ? actuales.filter((id) => id !== uid)
      : [...actuales, uid]
    await updateDoc(ref, { likes: nuevos })
  }

  // guardar edición post
  const guardarEdicion = async (id) => {
    await updateDoc(doc(db, 'posts', id), { contenido: nuevoContenido })
    setEditandoID(null)
  }

  // eliminar post
  const eliminarPost = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm('¿Eliminar este post?')) return
    await deleteDoc(doc(db, 'posts', id))
  }

  // agregar comentario
  const agregarComentario = async (postId) => {
    const texto = (inputComentarioPorPost[postId] || '').trim()
    if (!texto) return

    await addDoc(collection(db, 'posts', postId, 'comentarios'), {
      texto,
      autor: nombre,
      autorFoto: foto,
      autorUid: uid,
      fecha: serverTimestamp(),
    })

    setInputComentarioPorPost((prev) => ({ ...prev, [postId]: '' }))
  }

  // editar comentario
  const editarComentario = async (postId, comentario) => {
    const nuevoTexto = prompt('Editar comentario:', comentario.texto)
    if (!nuevoTexto || nuevoTexto.trim() === '') return

    await updateDoc(
      doc(db, 'posts', postId, 'comentarios', comentario.id),
      { texto: nuevoTexto },
    )
  }

  // eliminar comentario
  const eliminarComentario = async (postId, comentario) => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm('¿Eliminar comentario?')) return
    await deleteDoc(doc(db, 'posts', postId, 'comentarios', comentario.id))
  }

  if (cargando)
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <div className="text-center animate-pulse text-pink-600 text-lg">
          Cargando comunidad...
        </div>
      </div>
    )

  return (
    <main className="p-6 md:p-10 max-w-4xl mx-auto">
      {/* PERFIL */}
      <motion.section
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-pink-100"
      >
        <img
          className="w-24 h-24 rounded-full mx-auto ring-4 ring-pink-300 shadow-lg object-cover"
          src={foto}
          alt="foto"
        />
        <h1 className="text-3xl font-bold mt-3 text-pink-700">
          Bienvenido a la comunidad ✨
        </h1>
        <p className="text-lg text-gray-700">
          Hola, <strong className="text-pink-600">{nombre}</strong>
        </p>
        <p className="text-gray-500">{email}</p>
      </motion.section>

      {/* EDITAR PERFIL */}
      <motion.section
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mb-8 bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-pink-100"
      >
        <h2 className="text-2xl font-bold mb-4 text-pink-700">Editar mi perfil 🌸</h2>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Nuevo nombre"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
            className="border border-pink-300 p-3 rounded-lg w-full bg-white/60 focus:ring-2 focus:ring-pink-400 transition"
          />
          <input
            type="text"
            placeholder="URL nueva foto"
            value={nuevaFoto}
            onChange={(e) => setNuevaFoto(e.target.value)}
            className="border border-pink-300 p-3 rounded-lg w-full bg-white/60 focus:ring-2 focus:ring-pink-400 transition"
          />
          <button
            className="w-full bg-pink-600 text-white py-3 rounded-lg shadow hover:bg-pink-700 transition"
            onClick={actualizarPerfil}
          >
            Guardar cambios
          </button>
        </div>
      </motion.section>

      {/* CREAR POST */}
      <motion.section
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-pink-100"
      >
        <h2 className="text-2xl font-bold mb-4 text-pink-700">Crear publicación 📝</h2>
        <textarea
          placeholder="¿Qué estás pensando?"
          value={contenidoPost}
          onChange={(e) => setContenidoPost(e.target.value)}
          className="w-full border border-pink-300 p-4 rounded-xl mb-3 bg-white/70 focus:ring-2 focus:ring-pink-400 transition"
        />
        <button
          className="w-full bg-pink-500 text-white py-3 rounded-lg shadow hover:bg-pink-600 transition"
          onClick={crearPost}
        >
          Publicar ✨
        </button>
      </motion.section>

      {/* POSTS */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-pink-700">Publicaciones recientes 💬</h2>
        <div className="space-y-6">
          {posts.map((post, idx) => {
            const comentarios = comentariosPorPost[post.id] || []
            const liked = (post.likes || []).includes(uid)

            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="bg-white/60 backdrop-blur p-6 rounded-2xl shadow-md border border-pink-100"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={post.autorFoto}
                    className="w-12 h-12 rounded-full ring-2 ring-pink-300 object-cover"
                    alt="autor"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-pink-700">{post.autor}</p>
                        <p className="text-xs text-gray-500">{formatearFecha(post.fecha)}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          className={`px-3 py-1 rounded-lg transition-shadow ${
                            liked ? 'bg-pink-500 text-white shadow' : 'bg-gray-200 text-gray-700'
                          }`}
                          onClick={() => toggleLike(post)}
                        >
                          ❤️ {post.likes?.length || 0}
                        </button>

                        {post.autorUid === uid && (
                          <>
                            <button
                              className="text-pink-600 font-semibold"
                              onClick={() => {
                                setEditandoID(post.id)
                                setNuevoContenido(post.contenido)
                              }}
                            >
                              Editar
                            </button>

                            <button
                              className="text-red-600 font-semibold"
                              onClick={() => eliminarPost(post.id)}
                            >
                              Eliminar
                            </button>
                          </>
                        )}
                      </div>
                    </div>

                    {/* contenido / edición */}
                    <div className="mt-3">
                      {editandoID === post.id ? (
                        <>
                          <textarea
                            value={nuevoContenido}
                            onChange={(e) => setNuevoContenido(e.target.value)}
                            className="w-full border border-pink-300 p-3 rounded mb-2"
                          />
                          <div className="flex gap-2">
                            <button
                              className="bg-pink-600 text-white px-3 py-1 rounded"
                              onClick={() => guardarEdicion(post.id)}
                            >
                              Guardar
                            </button>
                            <button
                              className="bg-gray-300 text-gray-800 px-3 py-1 rounded"
                              onClick={() => setEditandoID(null)}
                            >
                              Cancelar
                            </button>
                          </div>
                        </>
                      ) : (
                        <p className="text-gray-700 text-lg">{post.contenido}</p>
                      )}
                    </div>

                    {/* comentarios */}
                    <div className="mt-4">
                      <h4 className="font-semibold mb-3 text-pink-700">Comentarios ({comentarios.length})</h4>

                      <div className="space-y-3">
                        {comentarios.map((c) => (
                          <div key={c.id} className="bg-white border border-pink-100 p-3 rounded-lg shadow-sm">
                            <div className="flex items-center gap-3">
                              <img src={c.autorFoto || '/user.webp'} className="w-8 h-8 rounded-full ring-2 ring-pink-300 object-cover" alt="autor" />
                              <div>
                                <p className="font-semibold text-pink-700 text-sm">{c.autor}</p>
                                <p className="text-xs text-gray-500">{formatearFecha(c.fecha)}</p>
                              </div>
                            </div>

                            <p className="mt-2 text-gray-700 ml-11">{c.texto}</p>

                            {c.autorUid === uid && (
                              <div className="flex gap-3 mt-2 ml-11">
                                <button className="text-pink-600 text-sm" onClick={() => editarComentario(post.id, c)}>Editar</button>
                                <button className="text-red-600 text-sm" onClick={() => eliminarComentario(post.id, c)}>Eliminar</button>
                              </div>
                            )}
                          </div>
                        ))}

                        <div>
                          <textarea
                            placeholder="Escribe un comentario..."
                            value={inputComentarioPorPost[post.id] || ''}
                            onChange={(e) => setInputComentarioPorPost((prev) => ({ ...prev, [post.id]: e.target.value }))}
                            className="w-full border border-pink-300 p-3 rounded bg-white/75"
                          />
                          <div className="flex justify-end mt-2">
                            <button className="bg-pink-500 text-white px-4 py-2 rounded shadow hover:bg-pink-600 transition" onClick={() => agregarComentario(post.id)}>Comentar ✨</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Comunidad
