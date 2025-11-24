import { motion } from 'framer-motion'

export default function Skincare() {
  const products = [
    {
      name: "Limpiador Facial Suave",
      price: "S/ 45.00",
      desc: "Elimina impurezas sin resecar la piel.",
      img: "https://i.pinimg.com/1200x/9b/74/7f/9b747f041d325c110c21f711b139d96d.jpg"
    },
    {
      name: "Tónico Refrescante",
      price: "S/ 38.00",
      desc: "Balancea el pH y refresca la piel.",
      img: "https://i.pinimg.com/736x/38/6a/8a/386a8ab69a117c860772a0b707516d85.jpg"
    },
    {
      name: "Serum de Vitamina C",
      price: "S/ 75.00",
      desc: "Aclara manchas y mejora la luminosidad.",
      img: "https://i.pinimg.com/1200x/b0/cc/59/b0cc5937e0edaccefaf66a6fccb482c0.jpg"
    },
    {
      name: "Hidratante Ligera",
      price: "S/ 52.00",
      desc: "Ideal para piel mixta a grasa.",
      img: "https://i.pinimg.com/1200x/ba/d4/37/bad437d7ba7f7ab36c97c383d681fa8e.jpg"
    },
    {
      name: "Protector Solar SPF 50",
      price: "S/ 60.00",
      desc: "Protección de amplio espectro sin acabado grasoso.",
      img: "https://i.pinimg.com/736x/6b/ae/1e/6bae1ef098af26cbc8359ee77a39bb21.jpg"
    },
    {
      name: "Mascarilla Detox",
      price: "S/ 40.00",
      desc: "Controla grasa y limpia profundamente.",
      img: "https://i.pinimg.com/1200x/2b/0f/10/2b0f10a381c455d14541e8d2842afe62.jpg"
    },
    {
      name: "Crema Reparadora Nocturna",
      price: "S/ 89.00",
      desc: "Repara la piel mientras duermes.",
      img: "https://i.pinimg.com/1200x/90/f4/b8/90f4b832ad6e477723f9bcd14e4e460e.jpg"
    },
    {
      name: "Aceite Facial Natural",
      price: "S/ 70.00",
      desc: "Nutre profundamente sin obstruir poros.",
      img: "https://i.pinimg.com/1200x/95/06/69/950669f56686be58d67cda79d9829973.jpg"
    },
    {
      name: "Gel Antiacné",
      price: "S/ 34.00",
      desc: "Reduce brotes y calma irritaciones.",
      img: "https://i.pinimg.com/1200x/fe/99/4d/fe994dd7c95356567d8e7e55339045e6.jpg"
    },

    // ----- NUEVOS 9 PRODUCTOS -----

    {
      name: "Serum de Ácido Hialurónico",
      price: "S/ 68.00",
      desc: "Hidratación intensa para piel deshidratada.",
      img: "https://i.pinimg.com/736x/33/e4/ff/33e4ff7b9af2d6d21d0190caa18b03a4.jpg"
    },
    {
      name: "Crema Antiarrugas",
      price: "S/ 95.00",
      desc: "Suaviza líneas de expresión y reafirma.",
      img: "https://i.pinimg.com/1200x/58/b3/60/58b3607f887b6907562496dbc8d07a85.jpg"
    },
    {
      name: "Exfoliante Suave",
      price: "S/ 42.00",
      desc: "Elimina células muertas sin irritar.",
      img: "https://i.pinimg.com/1200x/98/1c/c9/981cc9125dd090797e2ea4ebf35bd230.jpg"
    },
    {
      name: "Gel Limpiador Espumoso",
      price: "S/ 48.00",
      desc: "Sensación fresca con espuma ligera.",
      img: "https://i.pinimg.com/1200x/dc/75/38/dc7538f966971f218633878d2f41ba7b.jpg"
    },
    {
      name: "Bruma Facial Hidratante",
      price: "S/ 36.00",
      desc: "Refresca y da glow al instante.",
      img: "https://i.pinimg.com/736x/39/e0/7c/39e07cfee4413501ea3c4c39a9900ca2.jpg"
    },
    {
      name: "Pads Exfoliantes AHA/BHA",
      price: "S/ 59.00",
      desc: "Controlan poros y textura.",
      img: "https://i.pinimg.com/1200x/07/47/f1/0747f1fb0011cdef552e6c63f0336d6b.jpg"
    },
    {
      name: "Mascarilla en Gel Calmante",
      price: "S/ 44.00",
      desc: "Reduce rojez y calma irritación.",
      img: "https://i.pinimg.com/1200x/45/b3/f0/45b3f0719f55399897a51d5d0dee00f1.jpg"
    },
    {
      name: "Serum Anti-manchas",
      price: "S/ 85.00",
      desc: "Reduce pigmentación y unifica tono.",
      img: "https://i.pinimg.com/1200x/7f/6c/f4/7f6cf4fdc4d46b5ad65e15be5f2af383.jpg"
    },
    {
      name: "Contorno de Ojos Iluminador",
      price: "S/ 50.00",
      desc: "Combate ojeras y bolsas.",
      img: "https://i.pinimg.com/1200x/44/f7/bf/44f7bf5549872f34a38b612f0fecad9e.jpg"
    }
  ];

  return (
    <section className="min-h-screen py-12 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h1
          className="text-4xl font-bold text-pink-700 text-center mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🌿 Skincare — Rutinas & Favoritos
        </motion.h1>

        <p className="text-center text-pink-600 mb-10 max-w-2xl mx-auto">
          Todo lo que necesitas para una piel sana, radiante y cuidada.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg text-pink-700">{p.name}</h3>
                <p className="text-sm text-pink-500 mt-1">{p.desc}</p>
                <p className="text-pink-700 font-bold mt-3">{p.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
