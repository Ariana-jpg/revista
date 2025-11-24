import { motion } from 'framer-motion'

export default function Maquillaje() {
  const items = [
    {
      src: 'https://i.pinimg.com/1200x/13/d8/27/13d82746c3a7e041909cd047462e3fb3.jpg',
      name: 'Glow Soft Pink',
      price: '$18.90',
      desc: 'Iluminador brillante con textura suave.'
    },
    {
      src: 'https://images.unsplash.com/photo-1526045478516-99145907023c?w=1200&q=80',
      name: 'Soft Blend Brush',
      price: '$9.99',
      desc: 'Brocha profesional para difuminado perfecto.'
    },
    {
      src: 'https://i.pinimg.com/736x/bf/04/3f/bf043f8a9b56cb1b39b9dfc6cd0a74ad.jpg',
      name: 'Matte Lips Coral',
      price: '$12.50',
      desc: 'Labial mate de larga duración, tono coral intenso.'
    },
    {
      src: 'https://i.pinimg.com/1200x/d2/09/55/d20955f78a72b7427a1838e6797b6b6a.jpg',
      name: 'Natural Skin Base',
      price: '$22.00',
      desc: 'Base líquida ligera con acabado natural.'
    },
    {
      src: 'https://i.pinimg.com/736x/16/56/56/165656bbef7d0d9da2b78b8e59ea1909.jpg',
      name: 'Luxury Gold Palette',
      price: '$34.90',
      desc: 'Paleta de sombras cálidas y brillantes.'
    },
    {
      src: 'https://i.pinimg.com/1200x/87/7e/45/877e45f7e52fd9a6aa184d066e5adb08.jpg',
      name: 'Peach Blush Velvet',
      price: '$14.20',
      desc: 'Rubor tono melocotón con textura aterciopelada.'
    },
    {
      src: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&q=80',
      name: 'Black Volume Mascara',
      price: '$17.30',
      desc: 'Máscara de pestañas efecto volumen extremo.'
    },
    {
      src: 'https://i.pinimg.com/1200x/9a/e3/55/9ae355678485430f3e3ce0af75bb070b.jpg',
      name: 'Silky Foundation Brush',
      price: '$11.60',
      desc: 'Brocha para base con acabado uniforme y sedoso.'
    },
    {
      src: 'https://i.pinimg.com/1200x/3a/01/62/3a0162932431836a97100268982c7220.jpg',
      name: 'Rose Velvet Lipgloss',
      price: '$10.90',
      desc: 'Gloss rosado brillante con acabado mojado.'
    },

    // ⭐ NUEVOS 9 PRODUCTOS AESTHETIC ⭐

    {
      src: 'https://i.pinimg.com/736x/01/d5/eb/01d5eb8fb740e8fd20a52d8d584daef1.jpg',
      name: 'Dreamy Pink Powder',
      price: '$16.50',
      desc: 'Polvo traslúcido rosado para acabado suave.'
    },
    {
      src: 'https://i.pinimg.com/1200x/9c/ef/7b/9cef7b761fcd26a6442b987b9912ef5a.jpg',
      name: 'Berry Lip Tint',
      price: '$13.40',
      desc: 'Tint labial tono berry con efecto natural.'
    },
    {
      src: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=1200&q=80',
      name: 'Nude Matte Palette',
      price: '$29.90',
      desc: 'Sombras mate nude para looks minimalistas.'
    },
    {
      src: 'https://i.pinimg.com/736x/f6/e0/28/f6e02803c909730f1c87d448efe9705c.jpg',
      name: 'Soft Glow Primer',
      price: '$19.80',
      desc: 'Pre-base iluminadora para efecto glowy.'
    },
    {
      src: 'https://i.pinimg.com/1200x/8b/25/e7/8b25e7bfbdc857a0cc1546d8f8187c79.jpg',
      name: 'Pink Dream Blush Stick',
      price: '$15.50',
      desc: 'Rubor en barra tono rosado suave.'
    },
    {
      src: 'https://i.pinimg.com/1200x/60/7b/af/607baf242caaf59262f77d4a5ab75f8e.jpg',
      name: 'Lash Lift Extreme',
      price: '$18.00',
      desc: 'Máscara efecto lifting para pestañas largas.'
    },
    {
      src: 'https://i.pinimg.com/736x/f4/58/e9/f458e96e675b1129eab0e7ea6b14ef67.jpg',
      name: 'Cherry Gloss Balm',
      price: '$9.70',
      desc: 'Bálsamo hidratante con brillo cereza.'
    },
    {
      src: 'https://i.pinimg.com/736x/82/64/b4/8264b4f8a199428ff0555b2514795b50.jpg',
      name: 'Golden Highlighter Drops',
      price: '$21.90',
      desc: 'Gotas iluminadoras doradas para un glow intenso.'
    },
    {
      src: 'https://i.pinimg.com/1200x/1e/0f/b7/1e0fb7a93c735bbebf7931873373b71a.jpg',
      name: 'Ultra Soft Setting Spray',
      price: '$14.90',
      desc: 'Fijador en spray para acabado natural y duradero.'
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.5,
        type: 'spring',
        stiffness: 120
      }
    })
  }

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-pink-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          className="text-4xl font-bold text-pink-700 text-center mb-6"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ✨ Maquillaje — Looks & Productos
        </motion.h1>

        <motion.p
          className="text-center text-pink-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Galería seleccionada con productos, looks y detalles para tu revista.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.article
              key={i}
              className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-xl text-pink-700">{item.name}</h3>
                <p className="text-pink-500 text-sm mt-1">{item.desc}</p>
                <p className="text-pink-700 font-bold mt-3 text-lg">{item.price}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
