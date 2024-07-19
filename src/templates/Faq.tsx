import Accordion from "@/component/accordion/Accordion"
import { Section } from "@/component/layout/Section";

const FAQ = () => {
  return (
    <>
    <div className="relative bg-black-600">
     <Section>  
        <h1 className="font-semibold text-5xl text-white mb-8">FAQ&apos;s</h1>
        <div className="flex flex-col space-y-4">
          <Accordion title="Apa itu Beton Precast?" content="Beton yang di cetak dengan campuran semen." />
          <hr className=" border-neutral-700" />
          <Accordion title="Berapa minum po order?" content="1 Mobil" />
          <hr className=" border-neutral-700" />
          <Accordion title="Berapa persen DP?" content="50% dari harga PO" />
          <hr className=" border-neutral-700" />
          <Accordion title="Berapa lama pengiriman?" content="Sesuai kesepakatan" />
        </div>
      </Section>  
      </div>
    </>
  )
}

export {FAQ}