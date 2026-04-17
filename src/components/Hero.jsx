// // import React from 'react'
// // import { Link } from 'react-router-dom'
// // import bg from "../assets/bg.png"
// // import pencil from "../assets/pencil.png"

// // const Hero = () => {
// //     return (
// //         <section className='py-20 max-padd-container xl:py-36'>
// //             <div className='flex-col gap-12 flexCenter xl:flex-row'>
// //                 {/* left side */}
// //                 <div className='flex flex-col flex-1 pt-12 xl:pt-32'>
// //                     <h1 className='h1 max-w-[46rem]'>Discover <span className='inline-flex'><span className='inline-flex items-center justify-center p-5 h-16 w-16 bg-secondary text-white -rotate-[31deg] rounded-full'>B</span>ooks</span> <img src={pencil} alt="pencilImg" height={49} width={49} className='relative inline-flex bottom-2' /> That Inspire Your World</h1>
// //                     <p>Explore a world of stories, knowledge, and inspiration. Discover books that ignite your imagination, broaden your perspective, and enrich your journey. From timeless classics to modern masterpieces, find the perfect read for every moment</p>
// //                     <div className='mt-6'>
// //                         <Link to={'/store'} className='btn-secondaryOne'>Explore Now</Link>
// //                     </div>
// //                 </div>
// //                 {/* Right side */}
// //                 <div className='relative z-10 flex flex-1 top-12'>
// //                     <div>
// //                         <img src={bg} alt="" height={588} width={588} />
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     )
// // }

// // export default Hero


// import React from 'react'
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import bg from "../assets/bg.png"
// import pencil from "../assets/pencil.png"

// const containerVariants = {
//     hidden: {},
//     visible: {
//         transition: {
//             staggerChildren: 0.2
//         }
//     }
// }

// const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.6, ease: "easeOut" }
//     }
// }

// const Hero = () => {
//     return (
//         <section className='py-20 overflow-hidden max-padd-container xl:py-36'>
//             <motion.div
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className='flex-col gap-12 flexCenter xl:flex-row'
//             >
//                 {/* left side */}
//                 <motion.div
//                     variants={fadeUp}
//                     className='flex flex-col flex-1 pt-12 xl:pt-32'
//                 >
//                     <motion.h1
//                         variants={fadeUp}
//                         className='h1 max-w-[46rem]'
//                     >
//                         Discover{" "}
//                         <span className='inline-flex'>
//                             <motion.span
//                                 whileHover={{ rotate: 0, scale: 1.1 }}
//                                 initial={{ rotate: -31 }}
//                                 className='inline-flex items-center justify-center w-16 h-16 p-5 text-white rounded-full bg-secondary'
//                             >
//                                 B
//                             </motion.span>
//                             ooks
//                         </span>{" "}
//                         <motion.img
//                             src={pencil}
//                             alt="pencilImg"
//                             height={49}
//                             width={49}
//                             className='relative inline-flex ml-2 bottom-2'
//                             animate={{ y: [0, -8, 0] }}
//                             transition={{ repeat: Infinity, duration: 2 }}
//                         />
//                         {" "}That Inspire Your World
//                     </motion.h1>

//                     <motion.p variants={fadeUp}>
//                         Explore a world of stories, knowledge, and inspiration. Discover books that ignite your imagination, broaden your perspective, and enrich your journey.
//                     </motion.p>

//                     <motion.div
//                         variants={fadeUp}
//                         className='mt-6'
//                     >
//                         <motion.div
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             <Link to={'/store'} className='btn-secondaryOne'>
//                                 Explore Now
//                             </Link>
//                         </motion.div>
//                     </motion.div>
//                 </motion.div>

//                 {/* Right side */}
//                 <motion.div
//                     variants={fadeUp}
//                     className='relative z-10 flex flex-1 top-12'
//                 >
//                     <motion.img
//                         src={bg}
//                         alt="hero"
//                         height={588}
//                         width={588}
//                         animate={{ y: [0, -20, 0] }}
//                         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                     />
//                 </motion.div>
//             </motion.div>
//         </section>
//     )
// }

// export default Hero


import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import bg from "../assets/bg.png"
import pencil from "../assets/pencil.png"

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

const Hero = () => {
    return (
        <section className='py-20 overflow-hidden max-padd-container xl:py-36'>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className='flex-col gap-12 flexCenter xl:flex-row'
            >
                {/* left side */}
                <motion.div
                    variants={fadeUp}
                    className='flex flex-col flex-1 pt-12 xl:pt-32'
                >
                    <motion.h1
                        variants={fadeUp}
                        className='h1 max-w-[46rem] -mt-6 xl:-mt-10'
                    >
                        Discover{" "}
                        <span className='inline-flex'>
                            <motion.span
                                whileHover={{ rotate: 0, scale: 1.1 }}
                                initial={{ rotate: -31 }}
                                className='inline-flex items-center justify-center w-16 h-16 p-5 text-white rounded-full bg-secondary'
                            >
                                B
                            </motion.span>
                            ooks
                        </span>{" "}
                        <motion.img
                            src={pencil}
                            alt="pencilImg"
                            height={49}
                            width={49}
                            className='relative inline-flex ml-2 bottom-2'
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        />
                        {" "}That Inspire Your World
                    </motion.h1>

                    <motion.p variants={fadeUp}>
                        Explore a world of stories, knowledge, and inspiration. Discover books that ignite your imagination, broaden your perspective, and enrich your journey.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className='mt-6'
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to={'/store'} className='btn-secondaryOne'>
                                Explore Now
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right side */}
                <motion.div
                    variants={fadeUp}
                    className='relative z-10 flex flex-1 top-12'
                >
                    <motion.img
                        src={bg}
                        alt="hero"
                        height={588}
                        width={588}
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero