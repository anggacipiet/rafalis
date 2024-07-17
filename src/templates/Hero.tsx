import Link from 'next/link';

import { Background } from '@/component/background/Background';
//import { Button } from '@/component/button/Button';
import { HeroOneButton } from '@/component/hero/HeroOneButton';
import { Section } from '@/component/layout/Section';
import { Navbar } from './Navbar';
import { Button } from '@/component/button/MovingBorder';

const Hero = () => (
  <Background color="bg-gray-900"> 
    <Navbar></Navbar>
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Selamat datang! kenali produk kami\n'}
            <span className="text-primary-500">Mulai berbelanja</span>
          </>
        }
        description=""
        button={
           <Link legacyBehavior href="/store">
            <a>
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    Marketplace
                </Button>
              </a>  
            </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
