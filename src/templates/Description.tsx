import { VerticalFeatureRow } from "@/component/feature/VerticalFeatureRow";
import { Section } from "@/component/layout/Section";

const Description = () => (
  <>
    <Section
      title="Produsen dan Supplier Beton Pracetak"
      description="Seiring dengan pertumbuhan ekonomi yang cukup tinggi dan pesatnya perkembangan sektor konstruksi, khususnya pembangunan infrastruktur dan properti, PT Rafalis Erha Jaya ikut berpartisipasi melalui usaha penyediaan produk-produk Beton Siap Pakai.
      Dengan didukung staf karyawan yang berpengalaman di bidang beton, perusahaan senantiasa mengutamakan kepuasan dan kepercayaan pelanggan, dengan menjamin bahwa produk yang dihasilkan dapat memenuhi mutu yang dipersyaratkan, penyerahan produk tepat waktu serta harga yang bersaing.
      Kami yakin bahwa melalui kegiatan dan jasa kami dapat memperkuat dan mengembangkan hubungan bisnis dan suasana yang kondusif dengan relasi kami di Indonesia maupun luar negeri."
    >
      <VerticalFeatureRow
        title="Visi"
        description="Menjadi Perusahaan Beton Pilihan Utama di Indonesia."
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="Misi"
        description="Memproduksi dan menjual mutu beton yang memenuhi persyaratan pelanggan."
        image="/assets/images/feature2.svg"
        imageAlt="Second feature alt text"
        reverse
      />
    </Section>
  </>
);

export { Description };

