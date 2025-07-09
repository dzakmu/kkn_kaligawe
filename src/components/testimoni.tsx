'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function TestimonialCarousel() {
    const testimonials = [
        {
            id: 1,
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan Lorem Ipsum has been the industry's standard",
            name: "Musharof Chy",
            title: "Founder @ Pimjo",
            image: "/images/musharof-chy.jpg",
        },
        {
            id: 2,
            quote: "Produk ini benar-benar mengubah cara kami bekerja. Efisiensi meningkat drastis dan tim kami lebih produktif. Sangat direkomendasikan dan mudah digunakan!",
            name: "Siti Rahayu",
            title: "CEO @ Tech Solutions",
            image: "/images/person2.jpg",
        },
        {
            id: 3,
            quote: "Layanan pelanggan yang luar biasa dan produk yang melebihi ekspektasi. Kami sangat senang dengan hasil yang kami dapatkan dan akan terus menggunakannya.",
            name: "Budi Santoso",
            title: "Manager @ Global Corp",
            image: "/images/person3.jpg",
        },
        {
            id: 4,
            quote: "Desain UI/UX mereka sangat intuitif dan modern. Pengalaman pengguna adalah prioritas utama mereka, dan itu terlihat jelas dari setiap fitur yang ada.",
            name: "Aisha Karim",
            title: "Lead Designer @ Creative Hub",
            image: "/images/person4.jpg",
        },
        {
            id: 5,
            quote: "Sistem pengelolaan rusun ini sangat membantu. Informasi mudah diakses dan kegiatan UMKM di Rusunawa Kaligawe jadi lebih terorganisir.",
            name: "Agus Salim",
            title: "Penghuni Rusunawa Kaligawe",
            image: "/images/person5.jpg",
        },
    ];

    return (
        <section className="relative py-20 lg:py-32 bg-gradient-to-r from-white via-blue-50 to-white overflow-hidden">
            <div className="absolute bottom-10 right-10 z-0 hidden lg:block">
                <svg
                    width="80"
                    height="50"
                    viewBox="0 0 80 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 25C0 25 10 35 20 25C30 15 40 35 50 25C60 15 70 35 80 25"
                        stroke="#6366F1"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    <path
                        d="M0 35C0 35 10 45 20 35C30 25 40 45 50 35C60 25 70 45 80 35"
                        stroke="#6366F1"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    <path
                        d="M0 45C0 45 10 55 20 45C30 35 40 55 50 45C60 35 70 55 80 45"
                        stroke="#6366F1"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    centeredSlides={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1280: {
                            slidesPerView: 1,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper !pb-12"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row items-center p-6 md:p-10 max-w-4xl mx-auto">
                                <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0 lg:mr-12 relative">
                                    <div className="absolute top-0 right-0 w-full h-full bg-white border border-gray-200 rounded-2xl transform translate-x-4 -translate-y-4 shadow-sm z-0"></div>
                                    <div className="absolute top-0 right-0 w-full h-full bg-white border border-gray-200 rounded-2xl transform translate-x-8 -translate-y-8 shadow-sm hidden md:block z-0"></div>
                                    <div className="relative w-[200px] h-[200px] md:w-[220px] md:h-[220px] rounded-2xl overflow-hidden shadow-lg z-10">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/3 text-center lg:text-left mb-6 lg:mb-0 lg:pr-8 lg:pl-4">
                                    <blockquote className="text-xl lg:text-2xl font-light text-gray-800 leading-relaxed mb-4">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </blockquote>
                                    <p className="text-lg font-bold text-gray-900 mb-1">{testimonial.name}</p>
                                    <p className="text-gray-600">{testimonial.title}</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </section >
    );
}