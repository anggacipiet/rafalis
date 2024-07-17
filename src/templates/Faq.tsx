import Accordion from "@/component/accordion/Accordion"
import { Section } from "@/component/layout/Section";

const FAQ = () => {
  return (
    <>
    <div className="h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
     <Section>  
        <h1 className="font-semibold text-5xl text-white mb-8">FAQ&apos;s</h1>
        <div className="flex flex-col space-y-4">
          <Accordion title="Apa itu Beton Precast?" content="Beton yang di cetak dengan campuran semen." />
          <hr className=" border-neutral-700" />
          <Accordion title="Berapa minum po order?" content="1 Mobil" />
          <hr className=" border-neutral-700" />
          <Accordion title="Berapa persen DP agar pesanan di buat?" content="50% dari harga PO" />
          <hr className=" border-neutral-700" />
          <Accordion title="Berapa lama pengiriman?" content="Sesuai kesepakatan" />
        </div>
      </Section>  
      </div>
    </>
  )
}

export {FAQ}