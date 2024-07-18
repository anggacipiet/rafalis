'use client'
import { HoverEffect } from "@/component/card/card-hover-effect";

export const HowToOrders = () => {
    const howToDotos = [
        {
            title: 'Hubungi Kami Untuk Order',
            description: 'Dapat melalui layanan chat Whatsapp, telephone CS, email maupun telephone Kantor.',
            slug: 'understanding-music-theory',
            isFeatured: true,
        },
        {
            title: 'Negosiasi Harga',
            description: 'Silakan melakukan negosiasi dengan customer service kami dan berkonsultasi',
            slug: 'the-art-of-songwriting',
            isFeatured: true,
        },
        {
            title: 'Deal harga Purchase Order',
            description: 'Bila terjadi kesepakatan harga sila kirim PO produk yang dipesan melalui email kami.',
            slug: 'mastering-your-instrument',
            isFeatured: true,
        },
        {
            title: 'Pembayaran dan Pengiriman',
            description: 'Pesanan akan segera kami proses setelah melakukan pembayaran 50% dan ditransfer.',
            slug: 'mastering-your-instrument',
            isFeatured: true,
        },
    ];

    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">CARA PEMESANAN</p>
                </div>

                <div className="mt-10">
                    <HoverEffect
                        items={howToDotos.map(how => ({
                            title: how.title,
                            description: how.description,
                            link: `/how/${how.slug}`,
                        }))}
                    />
                </div>
            </div>
        </div>
    );
};