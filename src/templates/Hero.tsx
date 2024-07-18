import Link from 'next/link';

import { Background } from '@/component/background/Background';
//import { Button } from '@/component/button/Button';
import { HeroOneButton } from '@/component/hero/HeroOneButton';
import { Section } from '@/component/layout/Section';
import { Navbar } from './Navbar';
import { Button } from '@/component/button/MovingBorder';

const Hero = () => (
  <Background color="bg-black"> 
    <Navbar></Navbar>
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Selamat datang! kenali produk kami\n'}
            <span className="text-red-700">Rafalis Erha Jaya</span>
          </>
        }
        description=""
        button={
           <Link legacyBehavior href="/products">
            <a>
                <Button
                    borderRadius="1.75rem"
                    className="bg-white bg-black px-4 py-2 rounded-xl text-base font-normal text-red-700 border-neutral-200 border-slate-800"
                >
                    Marketplace →
                </Button>
              </a>  
            </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
