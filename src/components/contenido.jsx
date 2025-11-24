import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Contenido() {
    return (
        <section className="w-full overflow-hidden bg-pink-100 py-12 space-y-24">

            {/* --- MAQUILLAJE --- */}
            <div>
                <h3 className="text-center text-4xl font-bold text-pink-700 mb-4 tracking-wide">
                    ✨ Sección Maquillaje ✨
                </h3>
                <p className="text-center text-pink-600 text-lg mb-6">
                    Descubre los mejores looks, productos y estilazos aesthetic.
                </p>

                <div className="relative w-full h-96 overflow-hidden rounded-3xl shadow-2xl">
                    <div className="absolute inset-0 bg-pink-200 opacity-20 mix-blend-multiply z-10"></div>

                    <motion.div
                        className="flex w-full h-full"
                        animate={{ x: ['0%', '-100%', '-200%', '0%'] }}
                        transition={{ repeat: Infinity, duration: 22, ease: 'easeInOut' }}
                    >
                        {/* ❗ Tus imágenes originales */}
                        <img src="https://img.freepik.com/premium-photo/fashion-cosmetic-products_752325-35099.jpg" className="w-full h-96 object-cover flex-shrink-0" />
                        <img src="https://www.shutterstock.com/image-photo/brushes-color-cosmetics-panorama-cover-260nw-1057072499.jpg" className="w-full h-96 object-cover flex-shrink-0" />
                        <img src="https://i.pinimg.com/736x/3c/13/f0/3c13f04875a8da177c2153bc81999246.jpg" className="w-full h-96 object-cover flex-shrink-0" />
                    </motion.div>

                    {/* BOTÓN MAQUILLAJE */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                        <Link
                            to="/maquillaje"
                            className="bg-pink-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-pink-400 transition transform hover:scale-105 font-semibold"
                        >
                            Ver Maquillaje ✨
                        </Link>
                    </div>
                </div>
            </div>

            {/* --- SKINCARE --- */}
            <div>
                <h3 className="text-center text-4xl font-bold text-pink-700 mb-4 tracking-wide">
                    🌸 Skincare Glow 🌸
                </h3>
                <p className="text-center text-pink-600 text-lg mb-6">
                    Rutinas, productos y tips para una piel radiante.
                </p>

                <div className="relative w-full h-96 overflow-hidden rounded-3xl shadow-2xl">
                    <div className="absolute inset-0 bg-pink-200 opacity-20 mix-blend-multiply z-10"></div>

                    <motion.div
                        className="flex w-full h-full"
                        animate={{ x: ['0%', '-100%', '-200%', '0%'] }}
                        transition={{ repeat: Infinity, duration: 26, ease: 'easeInOut' }}
                    >
                        {/* ❗ Tus imágenes originales de skincare */}
                        <img src="https://i.pinimg.com/736x/f9/02/14/f902145b76f948af4b7d92b5142607d6.jpg" className="w-full h-96 object-cover flex-shrink-0" />
                        <img src="https://i.pinimg.com/1200x/3a/81/c3/3a81c39daa49277d54de23288c56f82d.jpg" className="w-full h-96 object-cover flex-shrink-0" />
                        <img src="https://i.pinimg.com/1200x/2e/01/ca/2e01caa18a123f12bfd65c8919858f1e.jpg" className="w-full h-96 object-cover flex-shrink-0" />
                    </motion.div>

                    {/* BOTÓN SKINCARE */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                        <Link
                            to="/skincare"
                            className="bg-pink-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-pink-400 transition transform hover:scale-105 font-semibold"
                        >
                            Ver Skincare 🌸
                        </Link>
                    </div>
                </div>
            </div>

            {/* --- ROPA --- */}
            <div>
                <h3 className="text-center text-4xl font-bold text-pink-700 mb-4 tracking-wide">
                    👗 Moda & Outfits 👗
                </h3>
                <p className="text-center text-pink-600 text-lg mb-6">
                    Inspiración fashion aesthetic para todos tus estilos.
                </p>

                <div className="relative w-full h-96 overflow-hidden rounded-3xl shadow-2xl">
                    <div className="absolute inset-0 bg-pink-200 opacity-20 mix-blend-multiply z-10"></div>

                    <motion.div
                        className="flex w-full h-full"
                        animate={{ x: ['0%', '-100%', '-200%', '0%'] }}
                        transition={{ repeat: Infinity, duration: 28, ease: 'easeInOut' }}
                    >
                        {/* ❗ Tus imágenes originales de ropa */}
                        <img src="https://i.pinimg.com/1200x/6c/4e/5d/6c4e5dbfcc765deebe82d233ece978a7.jpg" className="w-full h-96 object-cover flex-shrink-0" />
                        <img src="https://i.pinimg.com/1200x/f2/1c/06/f21c064afc224db0160470caa29d2c6e.jpg" className="w-full h-96 object-cover flex-shrink-0" />
                        <img src="https://i.pinimg.com/1200x/c9/8c/87/c98c8755620f9b5350ddc3804d314ba4.jpg" className="w-full h-96 object-cover flex-shrink-0" />
                    </motion.div>

                    {/* BOTÓN ROPA */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                        <Link
                            to="/ropa"
                            className="bg-pink-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-pink-400 transition transform hover:scale-105 font-semibold"
                        >
                            Ver Ropa 👗
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contenido;
