// import React, { useContext, useEffect, useState } from 'react'
// import Title from './Title'
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Autoplay, Pagination } from "swiper/modules"
// import Item from './Item';
// import { ShopContext } from '../context/ShopContext';

// const NewArrivals = () => {

//     const {books} = useContext(ShopContext)
//     const [newArrivals, setNewArrivals] = useState([])

//     // Extract the first new books as new arivals
//     useEffect(()=>{
//         const data = books.slice(0, 7);
//         setNewArrivals(data.reverse())
//     }, [books])

//     return (
//         <section className='py-16 bg-white max-padd-container'>
//             <Title title1={'New'} title2={'Arrivals'} titleStyles={'pb-10'} paraStyles={'!block'} />
//             {/* Swiper container */}
//             <Swiper
//                 autoplay={{
//                     delay: 3500,
//                     disableOnInteraction: false
//                 }}
//                 pagination={{
//                     clickable: true
//                 }}
//                 breakpoints={{
//                     400: {
//                         slidesPerView: 2,
//                         spaceBetween: 30
//                     },
//                     700: {
//                         slidesPerView: 3,
//                         spaceBetween: 30
//                     },
//                     1024: {
//                         slidesPerView: 4,
//                         spaceBetween: 30
//                     },
//                     1200: {
//                         slidesPerView: 5,
//                         spaceBetween: 30
//                     },
//                 }}
//                 // Add swiper modules
//                 modules={[Pagination, Autoplay]}
//                 className='h-[455px] sm:h-[488px] xl:h-[499px] mt-5'
//             >
//                 {newArrivals.map((book)=>(
//                     <SwiperSlide key={book._id}>
//                         <Item book={book}/>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </section>
//     )
// }

// export default NewArrivals


import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Title from './Title'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from "swiper/modules"

import Item from './Item'
import { ShopContext } from '../context/ShopContext'

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
}

const NewArrivals = () => {

    const { books } = useContext(ShopContext)
    const [newArrivals, setNewArrivals] = useState([])

    useEffect(() => {
        const data = books.slice(0, 7)
        setNewArrivals(data.reverse())
    }, [books])

    return (
        <motion.section
            className='py-16 bg-white max-padd-container'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                visible: {
                    transition: { staggerChildren: 0.15 }
                }
            }}
        >
            {/* Title (same UI, just animated wrapper) */}
            <motion.div variants={fadeUp}>
                <Title
                    title1={'New'}
                    title2={'Arrivals'}
                    titleStyles={'pb-10'}
                    paraStyles={'!block'}
                />
            </motion.div>

            {/* Swiper container */}
            <motion.div variants={fadeUp}>
                <Swiper
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        400: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        700: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 30
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className='h-[455px] sm:h-[488px] xl:h-[499px] mt-5'
                >
                    {newArrivals.map((book, index) => (
                        <SwiperSlide key={book._id}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.05
                                }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <Item book={book} />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </motion.section>
    )
}

export default NewArrivals