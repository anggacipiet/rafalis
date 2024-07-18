'use client'
import { HoverEffect } from "@/component/card/card-hover-effect";
import { Meta } from '@/component/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Section } from "@/component/layout/Section";

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
            description: 'Silakan melakukan negosiasi dan berkonsultasi dengan kami',
            slug: 'the-art-of-songwriting',
            isFeatured: true,
        },
        {
            title: 'Deal harga Purchase Order',
            description: 'Bila terjadi kesepakatan harga kirim PO yang dipesan melalui email kami.',
            slug: 'mastering-your-instrument',
            isFeatured: true,
        },
        {
            title: 'Pembayaran',
            description: 'Setelah kami verifikasi pembayaran, kami akan segera memproses pesanan Anda.',
            slug: 'mastering-your-instrument',
            isFeatured: true,
        },
        {
            title: 'Pengiriman',
            description: 'Setelah produk selesai, kami akan mengirimkan pesanan Anda ke alamat yang telah di sepakati',
            slug: 'mastering-your-instrument',
            isFeatured: true,
        },
    ];

    return (
        <div className="h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
            <Meta title={AppConfig.title} description={AppConfig.description} />
            <Navbar />
            <Section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">CARA PEMESANAN</p>
                </div>

                <div className="mt-10">
                    <HoverEffect
                        items={howToDotos.map(how => ({
                            icon:how.slug,
                            title: how.title,
                            description: how.description,
                            link: `/how/${how.slug}`,
                        }))}
                    />
                </div>
            </div>
            </Section>
            <Banner />
            <Footer />
        </div>
    );
};