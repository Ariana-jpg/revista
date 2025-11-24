import { motion } from 'framer-motion'

export default function Ropa() {
  const items = [
    {
      src: 'https://i.pinimg.com/1200x/64/9e/98/649e983ec0a169d8b691be3f4a4dac53.jpg',
      name: 'Outfit Casual Beige',
      desc: 'Combinación fresca y elegante para el día a día.',
      price: 'S/ 85.00'
    },
    {
      src: 'https://i.pinimg.com/1200x/93/cc/85/93cc85ae5c27793017960b3c673aa5a4.jpg',
      name: 'Look Urbano Oversize',
      desc: 'Perfecto para un estilo moderno y relajado.',
      price: 'S/ 110.00'
    },
    {
      src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80',
      name: 'Outfit Fashion Editorial',
      desc: 'Inspiración de pasarela, ideal para fotos estéticas.',
      price: 'S/ 150.00'
    },
    {
      src: 'https://i.pinimg.com/736x/a8/2a/d5/a82ad5f52163fb50c867cb2674816df7.jpg',
      name: 'Vestido Rosa Elegante',
      desc: 'Perfecto para ocasiones especiales y citas.',
      price: 'S/ 130.00'
    },
    {
      src: 'https://i.pinimg.com/1200x/3e/0f/48/3e0f48fbea6852c18d1b093594870091.jpg',
      name: 'Outfit Vintage Aesthetic',
      desc: 'Estilo retro con colores suaves y delicados.',
      price: 'S/ 95.00'
    },
    {
      src: 'https://i.pinimg.com/736x/a1/c9/24/a1c924d02f5bc8a440d85e3cbf6d2a96.jpg',
      name: 'Look Minimalista Blanco',
      desc: 'Sencillo, limpio y elegante para cualquier ocasión.',
      price: 'S/ 120.00'
    },
    {
      src: 'https://i.pinimg.com/1200x/fa/b3/13/fab313e0d26e6147ad1fd871b322a7a4.jpg',
      name: 'Outfit Noir Total Black',
      desc: 'Clásico, poderoso y estilizado.',
      price: 'S/ 140.00'
    },
    {
      src: 'https://i.pinimg.com/1200x/a5/af/80/a5af80c8c425f3c033af895c8aad3aed.jpg',
      name: 'Set Rosado Aesthetic',
      desc: 'Femenino, dulce y perfecto para fotos tumblr.',
      price: 'S/ 105.00'
    },
    {
      src: 'https://i.pinimg.com/1200x/23/84/03/2384031d8f3be723ea620a370a21ef3c.jpg',
      name: 'Outfit Streetwear',
      desc: 'Combinación atrevida con toque urbano.',
      price: 'S/ 125.00'
    },

    {
      src: 'https://i.pinimg.com/736x/79/02/b1/7902b1fd8387d96fc98de3eda20e2671.jpg',
      name: 'Look Elegante Minimal',
      desc: 'Perfecto para eventos y salidas formales.',
      price: 'S/ 160.00'
    },
    {
      src: 'https://i.pinimg.com/1200x/17/b4/d6/17b4d69833c7976082325f47dc94c23f.jpg',
      name: 'Outfit Cozy Invierno',
      desc: 'Suéter suave y pantalones cómodos para días fríos.',
      price: 'S/ 140.00'
    },
    {
      src: 'https://i.pinimg.com/736x/5b/ea/cb/5beacbb5681414b0a6ed7c57c4e4ed98.jpg',
      name: 'Conjunto Pastel Aesthetic',
      desc: 'Colores suaves y románticos.',
      price: 'S/ 110.00'
    },
    {
      src: 'https://i.pinimg.com/736x/8a/1c/9b/8a1c9bc120ddcf8d43eb7eefcab96940.jpg',
      name: 'Look Denim Completo',
      desc: 'Clásico mezclilla para un estilo casual.',
      price: 'S/ 135.00'
    },
    {
      src: 'https://i.pinimg.com/736x/aa/41/03/aa4103e170d964548494f1dd19034201.jpg',
      name: 'Outfit Soft Girl',
      desc: 'Tonos rosa, blanco y beige aesthetic.',
      price: 'S/ 115.00'
    },
    {
      src: 'https://i.pinimg.com/736x/18/ba/1a/18ba1a5726da8091cea36249b513e559.jpg',
      name: 'Look Sporty Chic',
      desc: 'Sporty pero con elegancia moderna.',
      price: 'S/ 100.00'
    },
    {
      src: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=1200&q=80',
      name: 'Outfit Dark Academia',
      desc: 'Tonos marrones, faldas y estética intelectual.',
      price: 'S/ 150.00'
    },
    {
      src: 'https://i.pinimg.com/736x/26/9f/ef/269fef7fdd60b6dfccd0f5330d34f942.jpg',
      name: 'Look Veraniego Fresco',
      desc: 'Vestido ligero ideal para días soleados.',
      price: 'S/ 90.00'
    },
    {
      src: 'https://i.pinimg.com/1200x/8d/82/c9/8d82c903be13eb41e4abefb4db06a2f2.jpg',
      name: 'Outfit Academia Suave',
      desc: 'Aesthetic escolar moderno y delicado.',
      price: 'S/ 105.00'
    }
  ]

  return (
    <section className="min-h-screen py-12 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          className="text-4xl font-bold text-pink-800 text-center mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          👗 Moda & Outfits
        </motion.h1>

        <motion.p
          className="text-center text-pink-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Inspírate con editoriales, looks y combinaciones irresistibles.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h4 className="text-pink-700 font-semibold text-lg">{item.name}</h4>
                <p className="text-sm text-pink-500">{item.desc}</p>
                <p className="text-pink-700 font-bold mt-2">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
